import { z } from 'zod';
import { type FormValues } from '../components/form/types/types';

export const validator = (userInput: FormValues) => {
    const schema = z.object({
        questions_count: z.number().min(10).max(50),
        category: z.string(),
        difficulty: z.string()
    })

    console.log(schema.parse(userInput));
}