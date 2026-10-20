// src/components/organisms/Estudios.jsx
import { Row, Col, Typography, Card } from 'antd';
import { BankOutlined, ReadOutlined} from '@ant-design/icons';
import Titulo from "../atoms/Titulo.jsx";

const { Title, Paragraph } = Typography;

const estudiosData = [
    {
        id: 1,
        icono: <BankOutlined style={{ fontSize: '40px', color: 'var(--color-primario)' }} />,
        titulo: 'Educación Media',
        institucion: 'Carolina Llona de Cuevas (Sede Maipú)',
        fecha: '2017 - 2021',
        extra: 'Científico Matemático'
    },
    {
        id: 2,
        icono: <ReadOutlined style={{ fontSize: '40px', color: 'var(--color-primario)' }} />,
        titulo: 'Educación Superior',
        institucion: 'Duoc UC (Sede Maipú)',
        fecha: '2025 - Actualidad',
        extra: 'Analista Programador'
    }
];

const Estudios = () => {
    return (
        <div id="estudios" style={{ padding: '40px 0' }}>
            <Titulo text="Estudios" />
            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                {estudiosData.map((estudio) => (
                    <Col xs={24} md={12} key={estudio.id}>
                        <Card
                            hoverable
                            style={{
                                backgroundColor: 'var(--color-fondo-secundario)',
                                borderColor: 'var(--color-borde)',
                                borderRadius: '12px',
                                boxShadow: `0 4px 12px var(--color-sombra)`
                            }}
                        >
                            <Row align="middle" gutter={16}>
                                <Col>{estudio.icono}</Col>
                                <Col>
                                    <Title level={5} style={{ color: 'var(--color-texto-principal)', margin: 0 }}>
                                        {estudio.titulo}
                                    </Title>
                                    <Paragraph style={{ color: 'var(--color-texto-secundario)', margin: '4px 0' }}>
                                        {estudio.institucion}
                                    </Paragraph>
                                    <Paragraph style={{ color: 'var(--color-texto-secundario)', fontSize: '12px', margin: 0 }}>
                                        {estudio.fecha} {estudio.extra && `| ${estudio.extra}`}
                                    </Paragraph>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Estudios;