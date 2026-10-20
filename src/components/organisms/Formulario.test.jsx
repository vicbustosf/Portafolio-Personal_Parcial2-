import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Formulario from './Formulario';

describe('Componente Formulario', () => {
    it('debe mostrar el botón de Enviar Mensaje', () => {
        render(<Formulario />);
        const boton = screen.getByRole('button', { name: /Enviar Mensaje/i });
        expect(boton).toBeInTheDocument();
    });

    it('debe permitir escribir en el campo de nombre', () => {
        render(<Formulario />);
        const inputNombre = screen.getByPlaceholderText('Tu nombre');
        fireEvent.change(inputNombre, { target: { value: 'Victoria' } });
        expect(inputNombre.value).toBe('Victoria');
    });
});