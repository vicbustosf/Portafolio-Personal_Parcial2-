import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useTema } from './useTema';

describe('Hook useTema', () => {
    it('debe inicializar en modo oscuro por defecto', () => {
        const { result } = renderHook(() => useTema());
        expect(result.current.tema).toBe('dark');
    });

    it('debe alternar a modo claro al ejecutar alternarTema', () => {
        const { result } = renderHook(() => useTema());

        act(() => {
            result.current.alternarTema();
        });

        expect(result.current.tema).toBe('light');
    });
});