import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const Formulario = () => {
    // Form.useForm() es un Hook para controlar el formulario (ej. para limpiarlo)
    const [form] = Form.useForm();
    // Estado para mostrar el spinner de carga en el botón
    const [loading, setLoading] = useState(false);

    // Esta función se ejecuta si el formulario es válido (todos los campos llenos)
    const onFinish = (values) => {
        setLoading(true); // Activamos el spinner del botón

        // Simulamos que enviamos los datos a un servidor con un retraso de 1.5 segundos
        setTimeout(() => {
            setLoading(false); // Quitamos el spinner
            message.success('¡Mensaje enviado con éxito!'); // Mostramos mensajito
            form.resetFields(); // Limpia todos los campos del formulario
        }, 1500);
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: '400px', margin: '0 auto' }}>
            {/* Form.Item envuelve al Input. 'rules' define las validaciones */}
            <Form.Item name="name" label="Nombre" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
                <Input placeholder="Tu nombre" />
            </Form.Item>

            {/* Validación de que el correo sea obligatorio y tenga formato de correo */}
            <Form.Item name="email" label="Correo" rules={[{ required: true, type: 'email', message: 'Ingresa un correo válido' }]}>
                <Input placeholder="tu@correo.com" />
            </Form.Item>

            <Form.Item>
                {/* El botón muestra un spinner (loading) si está enviando */}
                <Button type="primary" htmlType="submit" loading={loading}>
                    Enviar Mensaje
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Formulario;