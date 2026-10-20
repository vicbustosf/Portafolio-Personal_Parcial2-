import { Typography, Tag, Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined, GithubOutlined } from '@ant-design/icons';
import Titulo from "../atoms/Titulo.jsx";
import DecoHogar from '../../assets/DecoHogar.png';
import TechStore from '../../assets/TechStore.png';
import Instrumentum from '../../assets/Instrumentum.png';

const { Paragraph, Title } = Typography;

// Arreglo con los proyectos
const proyectosData = [
    {
        id: 1,
        titulo: 'DecoHogar',
        descripcion: 'Tienda online dedicada a la decoración del hogar, con carrito de compras, registro e inicio de sesión y blogs enfocados en decoración.',
        imagen: DecoHogar,
        linkGithub: 'https://github.com/ostavolari/Evaluacion_Parcial_1-CASO-5_TIENDA_DECOHOGAR.git',
        tags: ['Fullstack', 'HTML5', 'Javascript'],
    },
    {
        id: 2,
        titulo: 'TechStore',
        descripcion: 'Gestor de productos. Parte de un microservicio desarrollado con Java SpringBoot para una tienda ficticia llamada "TeachStore".',
        imagen: TechStore,
        linkGithub: 'https://github.com/JaePewu/techstore.git',
        tags: ['Backend', 'Java', 'Base de Datos']
    },
    {
        id: 3,
        titulo: 'Instrumentum',
        descripcion: 'Plataforma de gestión integral de equipamiento técnico para músicos y bandas.',
        imagen: Instrumentum,
        linkGithub: 'https://github.com/vicbustosf/Instrumentum_Bustos_Tavolari_010D.git',
        tags: ['Backend', 'Fullstack', 'Java']
    }
];

const Proyectos = () => {
    //flechas del carrusel.
    const FlechaIzquierda = ({ onClick }) => (
        <Button type="text" icon={<LeftOutlined />} onClick={onClick}
                style={{ position: 'absolute', left: -40, top: '50%', zIndex: 2, color: 'var(--color-texto-principal)' }} />
    );
    const FlechaDerecha = ({ onClick }) => (
        <Button type="text" icon={<RightOutlined />} onClick={onClick}
                style={{ position: 'absolute', right: -40, top: '50%', zIndex: 2, color: 'var(--color-texto-principal)' }} />
    );

    return (
        <div id="proyectos" style={{ padding: '40px 0', position: 'relative' }}>
            <Titulo text="Desarrollos y Proyectos" />

            <div style={{ padding: '0 40px' }}>
                <Carousel
                    arrows={true} // Activamos las flechas
                    prevArrow={<FlechaIzquierda />} // Le pasamos nuestra flecha personalizada
                    nextArrow={<FlechaDerecha />}
                    style={{ marginTop: '24px' }}
                >
                    {/* Recorremos los proyectos y creamos una tarjeta por cada uno */}
                    {proyectosData.map((proyecto) => (
                        <div key={proyecto.id}>
                            <div style={{
                                backgroundColor: 'var(--color-fondo-secundario)',
                                border: '1px solid var(--color-borde)',
                                borderRadius: '16px',
                                padding: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}>
                                {/* Imagen del proyecto */}
                                <img src={proyecto.imagen} alt={proyecto.titulo} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />

                                <Title level={4} style={{ color: 'var(--color-texto-principal)', margin: 0 }}>{proyecto.titulo}</Title>
                                <Paragraph style={{ color: 'var(--color-texto-secundario)', margin: 0 }}>{proyecto.descripcion}</Paragraph>

                                {/* Etiquetas de tecnologías */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                                    {proyecto.tags.map((tag) => (
                                        <Tag
                                            key={tag}
                                            style={{
                                                backgroundColor: 'rgba(139, 92, 246, 0.1)', // Fondo morado transparente
                                                color: 'var(--color-primario)',
                                                border: 'none',
                                                borderRadius: '20px', // Bordes bien redondos
                                                padding: '4px 12px',
                                                fontWeight: 500,
                                                fontSize: '13px'
                                            }}
                                        >
                                            {tag}
                                        </Tag>
                                    ))}
                                </div>

                                {/* Botón GitHub */}
                                <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                                    <Button
                                        type="primary"
                                        icon={<GithubOutlined />}
                                        href={proyecto.linkGithub}
                                        target="_blank" // Abre en pestaña nueva
                                    >
                                        Repositorio
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Proyectos;