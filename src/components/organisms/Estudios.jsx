import { Row, Col, Typography, Card } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import Titulo from "../atoms/Titulo.jsx";

const { Title, Paragraph } = Typography;

const Estudios = () => {
    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <Titulo text="Estudios" />

            <Row gutter={[32, 32]} align="middle" style={{ marginTop: '24px' }}>

                <Col xs={24} md={{ span: 8, order: 1 }} style={{ textAlign: 'center' }}>
                    <Card style={{ borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: '#d1c5d9' }}>
                        <ReadOutlined style={{ fontSize: '60px', color: '#54465e' }} />
                    </Card>
                </Col>

                {/* Texto a la derecha */}
                <Col xs={24} md={{ span: 16, order: 2 }}>
                    <Title level={4} style={{ color: '#54465e', marginTop: 0 }}>Ingeniería en Informática</Title>
                    <Paragraph style={{ color: '#afadaa', fontSize: '16px' }}>
                        Universidad de Santiago de Chile (2018 - 2022)
                    </Paragraph>
                    <Paragraph style={{ color: '#54465e', fontSize: '16px' }}>
                        Especialización en desarrollo de software y arquitecturas web modernas.
                        Proyecto de título enfocado en la optimización de aplicaciones React.
                    </Paragraph>

                    Con imagenes y todo pls
                    Educación Basica = Campos de Maipú = 2010(2008) - 2016
                    Educación Media = Carolina Llona de Cuevas (Sede Maipú) (C-H) Científico Matemático = 2017 - 2021
                    Educación Superior: Duoc UC (Sede Maipú) Analista Programador = 2025 - ...
                </Col>

            </Row>
        </div>
    );
};

export default Estudios;