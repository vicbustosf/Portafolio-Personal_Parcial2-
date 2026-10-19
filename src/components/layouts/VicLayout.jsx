import { Layout } from 'antd';
import AnnoActual from "../atoms/AnnoActual.jsx";

const { Header, Footer, Content } = Layout;

const VicLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f4f4' }}>
            <Header style={{ backgroundColor: '#d1c5d9', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
                <b style={{ color: '#54465e' }}>Sobre Mí | Experiencia | Estudios | Proyectos | Contacto</b>
            </Header>

            <Content style={{ padding: '24px', flex: 1 }}>
                {children}
            </Content>

            <Footer style={{ textAlign: 'center', backgroundColor: '#252525', color: '#80817e', padding: '20px 0' }}>
                © <AnnoActual /> Victoria Bustos ♥ Todos los derechos reservados | Política de privacidad
                <br />
                Contacto: vic.bustosf@duocuc.cl | GitHub | LinkedIn
            </Footer>
        </Layout>
    );
};

export default VicLayout;