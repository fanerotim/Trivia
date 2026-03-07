import './Select.scss';
import { type Category } from '../../../requester/types';
import { useSelect } from './hooks/useSelect';

export const Select = (
    { categories }: { categories: Category[] }
) => {

    const { isSelectOpen, handleToggle } = useSelect();

    return (
        <article>
            < div
                onClick={handleToggle}
                className='select__container'
            >
                <p>Select a category</p>
                {isSelectOpen
                    ? <span className='select__container__close__btn'></span>
                    : <span className='select__container__open__btn'></span>
                }


            </div >

            <div
                className={`select__options__container ${isSelectOpen ? 'select__options__container__open' : ''}`}
            >
                {categories.map((c) => (
                    <span key={c.id}>{c.name}</span>
                ))}
            </div>
        </article>
    )
}