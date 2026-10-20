import { Row, Col, Typography, Space, Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import Titulo from "../atoms/Titulo.jsx";
import Formulario from "./Formulario.jsx";

const { Paragraph, Title } = Typography;

export const Contacto = () => {
    return (
        <div id="contacto" style={{ padding: '60px 0', width: '100%', borderTop: '1px solid var(--color-borde)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <Titulo text="Contacto" />

                <Row gutter={[48, 48]} style={{ marginTop: '32px' }}>
                    {/* Columna Izquierda: Info */}
                    <Col xs={24} md={12}>
                        <Title level={4} style={{ color: 'var(--color-texto-principal)', marginTop: 0 }}>
                            ¿Trabajamos juntos?
                        </Title>
                        <Paragraph style={{ color: 'var(--color-texto-secundario)', fontSize: '16px', marginBottom: '24px' }}>
                            Estoy disponible para nuevos proyectos, colaboraciones o simplemente
                            para charlar sobre desarrollo web. ¡No dudes en escribirme!
                        </Paragraph>

                        <Space direction="horizontal" size="large">
                            <Button
                                type="text"
                                icon={<MailOutlined />}
                                style={{color: 'var(--color-texto-principal)', fontSize: '16px', padding: 0}}>
                                vic.bustosf@duocuc.cl
                            </Button>

                            <Button
                                type="text"
                                shape="circle"
                                size="large"
                                icon={<LinkedinOutlined style={{ fontSize: '24px', color: 'var(--color-texto-principal)' }} />}
                                href="https://www.linkedin.com/in/victoria-bustos-79201b445/"
                                target="_blank"
                            />
                            <Button
                                type="text"
                                shape="circle"
                                size="large"
                                icon={<GithubOutlined style={{ fontSize: '24px', color: 'var(--color-texto-principal)' }} />}
                                href="https://github.com/vicbustosf"
                                target="_blank"
                            />
                        </Space>
                    </Col>

                    {/* Columna Derecha: Formulario */}
                    <Col xs={24} md={12}>
                        <div style={{ backgroundColor: 'var(--color-fondo-secundario)', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--color-borde)' }}>
                            <Formulario />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contacto;