import { z } from 'zod';
import { type FormValues } from '../components/form/types/types';

export const validator = (userInput: FormValues) => {
    const schema = z.object({
        questions_count: z.number().min(10).max(50),
        category: z.string(),
        difficulty: z.string()
    })

    const data = schema.safeParse(userInput);
    
    if (!data.success) {
        const flattenedError = z.flattenError(data.error)
        throw flattenedError;
    }
    
    return data;
}