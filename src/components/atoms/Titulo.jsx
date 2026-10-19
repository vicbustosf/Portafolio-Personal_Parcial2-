import { Typography } from 'antd';
const { Title } = Typography;

const Titulo = ({ text }) => {
    return <Title style={{ color: '#54465e', marginTop: '32px' }}>{text}</Title>;
};

export default Titulo;