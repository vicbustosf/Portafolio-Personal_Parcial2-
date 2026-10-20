import { Row, Col, Card, Typography, Button } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import Titulo from "../atoms/Titulo.jsx";

const { Meta } = Card;
const { Paragraph } = Typography;

const proyectosData = [
    {
        id: 1,
        titulo: 'Pato nose q',
        descripcion: 'Mi sitio web personal construido con React, Vite y Ant Design.',
        imagen: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop', // URL de ejemplo
        linkGithub: 'https://github.com/vicbustosf',
        linkDemo: 'https://tu-portafolio.com'
    },
    {
        id: 2,
        titulo: 'DecoHogar',
        descripcion: 'Tienda online con carrito de compras y pasarela de pagos.',
        imagen: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop',
        linkGithub: 'https://github.com/ostavolari/Evaluacion_Parcial_1-CASO-5_TIENDA_DECOHOGAR.git',
        linkDemo: '#'
    },
    {
        id: 3,
        titulo: 'TechStore',
        descripcion: 'Panel de control para visualización de datos en tiempo real.',
        imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        linkGithub: 'https://github.com/JaePewu/techstore.git',
        linkDemo: '#'
    }
];

const Proyectos = () => {
    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <Titulo text="Desarrollos y Proyectos"  />

            {/* Galería usando Row y Col */}
            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>

                {proyectosData.map((proyecto) => (
                    <Col xs={24} sm={12} md={8} key={proyecto.id}>

                        <Card
                            hoverable // Efecto al pasar el mouse
                            cover={
                                <img
                                    alt={proyecto.titulo}
                                    src={proyecto.imagen}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                            }
                            actions={[
                                // Boton de acción en la parte inferior de la tarjeta
                                <Button type="link" icon={<GithubOutlined />} href={proyecto.linkGithub} target="_blank"></Button>,
                            ]}
                            style={{ borderRadius: '12px', overflow: 'hidden' }}
                        >
                            <Meta
                                title={<span style={{ color: '#54465e' }}>{proyecto.titulo}</span>}
                                description={
                                    <Paragraph style={{ color: '#afadaa', margin: 0 }}>
                                        {proyecto.descripcion}

                                        Poner cómo un cosito que muestre proyecto por proyecto, tipo en barrido (Fullstack java, BackEnd, FrontEnt y BD),
                                        avanzar al siguiente proyecto y demás.
                                    </Paragraph>
                                }
                            />
                        </Card>

                    </Col>
                ))}

            </Row>
        </div>
    );
};

export default Proyectos;