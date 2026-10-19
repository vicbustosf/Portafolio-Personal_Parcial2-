import { useState } from 'react';
import { Layout, Typography } from 'antd';
import './App.css';
import SobreMi from "./components/organisms/SobreMi.jsx" ;

function App() {
    const { Header, Footer, Content } = Layout;
    const { Title } = Typography;

    return (
        <Layout style={{minHeight: '100vh', backgroundColor: '#f5f4f4'}}>
            <Header style={{backgroundColor: '#d1c5d9', color: '#54465e', padding: '0 24px', height: '64px', display: 'flex', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',}}>
                <b>Sobre Mí/Experiencia Laboral/Estudios/Desarrollos y Proyectos/Contacto</b>
            </Header>

            <Content style={{padding: '24px', flex: 1, color: '#afadaa'}}>
                <SobreMi />

                <Title style={{color: '#54465e'}}>Experiencia Laboral</Title>
                no tengo xd poner una frase tipo: esperando que me contraten y un mini juego muuy facil de programar.
                <Title style={{color: '#54465e'}}>Estudios</Title>

                <Title style={{color: '#54465e'}}>Desarrollos y Proyectos</Title>
                Poner cómo un cosito que muestre proyecto por proyecto, tipo en barrido (Fullstack java, BackEnd, FrontEnt y BD),
                avanzar al siguiente proyecto y demás.
                <Title style={{color: '#54465e'}}>Contacto</Title>
                Hacer el fondo más lindo
            </Content>

            <Footer style={{textAlign: 'center', backgroundColor: '#252525', color: '#80817e', padding: '20px 0'}}>
                © 2014-2023 MoureDev by Brais Moure v3. Building software with ♥ from Galicia to the world.
                | Política de privacidad
                <br></br>
                Debe incluir información dinámica (año actual calculado mediante código), derechos
                de autor e información breve de contacto.
            </Footer>
        </Layout>
    );
}

export default App;