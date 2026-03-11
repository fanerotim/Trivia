import './Form.scss';
import { useGetCategories } from './hooks/useGetCategories';
import { useFormHandler } from './hooks/useFormHandler';
import { Error } from '../error/Error';
import { generateQuestionsCount } from './utils/generateQuestionsCount.ts';
import { initialValues } from './utils/initialFormValues.ts';
import { Select } from './components/select/Select';

export const Form = () => {

    const { categories } = useGetCategories();
    const { handleChange, handleSubmit, error } = useFormHandler(initialValues);
    const { numberOfQuestions } = generateQuestionsCount();

    return (
        <form
            className='form__container'
            onSubmit={(e) => handleSubmit(e, categories)} // pass categories, so we can have access to the id of the category we want to query the API for
        >
            <Select
                values={categories}
                label={'category'}
            />
            <div
                className='form__container__form__field'
            >
                <label
                    htmlFor='questions_count'
                    className='form__container__form__field__label'
                >
                    Choose number of questions
                </label>
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
                    {numberOfQuestions.map((q) => {
                        return (
                            <option key={q.id}>{q.name}</option>
                        )
                    })}
                </select>

                {error.fieldErrors.questions_count ? <Error message={error.fieldErrors.questions_count} /> : ''}
            </div>

            <div
                className='form__container__form__field'
            >
                <Select
                    values={numberOfQuestions}
                    label={'number of questions'}
                />
                <label
                    htmlFor='category'
                    className='form__container__form__field__label'
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

            <div
                className='form__container__form__field'
            >
                <label
                    htmlFor='difficulty'
                    className='form__container__form__field__label'
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

            <input
                type="submit"
                className='form__container__submit__btn submit__btn'
            />

        </form>
    )
}