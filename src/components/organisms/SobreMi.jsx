import { Avatar, Typography, Space } from 'antd';
import miFoto from '../../assets/Avatar.jpg';

const { Title, Paragraph, Text } = Typography;

const SobreMi = () => {
    return (
        // Enlace directo a esta parte
        <div id="sobre-mi" style={{ padding: '20px 0', maxWidth: '400px' }}>

            <Space direction="vertical" size="middle" align="start">

                <Avatar
                    size={200}
                    src={miFoto}
                    style={{
                        border: '4px solid var(--color-primario)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' //pequeña sombra
                    }}
                />

                <Title level={1} style={{ color: 'var(--color-texto-principal)', margin: '16px 0 0 0' }}>
                    Sobre Mí
                </Title>

                <Text style={{ fontSize: '20px', color: 'var(--color-texto-secundario)', fontWeight: 500 }}>
                    ¡Hola, soy Victoria Bustos!
                </Text>

                <Paragraph style={{ fontSize: '16px', color: 'var(--color-texto-principal)', lineHeight: 1.6, marginTop: '16px' }}>
                    Soy estudiante de la carrera Analista Programador en Duoc UC.
                    Actualmente estoy aprendiendo y mejorando mis habilidades en el desarrollo frontend.
                    Aquí encontrarás un poco sobre mi experiencia y los proyectos en los que he trabajado.
                </Paragraph>
            </Space>
        </div>
    );
};

export default SobreMi;