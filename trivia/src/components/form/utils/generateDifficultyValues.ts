import { type SelectValues } from "../components/select/types/selectValues";

export const generateDifficultyValues = () => {
    const difficulties = ['easy', 'medium', 'hard'];

    const difficultyValues: SelectValues = [];

    for (let i = 0; i < difficulties.length; i++) {
        
        const current = {
            id: i + 1,
            name: difficulties[i]
        }
        
        difficultyValues.push(current);
    }

    return {
        difficultyValues
    }
}