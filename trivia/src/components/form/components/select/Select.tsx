import './Select.scss';
import {type SelectValues } from './types/selectValues';
import { useSelect } from './hooks/useSelect';

export const Select = (
    { values, label }: { values: SelectValues, label: string },
) => {

    const {
        isSelectOpen,
        handleToggle,
        optionValue,
        handleSelectedOption
    } = useSelect();

    return (
        <article>
            <p
                className='select__label'
            >
                Choose {label}
            </p>
            < div
                onClick={handleToggle}
                className='select__container'
            >
                <p
                    className='select__container__selected__option'
                >
                    {optionValue}
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
                        onClick={() => handleSelectedOption(v.name)}
                        key={v.id}
                        className={'select__options__container__option'}
                    >
                        {v.name}
                    </span>
                ))}
            </div>
        </article>
    )
}