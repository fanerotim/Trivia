import { z } from 'zod';
import { type FormValues } from '../components/form/types/types';

export const validator = (userInput: FormValues) => {
    const schema = z.object({
        questions_count: z.number().min(10).max(50).refine((val) => !Number.isNaN(val)),
        category: z.string().trim().min(3).refine((val) => val !== 'default'),
        difficulty: z.string().trim().min(4).refine((val) => val !== 'default')
    })

    
    const data = schema.safeParse(userInput);
    
    if (!data.success) {
        const flattenedError = z.flattenError(data.error);
        console.log(flattenedError);
        throw flattenedError;
    }
    
    return data;
}