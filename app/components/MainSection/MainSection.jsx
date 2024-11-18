import styles from './mainSection.module.css';

export default function MainSection({ results }) {

    return (
        <div className={styles.container}>
            <h2 className={styles.slogan}>Because great minds think alike...</h2>
            <img
                className={`${styles.quoteSign} ${styles.top}`}
                src='./quote-sign.svg'
                alt='quote sign icon'
                width={70} height={55}
            />
            
            {results && results.map(result => (
                <div key={result._id} className={styles.quoteContainer}>
                    <p className={styles.quote}>{result.content}</p>
                    <p className={styles.author}>Autor: {result.author}</p>
                    <div className={styles.tagContainer}>
                        <img
                            className={styles.tagIcon}
                            src='./tag-icon.svg'
                            alt='Tag icon svg'
                            width={10} height={13}
                        />
                        <p className={styles.tags}>Tags: {result.tags.join(', ')}</p>
                    </div>
                </div>
            ))}

            <img
                className={`${styles.quoteSign} ${styles.bottom}`}
                src='./quote-sign.svg'
                alt='quote sign icon'
                width={70}
                height={55}
            />
        </div>
    )
}