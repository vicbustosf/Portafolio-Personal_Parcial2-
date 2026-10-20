import './App.css';
import { ConfigProvider, theme } from 'antd';
import SobreMi from "./components/organisms/SobreMi.jsx";
import ExperienciaLaboral from "./components/organisms/ExperienciaLaboral.jsx";
import Estudios from "./components/organisms/Estudios.jsx";
import Proyectos from "./components/organisms/Proyectos.jsx";
import Contacto from "./components/organisms/Contacto.jsx";
import VicLayout from "./components/layouts/VicLayout.jsx";
import { useTema } from './hooks/useTema.js';

function App() {
    const { tema } = useTema();

    return (
        // ConfigProvider es como un "control remoto" de Ant Design.
        // Le pasamos nuestras variables CSS para que los inputs y botones usen nuestros colores.
        <ConfigProvider
            theme={{
                // Si el tema es 'dark', usa el algoritmo oscuro. Si no, el claro.
                algorithm: tema === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#7b5ea7',
                    borderRadius: 8, // Bordes un poco redondeados
                    fontFamily: 'Inter, sans-serif', // tipografía
                    colorBgContainer: 'var(--color-fondo-secundario)', // Fondo de los inputs
                    colorText: 'var(--color-texto-principal)', // Texto dentro de los inputs
                    colorBorder: 'var(--color-borde)', // Color de los bordes
                    colorError: 'var(--color-error)', // Color de los mensajes de error
                },
            }}
        >
            <VicLayout>
                {/* Este div es el que arma las dos columnas */}
                <div style={{
                    display: 'flex', // Pone los elementos uno al lado del otro
                    gap: '5%', // Separación entre las columnas
                    maxWidth: '1300px', // Ancho máximo para que no se estire de más
                    margin: '0 auto', // Centra todo el bloque en la pantalla
                    padding: '80px 40px', // Espacio arriba, abajo y a los lados
                    alignItems: 'flex-start' // Alinea todo al inicio (arriba)
                }}>

                    {/* COLUMNA IZQUIERDA*/}
                    <div style={{
                        width: '35%', // Ocupa el 35% del ancho
                        position: 'sticky', // Hace que se quede fija al hacer scroll
                        top: '120px', // Se queda pegada a 120px del techo
                        height: 'fit-content' // Altura justa al contenido
                    }}>
                        <SobreMi />
                    </div>

                    {/* COLUMNA DERECHA */}
                    <div style={{ width: '60%' }}>
                        <ExperienciaLaboral />
                        <Estudios />
                        <Proyectos />
                    </div>
                </div>

                {/* El Contacto va afuera del div de columnas para que ocupe todo el ancho */}
                <Contacto />
            </VicLayout>
        </ConfigProvider>
    );
}

export default App;

{/* Quería hacer algo dinámico, pero hay muchas cosas que no salieron bien xdd */}