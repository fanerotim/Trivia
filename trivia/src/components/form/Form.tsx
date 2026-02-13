import './Form.scss';
import { useEffect, useState } from 'react';
import { useGetCategories } from './hooks/useGetCategories';
import { type Category } from '../../requester/types';
import type { FormValues } from './types/types';
import { useFormHandler } from './hooks/useFormHandler';

const initialValues: FormValues = {
    questions_count: 0,
    category: '',
    difficulty: ''
}

export const Form = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const { getCategories } = useGetCategories();
    const { handleChange, handleSubmit } = useFormHandler(initialValues);

    useEffect(() => {
        const categories = async () => {
            const categoryList = await getCategories() as Category[];
            setCategories(categoryList)
        }
        categories();
    }, [])

    // set length of arr to 50, so we can then fill it up
    let arr: number[] = [];
    arr.length = 50;
    arr.fill(1, 0, 50);


    return (
        <form
            onSubmit={handleSubmit}
        >

            <div>
                <label htmlFor='questions_count'>Choose number of questions</label>
                <select
                    onChange={handleChange}
                    name='questions_count'
                    id='questions_count'
                    defaultValue={'default'}
                >
                    <option
                        value="default"
                    >
                        Select an option
                    </option>
                    {arr.map((_, i) => {
                        return (
                            <option key={i}>{i + 1}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <label
                    htmlFor='category'
                >
                    Choose category
                </label>
                <select
                    onChange={handleChange}
                    name='category'
                    id='category'
                    defaultValue={'default'}
                >
                    <option
                        value="default"
                    >
                        Select an option
                    </option>
                    {categories.map(c => {
                        return (
                            <option key={c.id}>{c.name}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <label
                    htmlFor='difficulty'
                >
                    Choose difficulty
                </label>
                <select
                    onChange={handleChange}
                    name='difficulty'
                    id='difficulty'
                    defaultValue={'default'}
                >
                    <option value="default">Select an option</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="difficult">Difficult</option>
                </select>
            </div>

            <input type="submit" />

        </form>
    )
}