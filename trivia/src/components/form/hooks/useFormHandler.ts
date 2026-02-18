import { useState } from "react";

import type { FormValues, ErrorData } from "../types/types";
import { validator } from "../../../validator/validator";
import { queryBuilder } from "../../../query-builder/queryBuilder";
import type { Category } from "../../../requester/types";

export const useFormHandler = (initialValues: FormValues) => {

    const [values, setValues] = useState(initialValues);
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

    const handleSubmit = async (e: React.SubmitEvent, categories: Category[]) => {
        e.preventDefault();

        // reset error state on submit to remove any old error messages
        setError((_) => {
            return {
                fieldErrors: {
                    category: [],
                    difficulty: [],
                    questions_count: [],
                },
                formErrors: []
            }
        })

        try {
            // validate user input
            validator(values);
            // build correct URL by passing user input. categories is passed, so we can filter it and obtain its id, which is used to query the API
            const questions = await queryBuilder(values, categories);
            console.log(questions, 'logged from useFormHandler')
        } catch (err) {
            // update error state to the returned error
            setError((_) => err as ErrorData)
        }
    }

    return {
        handleChange,
        handleSubmit,
        error
    }
}