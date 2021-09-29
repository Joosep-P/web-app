import React from 'react'
import styles from './MainNews.module.css';
 

export default function MainSection(props) {
    return (
       
  

        <div className={styles.container}>
            
            <span className={styles.item1}>
                <img class="grid-image" src="https://source.unsplash.com/random/600x340"/> 
            <span className = { styles.bolded}>{ props.topic }|</span> { props.body }
            <hr style={{
                color: '#000000',
                backroundColor: '#000000',
                borderColor: 'lightgray'
            }}/>
        </span>
        
        </div>
   
    
    )     
}
