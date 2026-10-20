// src/components/atoms/Titulo.jsx
import { Typography } from 'antd';
const { Title } = Typography;

const Titulo = ({ text, nivel = 2 }) => {
    return (
        <div style={{
            position: 'sticky',
            top: '64px', // Justo debajo del header
            zIndex: 10,
            padding: '16px 0',
            backgroundColor: 'var(--color-fondo)', // Para que el texto de abajo no se vea a través
            marginBottom: '16px'
        }}>
            <Title
                level={nivel}
                style={{
                    color: 'var(--color-texto-principal)',
                    margin: 0,
                    fontWeight: 700,
                    letterSpacing: '-0.5px'
                }}
            >
                {text}
            </Title>
        </div>
    );
};

export default Titulo;