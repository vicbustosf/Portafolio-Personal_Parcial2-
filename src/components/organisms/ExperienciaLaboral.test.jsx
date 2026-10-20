import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienciaLaboral from './ExperienciaLaboral';

describe('Componente ExperienciaLaboral', () => {
    it('debe mostrar el título de Experiencia Laboral', () => {
        render(<ExperienciaLaboral />);
        expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument();
    });

    it('debe mostrar el mini juego "Adivina el Número"', () => {
        render(<ExperienciaLaboral />);
        expect(screen.getByText(/Mini Juego: Adivina el Número/i)).toBeInTheDocument();
    });

    it('debe mostrar el botón de ¡Contrátame!', () => {
        render(<ExperienciaLaboral />);
        const boton = screen.getByRole('button', { name: /¡Contrátame!/i });
        expect(boton).toBeInTheDocument();
    });
});