// src/components/layouts/VicLayout.jsx
import { Layout } from 'antd';
import AnnoActual from '../atoms/AnnoActual.jsx';
import BotonTema from '../atoms/BotonTema.jsx';
import MenuNavegacion from '../molecules/MenuNavegacion.jsx';
import { useTema } from '../../hooks/useTema.js';
import { MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'; // Iconos para el footer

const { Header, Footer, Content } = Layout;

export const VicLayout = ({ children }) => {
    const { tema, alternarTema } = useTema();

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
            {/* HEADER FIJO */}
            // En VicLayout.jsx, el Header debe verse así:
            <Header style={{
                backgroundColor: 'var(--color-header)',
                backdropFilter: 'blur(10px)',
                padding: '0 24px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                borderBottom: '1px solid var(--color-borde)'
            }}>
                <MenuNavegacion />
                <BotonTema tema={tema} alternarTema={alternarTema} />
            </Header>

            {/* CONTENIDO - Aquí quitamos el flex para que App.jsx decida el layout */}
            <Content style={{ paddingTop: '64px', flex: 1 }}>
                {children}
            </Content>

            {/* FOOTER CON ICONOS */}
            <Footer style={{
                textAlign: 'center',
                backgroundColor: 'var(--color-fondo-secundario)',
                color: 'var(--color-texto-secundario)',
                padding: '40px 20px',
                borderTop: '1px solid var(--color-borde)'
            }}>
                <p style={{ margin: 0, fontSize: '14px' }}>
                    © <AnnoActual /> Victoria Bustos | Todos los derechos reservados ♥
                </p>
            </Footer>
        </Layout>
    );
};

export default VicLayout;