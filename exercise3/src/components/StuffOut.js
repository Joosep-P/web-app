import React from 'react';
import styles from './StuffOut.module.css';

import BarOut from './BarOut';

export default function StuffOut(props) {

  return (
    <div>
      <div className={ styles.theCoolest }>
      {
        props.items.map(item => <BarOut key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
