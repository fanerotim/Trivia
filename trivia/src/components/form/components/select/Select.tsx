import './Select.scss';
import { type SelectValues } from './types/selectValues';
import { useSelect } from './hooks/useSelect.ts';

export const Select = (
    { values, label, callback }: { values: SelectValues, label: string, callback: Function },
) => {

    const {
        isSelectOpen,
        handleToggle,
        optionValue,
        handleSelectedOption
    } = useSelect();

    return (
        <div>
            <p
                className='select__label'
            >
                {/* conditionally rendering label due to the schema used in validator; TODO: fix this */}
                Choose {label === 'questions_count' ? 'number of questions' : label} 
            </p>
            < div
                onClick={handleToggle}
                className='select__container'
            >
                <p
                    className='select__container__selected__option'
                >
                    {/* check below comment to see why option value is rendered as it is here - repeating pattern, definitely needs to be optimized / changed */}
                    {optionValue[0].toUpperCase() + optionValue.substring(1)}
                </p>
                {isSelectOpen
                    ? <span className='select__container__open__btn'></span>
                    : <span className='select__container__close__btn'></span>
                }


            </div >

            <div
                className={`select__options__container ${isSelectOpen ? 'select__options__container__open' : ''}`}
            >
                {values.map((v) => (
                    <span
                        onClick={() => handleSelectedOption(v.name, label, callback)}
                        key={v.id}
                        className={'select__options__container__option'}
                    >
                        {/* difficulty category needs to have its first letter capitalized, which is why I am doing the below gymnastics. 
                        TODO: not the best solution - optimize it  */}
                        {v.name[0].toUpperCase() + v.name.substring(1)} 
                    </span>
                ))}
            </div>
        </div>
    )
}