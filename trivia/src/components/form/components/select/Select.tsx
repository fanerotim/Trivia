import './Select.scss';
import { type Category } from '../../../../requester/types';
import { useSelect } from './hooks/useSelect';

export const Select = (
    { categories, label }: { categories: Category[], label: string },
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
                {categories.map((c) => (
                    <span
                        onClick={() => handleSelectedOption(c.name)}
                        key={c.id}
                        className={'select__options__container__option'}
                    >
                        {c.name}
                    </span>
                ))}
            </div>
        </article>
    )
}