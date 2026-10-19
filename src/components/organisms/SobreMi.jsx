import { Avatar, Typography, Space } from 'antd';
import miFoto from '../../assets/Avatar.jpg';
import Titulo from "../atoms/Titulo.jsx";

const { Title, Paragraph } = Typography;

const SobreMi = () => {
    return (
        <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f5f4f4' }}>
            <Space direction="vertical" size="middle" align="center">

                <Avatar
                    size={150}
                    src={miFoto}
                    style={{
                        backgroundColor: '#d1c5d9',
                        border: '4px solid #54465e',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}
                />

                <Titulo text="Sobre Mí" />
                <Title level={4} style={{ color: '#afadaa', marginTop: '8px', fontWeight: 'normal' }}>
                    Analista Programador
                </Title>

                <Paragraph style={{ maxWidth: '600px', fontSize: '16px', color: '#54465e' }}>
                    Hola, soy Victoria Bustos. Me apasiona crear interfaces web accesibles,
                    funcionales y con un diseño limpio. Aquí encontrarás un poco sobre mi
                    experiencia y los proyectos en los que he trabajado.
                </Paragraph>
            </Space>
        </div>
    );
};

export default SobreMi;