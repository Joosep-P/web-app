import React from 'react'
import styles from './SideBar.module.css'

export default function SideSection(props) {
    return (
        
        <div className={styles.container}>
            
        <div className={styles.item1}>
        
        <div className={styles.topicItem}> Luetuimmt</div>

        <hr style={{
                color: '#000000',
                backroundColor: '#000000',
                borderColor: 'lightgray'
            }}/>


        <p>
        <span className = { styles.number}> 1 </span> 
        <span className = { styles.bolded}>{ props.topic }</span>
        <span className = {styles.breed}> { props.body} </span>
        </p>    



        </div>
        </div>

    ) 
}   