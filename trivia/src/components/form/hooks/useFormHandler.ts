import { useState } from "react";

import type { FormValues, ErrorData } from "../types/types";
import { validator } from "../../../validator/validator";

export const useFormHandler = (initialValues: FormValues) => {
    const [values, setValues] = useState(initialValues);

    // TODO: not final version, but a possible approach to handle error and return to form, so error component can be rendered
    const [error, setError] = useState({
        fieldErrors: {
            category: [],
            difficulty: [],
            questions_count: [],
        },
        formErrors: []
    } as ErrorData);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // cast questions_count to number 
        let value = e.target.name === 'questions_count' ? Number(e.target.value) : e.target.value;

        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: value
            }
        });
    }

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        try {
            validator(values);
            // handle success case: load / redirect to a page, where user can start playing the game
        } catch (err) {
            setError((_) => err as ErrorData)
        }
    }

    return {
        handleChange,
        handleSubmit,
        error 
    }
}