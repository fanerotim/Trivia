export type FormValues = {
    questions_count: number;
    category: string;
    difficulty: string;
}

export type ErrorData = {
    fieldErrors: {
        category: string[];
        difficulty: string[];
        questions_count: string[];
    },
    formErrors: string[];
}