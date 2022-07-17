import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    // Estado Local: storedValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Recuperar el elemento del localStorage
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });


    const setValue = value => {
        try {
            setStoredValue(value); // Guardar Estado local de este Hook
            window.localStorage.setItem(key,JSON.stringify(value)); //LocalStorage Solo se guarda tipo String
        } catch (error) {
            console.log(error);
        }
    }
    // Devuelve array [valorGuardadoLocalStorage,formaActualizarLocalStorage]
    return [storedValue, setValue];
}

export default useLocalStorage;