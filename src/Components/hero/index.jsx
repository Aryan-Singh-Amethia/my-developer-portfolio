import React from 'react'
import styles from './hero.module.css'

const NewHero = (props) => {
  const {isMobile} = props;
  return (
    <div className={styles.newhero_container}>
       <div className={styles.newhero_frame}>
          <img
            src={'/aryan-singh-amethia-portfolio-image.jpg'}
            alt={'aryan-singh-amethia-portfolio-image'}
            className={styles.newhero_image}
            />
        </div>  
    </div>
  )
}

export default NewHero