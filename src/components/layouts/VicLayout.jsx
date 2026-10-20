import { Layout, Menu } from 'antd';
import AnnoActual from "../atoms/AnnoActual.jsx";

const { Header, Footer, Content } = Layout;

// Opciones del menú de navegación
const menuItems = [
    { key: 'sobre-mi', label: 'Sobre Mí', href: "../organisms/SobreMi.jsx" },
    { key: 'experiencia', label: 'Experiencia', href: '#experiencia' },
    { key: 'estudios', label: 'Estudios', href: '#estudios' },
    { key: 'proyectos', label: 'Proyectos', href: '#proyectos' },
    { key: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const VicLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f4f4' }}>

            {/* HEADER FIJO */}
            <Header style={{
                backgroundColor: '#d1c5d9',
                padding: '0 24px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                position: 'fixed', // Lo fija en la pantalla
                top: 0,
                width: '100%',
                zIndex: 1000 // Asegura que esté por encima de todo
            }}>
                {/* Menú de Ant Design para navegar por anclas */}
                <Menu
                    mode="horizontal"
                    items={menuItems}
                    style={{
                        backgroundColor: 'transparent',
                        borderBottom: 'none',
                        flex: 1,
                        justifyContent: 'right' // Centra los links
                    }}
                />
            </Header>

            {/* CONTENIDO */}
            <Content style={{
                padding: '24px',
                flex: 1,
                paddingTop: '88px' // 64px del header + 24px de margen original
            }}>
                {children}
            </Content>

            {/* FOOTER (Aparece al final) */}
            <Footer style={{ textAlign: 'center', backgroundColor: '#252525', color: '#80817e', padding: '20px 0' }}>
                © <AnnoActual /> Victoria Bustos ♥ Todos los derechos reservados | Política de privacidad
                <br />
                Contacto: vic.bustosf@duocuc.cl | GitHub | LinkedIn
            </Footer>
        </Layout>
    );
};

export default VicLayout;