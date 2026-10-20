import { Row, Col, Typography, Space, Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import Titulo from "../atoms/Titulo.jsx";
import Formulario from "./Formulario.jsx";

const { Paragraph, Title } = Typography;

export const Contacto = () => {
    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', marginBottom: '40px' }}>
            <Titulo text="Contacto"  />

            <Row gutter={[48, 48]} style={{ marginTop: '32px' }}>

                {/* Columna Izquierda: Info y Redes */}
                <Col xs={24} md={12}>
                    <Title level={4} style={{ color: '#54465e', marginTop: 0 }}>
                        ¿Trabajamos juntos?
                    </Title>
                    <Paragraph style={{ color: '#afadaa', fontSize: '16px', marginBottom: '24px' }}>
                        Estoy disponible para nuevos proyectos, colaboraciones o simplemente
                        para charlar sobre desarrollo web. ¡No dudes en escribirme!
                    </Paragraph>

                    <Space direction="vertical" size="middle">
                        <Button type="link" icon={<MailOutlined />} style={{ color: '#54465e', padding: 0, fontSize: '16px' }}>
                            vic.bustosf@duocuc.cl
                        </Button>
                        <Button type="link" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/victoria-bustos-79201b445/?isSelfProfile=true" target="_blank" style={{ color: '#54465e', padding: 0, fontSize: '16px' }}>
                            linkedin.com/in/victoria-bustos
                        </Button>
                        <Button type="link" icon={<GithubOutlined />} href="https://github.com/vicbustosf" target="_blank" style={{ color: '#54465e', padding: 0, fontSize: '16px' }}>
                            github.com/vicbustosf
                        </Button>
                    </Space>
                </Col>

                {/* Columna Derecha: El Formulario */}
                <Col xs={24} md={12}>
                    {/* Envolvemos el formulario en un Card para que resalte */}
                    <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                        <Formulario />
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Contacto;