import './App.css';
import SobreMi from "./components/organisms/SobreMi.jsx" ;
import ExperienciaLaboral from "./components/organisms/ExperienciaLaboral.jsx";
import Estudios from "./components/organisms/Estudios.jsx";
import Proyectos from "./components/organisms/Proyectos.jsx";
import Contacto from "./components/organisms/Contacto.jsx";
import VicLayout from "./components/layouts/VicLayout.jsx";

function App() {
    return (
        <VicLayout>
            <SobreMi />
            <ExperienciaLaboral />
            <Estudios />
            <Proyectos />
            <Contacto />
        </VicLayout>
    );
}

export default App;