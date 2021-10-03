import React from 'react';
import styles from './BarOut.module.css';

export default function BarOut(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={styles.price}>{ props.price }€</div>
          <div>{ props.rating  }</div>
        </div>
    </div>
  )
}
