'use client';
import styles from './header.module.css';
import HomeComponent from "./HomeComponent/HomeComponent";
import RandomQuotes from './RandomQuotes/RandomQuotes';
import SearchBar from './SearchBar/SearchBar';

export default function HeaderComponent({ fetchSearchCallback, randomCallback }) {

    return (
        <>
            <div className={styles.container}>
                <HomeComponent />
                <SearchBar fetchCallback={fetchSearchCallback} />
                <RandomQuotes randomCallback={randomCallback} />
            </div>
            <div className={styles.spacer}></div>
        </>
    )
}