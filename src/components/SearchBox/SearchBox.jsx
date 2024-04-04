import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    const dispatch = useDispatch();

    const searchValue = useSelector(selectFilter);

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value.trim()));
    };

    return (
      
        <div className={css.container}>
            <label className={css.label}>Find contacts by name</label>
            <input
                className={css.input}
                type="text"
                name="filter"
                value={searchValue}
                onInput={handleChange}
            />
        </div>
  );
}
