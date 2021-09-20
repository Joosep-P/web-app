import React from 'react'
import styles from './MainNews.module.css';
 

export default function MainSection(props) {
    return (
        
        
          <div className={styles.container}>
       
                 <div className={styles.item1}><img class="grid-image" src="https://source.unsplash.com/random/600x340"/> 
                <h1>Lorem ipsum</h1> <div className={styles.headlinep}>dolor sit
                amet, consectetur adipiscing elit. Cras lacinia commodo sapien,
                sed pulvinar turpis feugiat ac. Sed non ultrices est.
                Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aliquam laoreet
                ultrices neque id aliquet. Pellentesque tincidunt 
                nisi vel diam placerat, ut porta ipsum auctor. Proin 
                dapibus sem et luctus lobortis. Maecenas mattis 
                bibendum gravida. Sed eu eros sed mi laoreet ultricies.
                In blandit, lacus eu ullamcorper pellentesque, 
                nulla arcu facilisis lectus, eu rhoncus urna enim
                </div>
                </div>

                 <div className={styles.item2}>
                         <span className = { styles.header1}>{ props.topic1 }</span> { props.body }</div>
         </div>
    )     
}
