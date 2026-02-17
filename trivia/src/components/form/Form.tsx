import './Form.scss';
import { useGetCategories } from './hooks/useGetCategories';
import type { FormValues } from './types/types';
import { useFormHandler } from './hooks/useFormHandler';
import { Error } from '../error/Error';

const initialValues: FormValues = {
    questions_count: 0,
    category: '',
    difficulty: ''
}

export const Form = () => {

    const { categories } = useGetCategories();
    const { handleChange, handleSubmit, error } = useFormHandler(initialValues);

    // TODO: Move this array creation away from here
    // create an arr that will be used to display number of questions
    // set length of arr to 50, so we can then fill it up
    let arr: number[] = [];
    arr.length = 50;
    arr.fill(1, 9, 50);

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

                {error.fieldErrors.questions_count ? <Error message={error.fieldErrors.questions_count} /> : ''}
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

                {error.fieldErrors.category ? <Error message={error.fieldErrors.category} /> : ''}

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

                {error.fieldErrors.difficulty ? <Error message={error.fieldErrors.difficulty} /> : ''}
            </div>

            <input type="submit" />

        </form>
    )
}