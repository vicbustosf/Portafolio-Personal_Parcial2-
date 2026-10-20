// src/components/organisms/ExperienciaLaboral.jsx
import { useState, useEffect } from 'react';
import { Row, Col, Typography, Card, Button, Input, message, notification } from 'antd';
import Titulo from "../atoms/Titulo.jsx";

const { Paragraph, Text, Title } = Typography;

const ExperienciaLaboral = () => {
    // --- Lógica del mini juego "Adivina el número" ---
    const [numeroSecreto, setNumeroSecreto] = useState(0);
    const [intento, setIntento] = useState('');
    const [mensajeJuego, setMensajeJuego] = useState('');
    const [intentosRestantes, setIntentosRestantes] = useState(5);

    // Inicializar el juego al montar el componente
    useEffect(() => {
        reiniciarJuego();
    }, []);

    const reiniciarJuego = () => {
        setNumeroSecreto(Math.floor(Math.random() * 10) + 1); // Número del 1 al 10
        setIntento('');
        setMensajeJuego('');
        setIntentosRestantes(5);
    };

    const manejarIntento = () => {
        const num = parseInt(intento);
        if (isNaN(num)) {
            setMensajeJuego('Por favor, ingresa un número válido.');
            return;
        }

        if (num === numeroSecreto) {
            setMensajeJuego('¡Felicidades! Adivinaste el número. 🎉');
            notification.success({ message: '¡Ganaste!', description: 'Eres muy bueno adivinando.' });
        } else if (intentosRestantes > 1) {
            setMensajeJuego(num < numeroSecreto ? 'El número es más alto 📈' : 'El número es más bajo 📉');
            setIntentosRestantes(intentosRestantes - 1);
        } else {
            setMensajeJuego(`¡Game Over! El número era ${numeroSecreto}.`);
        }
        setIntento('');
    };

    // --- Lógica del botón "Contratar" (Confeti) ---
    const [confeti, setConfeti] = useState([]);
    const manejarContratacion = () => {
        const nuevosConfetis = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 2,
        }));
        setConfeti(nuevosConfetis);
        notification.success({
            title: '¡Contratada!',
            description: 'Gracias por considerarme. ¡Estoy lista para el desafío!',
            placement: 'topRight'
        });
        setTimeout(() => setConfeti([]), 4000); // Limpiar después de 4s
    };

    return (
        <div id="experiencia" style={{ padding: '40px 0', position: 'relative' }}>
            {/* Efecto Confeti */}
            {confeti.map((c) => (
                <div key={c.id} style={{
                    position: 'fixed', top: '-10px', left: `${c.left}%`, fontSize: '24px',
                    animation: `caer 3s linear ${c.animationDelay}s forwards`, zIndex: 9999
                }}>
                    🎉
                </div>
            ))}
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

                    <Button
                        type="primary"
                        onClick={manejarContratacion}
                        block
                    >
                        ¡Contrátame!
                    </Button>

                </Col>

                {/* Mini Juego */}
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
                        <Input
                            placeholder="Ingresa tu número"
                            value={intento}
                            onChange={(e) => setIntento(e.target.value)}
                            style={{ marginBottom: '16px', textAlign: 'center' }}
                            onPressEnter={manejarIntento}
                        />
                        <Button type="primary" onClick={manejarIntento} block>
                            Adivinar
                        </Button>
                        {mensajeJuego && (
                            <Text style={{ display: 'block', marginTop: '16px', color: 'var(--color-primario)', fontWeight: 'bold' }}>
                                {mensajeJuego}
                            </Text>
                        )}
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