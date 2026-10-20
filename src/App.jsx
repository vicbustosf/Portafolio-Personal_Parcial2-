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
        <ConfigProvider
            theme={{
                algorithm: tema === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#7b5ea7',
                    borderRadius: 8,
                    fontFamily: 'Inter, sans-serif',
                    colorBgContainer: 'var(--color-fondo-secundario)',
                    colorText: 'var(--color-texto-principal)',
                    colorBorder: 'var(--color-borde)',
                    colorError: 'var(--color-error)',
                },
            }}
        >
            <VicLayout>
                <div style={{
                    display: 'flex',
                    gap: '5%',
                    maxWidth: '1300px',
                    margin: '0 auto',
                    padding: '80px 40px',
                    alignItems: 'flex-start'
                }}> {/* Columna Isquierda */}
                    <div style={{
                        width: '35%',
                        position: 'sticky',
                        top: '120px',
                        height: 'fit-content'
                    }}>
                        <SobreMi />
                    </div>

                    {/* Columna Derecha */}
                    <div style={{ width: '60%' }}>
                        <ExperienciaLaboral />
                        <Estudios />
                        <Proyectos />
                    </div>
                </div>
                <Contacto />
            </VicLayout>
        </ConfigProvider>
    );
}

export default App;