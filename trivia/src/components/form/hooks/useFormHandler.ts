import { useState } from "react";
import type { FormValues } from "../types/types";

export const useFormHandler = (initialValues: FormValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        // cast questions_count to Number 
        let value = e.target.name === 'questions_count' ? Number(e.target.value) : e.target.value;

        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: value
            }
        })
    }

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log('i was called');
    }

    return {
        values,
        handleChange,
        handleSubmit
    }
}