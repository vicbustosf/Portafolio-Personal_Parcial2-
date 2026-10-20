import { Menu } from 'antd';

const MenuNavegacion = () => {
    const items = [
        { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
        { key: 'estudios', label: <a href="#estudios">Estudios</a> },
        { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
        { key: 'contacto', label: <a href="#contacto">Contacto</a> },
    ];

    return (
        <Menu
            mode="horizontal"
            items={items}
            selectable={false} //Evita que se marque una sección como activa
            style={{
                backgroundColor: 'transparent',
                borderBottom: 'none',
                color: 'var(--color-texto-principal)',
                flex: 1,
                justifyContent: 'flex-end',
            }}
            theme="dark" // Forzamos el color del texto usando clases CSS o inline
        />
    );
};

export default MenuNavegacion;