import React from 'react'
import styles from './Header.module.css';

export default function Header() {


    return (
        <div className={styles.headerBackround}>
            <div className={ styles.container}>
                <div className={ styles.brand}>HELSINGIN SANOMAT</div>
                <div>Etusivu</div>
                <div>Uutsiset</div>
                <div>Lehdet</div>
                <div>Asiakaspalvelu</div>
                </div>
                <div className={styles.triple}>
                <div className={styles.button2}> Tilaa </div>
                <div className={styles.button}> Kirjaud </div>
                <div className={styles.button}> Valikko </div>
                 </div> 
        </div>
    )
}   
