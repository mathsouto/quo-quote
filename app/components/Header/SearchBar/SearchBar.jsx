'use client';
import { useEffect, useRef } from 'react';
import styles from './searchBar.module.css';
import { getQuotesByQuery } from '@/app/serverActions/actions';
import useFetch from '@/app/customHooks/useFetch';

export default function SearchBar({ fetchCallback }) {
    
    const inputRef = useRef();
    const fetchData = useFetch(fetchCallback);

    const handleSearchClick = async () => {
        const query = inputRef.current.value;
        if(query && query.length > 1) {
            fetchData(() => getQuotesByQuery(query));
        } else {
            console.log('Enter at least 2 characters');
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleSearchClick();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <img 
                    className={styles.searchIcon}
                    src='/search-icon.svg'
                    alt='Search Icon Image'
                    width={18}
                    height={18}
                />
                <input
                    className={styles.searchBar}
                    ref={inputRef}
                    type='text'
                    placeholder='How about a quote today?'
                    autoComplete='off'
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button className={styles.searchButton} onClick={handleSearchClick}>Search</button>
        </div>
    )
}