import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const Formulario = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // Simulamos una petición API
        setTimeout(() => {
            setLoading(false);
            message.success('¡Mensaje enviado con éxito!');
            form.resetFields();
        }, 1500);
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Form.Item name="name" label="Nombre" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
                <Input placeholder="Tu nombre" />
            </Form.Item>
            <Form.Item name="email" label="Correo" rules={[{ required: true, type: 'email', message: 'Ingresa un correo válido' }]}>
                <Input placeholder="tu@correo.com" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} style={{ backgroundColor: '#54465e' }}>
                    Enviar Mensaje
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Formulario;