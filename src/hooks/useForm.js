import { useState } from 'react'

//funcion que maneja el valor de los formularios
export const useForm = (initialState = {}) => {

    const [values, setValue] = useState(initialState)

    const reset = () => {
        setValue(initialState);
    }


    const handleInputChange = ({ target }) => {
        setValue({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];
}