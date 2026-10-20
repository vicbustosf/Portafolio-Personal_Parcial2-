// src/hooks/useTema.js
import { useState, useEffect } from 'react';

export const useTema = () => {
    // Estado inicial: lee el localStorage o por defecto 'dark'
    const [tema, setTema] = useState(() => {
        return localStorage.getItem('tema') || 'dark';
    });

    // Efecto: cada vez que cambia el tema, actualiza el atributo en el HTML y guarda en localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', tema);
        localStorage.setItem('tema', tema);
    }, [tema]);

    // Función para alternar el tema
    const alternarTema = () => {
        setTema((temaActual) => (temaActual === 'dark' ? 'light' : 'dark'));
    };

    return { tema, alternarTema };
};