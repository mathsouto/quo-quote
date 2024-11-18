'use client';

import { useRouter } from 'next/navigation';
import styles from './homeComponent.module.css';

export default function HomeComponent() {

    const handleButtonClick = () => {
        window.location.assign('/');
    }

    return (
        <div className={styles.container} onClick={handleButtonClick}>
            <img className={styles.icon} src="/home-icon.svg" alt='Home Icon Image' width={45} height={37.11} />
            <p className={styles.text}>Quo Quote</p>
        </div>
    )
}