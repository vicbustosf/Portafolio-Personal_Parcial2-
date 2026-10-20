import { useState, useEffect } from 'react';
import { Row, Col, Typography, Card, Button, Input, notification } from 'antd';
import Titulo from "../atoms/Titulo.jsx";

const { Paragraph, Text } = Typography;

// Estado minijuego
const ExperienciaLaboral = () => {
    // numeroSecreto: Guarda el número aleatorio que el usuario debe adivinar.
    const [numeroSecreto, setNumeroSecreto] = useState(0);
    // intento: Guarda el texto que el usuario escribe en el input.
    const [intento, setIntento] = useState('');
    // mensajeJuego: Guarda el texto de pistas ("Es más alto", "Ganaste", etc.).
    const [mensajeJuego, setMensajeJuego] = useState('');
    // intentosRestantes: Lleva la cuenta de cuántos intentos le quedan al usuario.
    const [intentosRestantes, setIntentosRestantes] = useState(5);

    // useEffect se ejecuta una sola vez cuando carga la página (gracias al arreglo vacío [])
    // Sirve para iniciar el juego desde cero apenas se abre la sección.
    useEffect(() => {
        reiniciarJuego();
    }, []);

    // Función para reiniciar el juego
    const reiniciarJuego = () => {
        // Math.random() * 10 da un decimal del 0 al 9.99. Math.floor lo redondea hacia abajo.
        // Le sumamos 1 para que el número vaya del 1 al 10.
        setNumeroSecreto(Math.floor(Math.random() * 10) + 1);
        setIntento('');
        setMensajeJuego('');
        setIntentosRestantes(5);
    };

    // Función que se ejecuta cuando el usuario aprieta "Adivinar"
    const manejarIntento = () => {
        // Convertimos el texto del input a un número entero
        const num = parseInt(intento);

        // Si no es un número, muestra error y cortamos la función con return
        if (isNaN(num)) {
            setMensajeJuego('Por favor, ingresa un número válido.');
            return;
        }

        // Comparamos el número del usuario con el secreto
        if (num === numeroSecreto) {
            setMensajeJuego('¡Felicidades! Adivinaste el número. 🎉');
            // Mostramos una notificación bonita en la esquina
            notification.success({ message: '¡Ganaste!', description: 'Eres muy bueno adivinando.' });
        } else if (intentosRestantes > 1) {
            // Si no adivinó pero le quedan intentos, damos pistas
            setMensajeJuego(num < numeroSecreto ? 'El número es más alto 📈' : 'El número es más bajo 📉');
            setIntentosRestantes(intentosRestantes - 1);
        } else {
            // Si se quedó sin intentos, pierde.
            setMensajeJuego(`¡Game Over! El número era ${numeroSecreto}.`);
        }

        setIntento(''); // Limpiamos el input para el próximo intento
    };

    // Estado confeti: Guarda un arreglo de emojis que se caen por la pantalla
    const [confeti, setConfeti] = useState([]);

    const manejarContratacion = () => {
        // Creamos 30 emojis con posiciones horizontales y tiempos aleatorios.
        const nuevosConfetis = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Posición horizontal aleatoria (0% a 100%)
            animationDelay: Math.random() * 2, // Tiempo de espera para que caigan desordenados
        }));
        setConfeti(nuevosConfetis); // Los guardamos en el estado para que se dibujen

        // Mostramos la notificación
        notification.success({
            title: '¡Contratada!',
            description: 'Gracias por considerarme. ¡Estoy lista para el desafío!',
            placement: 'topRight'
        });

        // Después de 4 segundos, se vacia el arreglo para que los emojis desaparezcan
        setTimeout(() => setConfeti([]), 4000);
    };

    return (
        <div id="experiencia" style={{ padding: '40px 0', position: 'relative' }}>

            {/* aqui se dibuja el confeti, recorremos el arreglo y creamos un div por cada emoji */}
            {confeti.map((c) => (
                <div key={c.id} style={{
                    position: 'fixed',
                    top: '-10px',
                    left: `${c.left}%`, // Usa la posición aleatoria que creamos
                    fontSize: '24px',
                    // Llama a la animación 'caer'
                    animation: `caer 3s linear ${c.animationDelay}s forwards`,
                    zIndex: 9999 // Para que se vea por encima de todo
                }}>
                    🎉
                </div>
            ))}

            {/*Para la animación del confeti */}
            <style>{`
                @keyframes caer {
                    to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
            `}</style>

            <Titulo text="Experiencia Laboral" />

            <Row gutter={[32, 32]} align="middle" style={{ marginTop: '24px' }}>
                <Col xs={24} md={14}>
                    <Paragraph style={{ color: 'var(--color-texto-principal)', fontSize: '16px' }}>
                        Actualmente no tengo experiencia formal. Me encuentro en búsqueda de mi primera
                        oportunidad laboral en el área de desarrollo. Aunque he desarrollado proyectos
                        académicos que me han permitido dominar el desarrollo de páginas web, administración
                        de base de datos, frontend y backend.
                    </Paragraph>
                    <Paragraph style={{ color: 'var(--color-texto-secundario)', fontStyle: 'italic', marginTop: '16px' }}>
                        Esperando que me contraten para demostrar todo mi potencial✨
                    </Paragraph>

                    <Button type="primary" onClick={manejarContratacion} block>
                        ¡Contrátame!
                    </Button>
                </Col>

                {/* Columna del Mini Juego */}
                <Col xs={24} md={10}>
                    <Card
                        title="Mini Juego: Adivina el Número"
                        style={{
                            backgroundColor: 'var(--color-fondo-secundario)',
                            borderColor: 'var(--color-borde)',
                            textAlign: 'center'
                        }}
                        headStyle={{ color: 'var(--color-texto-principal)', borderColor: 'var(--color-borde)' }}
                    >
                        <Paragraph style={{ color: 'var(--color-texto-secundario)' }}>
                            Estoy pensando en un número del 1 al 10. Tienes {intentosRestantes} intentos.
                        </Paragraph>

                        {/* El input está conectado al estado intento */}
                        <Input
                            placeholder="Ingresa tu número"
                            value={intento}
                            onChange={(e) => setIntento(e.target.value)} // Cada que escribe, se actualiza el estado
                            style={{ marginBottom: '16px', textAlign: 'center' }}
                            onPressEnter={manejarIntento} // También se puede presionar Enter
                        />

                        <Button type="primary" onClick={manejarIntento} block>
                            Adivinar
                        </Button>

                        {/* Si hay un mensaje en el estado, lo mostramos */}
                        {mensajeJuego && (
                            <Text style={{ display: 'block', marginTop: '16px', color: 'var(--color-primario)', fontWeight: 'bold' }}>
                                {mensajeJuego}
                            </Text>
                        )}

                        {/* Si se quedó sin intentos, mostramos botón de reiniciar */}
                        {intentosRestantes === 0 && (
                            <Button type="primary" onClick={reiniciarJuego} block>
                                Jugar de nuevo
                            </Button>
                        )}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ExperienciaLaboral;