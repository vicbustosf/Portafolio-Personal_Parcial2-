import { useState, useEffect } from 'react';

export const useTema = () => {
    //Buscamos si hay un tema guardado en el navegador. Si no, arranca en 'dark'.
    const [tema, setTema] = useState(() => {
        return localStorage.getItem('tema') || 'dark';
    });

    //Cada vez que el tema cambia, lo aplicamos al HTML y lo guardamos.
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', tema); // Cambia las variables CSS
        localStorage.setItem('tema', tema); // Lo guarda para la próxima vez
    }, [tema]);

    // Función que se ejecuta al presionar el botón de sol/luna
    const alternarTema = () => {
        setTema((temaActual) => (temaActual === 'dark' ? 'light' : 'dark'));
    };

    return { tema, alternarTema };
};