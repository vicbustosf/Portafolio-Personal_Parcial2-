import { Row, Col, Typography, Card } from 'antd';
import Titulo from "../atoms/Titulo.jsx";

const { Paragraph } = Typography;

const ExperienciaLaboral = () => {
    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>

            <Row gutter={[32, 32]} align="middle" style={{ marginTop: '24px' }}>

                <Col xs={24} md={14}>
                    <Titulo text="Experiencia Laboral" />
                    <Paragraph style={{ color: '#54465e', fontSize: '16px' }}>
                        En mi rol actual, me encargo de diseñar y desarrollar componentes
                        reutilizables usando React y Ant Design. He liderado la migración
                        de la interfaz a un sistema de diseño unificado, mejorando la
                        velocidad de desarrollo en un 30%.
                    </Paragraph>
                    <ul style={{ color: '#afadaa', paddingLeft: '20px' }}>
                        <li>Desarrollo de SPA con React.</li>
                        <li>Implementación de pruebas con Vitest.</li>
                        <li>Manejo de estado global y hooks personalizados.</li>
                    </ul>

                    no tengo xd poner una frase tipo: esperando que me contraten y un mini juego muuy facil de programar.
                </Col>

                {/* Columna Derecha (El "Cuadro con la A") */}
                <Col xs={24} md={10} style={{ textAlign: 'center' }}>
                    <Card style={{ borderRadius: '16px', borderColor: '#d1c5d9', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        {/* Aquí puedes poner una imagen, un icono grande, o el logo de la empresa */}
                        <div style={{ fontSize: '80px', color: '#d1c5d9', fontWeight: 'bold', fontFamily: 'serif' }}>
                            A
                        </div>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default ExperienciaLaboral;