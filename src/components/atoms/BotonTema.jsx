// src/components/atoms/BotonTema.jsx
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const BotonTema = ({ tema, alternarTema }) => {
    return (
        <Button
            type="text"
            onClick={alternarTema}
            icon={tema === 'dark' ? <MoonOutlined /> : <SunOutlined />}
            style={{
                color: 'var(--color-texto-principal)',
                fontSize: '18px',
                marginLeft: '16px'
            }}
            aria-label="Cambiar tema"
        />
    );
};

export default BotonTema;