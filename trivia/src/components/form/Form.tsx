import './Form.scss';
import { useGetCategories } from './hooks/useGetCategories';
import { useFormHandler } from './hooks/useFormHandler';
import { Error } from '../error/Error';
import { generateQuestionsCount } from './utils/generateQuestionsCount';
import { initialValues } from './utils/initialFormValues';

export const Form = () => {

    const { categories } = useGetCategories();
    const { handleChange, handleSubmit, error } = useFormHandler(initialValues);
    const { numberOfQuestionsCount } = generateQuestionsCount();

    return (
        <form
            onSubmit={(e) => handleSubmit(e, categories)} // pass categories, so we can have access to the id of the category we want to query the API for
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
                    {numberOfQuestionsCount.map((_, i) => {
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
                    <option value="hard">Hard</option>
                </select>

                {error.fieldErrors.difficulty ? <Error message={error.fieldErrors.difficulty} /> : ''}
            </div>

            <input type="submit" />

        </form>
    )
}