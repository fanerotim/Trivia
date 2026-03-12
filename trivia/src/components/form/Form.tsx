import './Form.scss';
import { useGetCategories } from './hooks/useGetCategories';
import { useFormHandler } from './hooks/useFormHandler';
import { Error } from '../error/Error';
import { generateQuestionsCount } from './utils/generateQuestionsCount.ts';
import { initialValues } from './utils/initialFormValues.ts';
import { Select } from './components/select/Select';
import { generateDifficultyValues } from './utils/generateDifficultyValues.ts';

export const Form = () => {

    const { handleChange, handleSubmit, error } = useFormHandler(initialValues);
    const { categories } = useGetCategories();
    const { numberOfQuestions } = generateQuestionsCount();
    const { difficultyValues } = generateDifficultyValues();

    return (
        <form
            className='form__container'
            onSubmit={(e) => handleSubmit(e, categories)} // pass categories, so we can have access to the id of the category we want to query the API for
        >

            <div
                className='form__container__form__field'
            >
                <Select
                    values={categories}
                    label={'category'}
                    callback={handleChange}
                />

                <span
                    className='form__container__form__field__error__message'
                >
                    {error.fieldErrors.category ? <Error message={error.fieldErrors.category} /> : ''}
                </span>
                
            </div>

            <div
                className='form__container__form__field'
            >
                <Select
                    values={numberOfQuestions}
                    label={'questions_count'}
                    callback={handleChange}
                />

                <span
                    className='form__container__form__field__error__message'
                >
                    {error.fieldErrors.questions_count ? <Error message={error.fieldErrors.questions_count} /> : ''}
                </span>

            </div>

            <div
                className='form__container__form__field'
            >

                <Select
                    values={difficultyValues}
                    label={'difficulty'}
                    callback={handleChange}
                />

                <span
                    className='form__container__form__field__error__message'
                >
                    {error.fieldErrors.difficulty ? <Error message={error.fieldErrors.difficulty} /> : ''}
                </span>
            </div>

            <input
                type="submit"
                className='form__container__submit__btn submit__btn'
            />

        </form>
    )
}