import React from 'react';
import styles from './SkillBox.module.css';

const SkillBox = ({skill}) => {
    return (
        <section className={styles.box}>
            <div className={styles.image__container}>
               <img
                 src={skill.src}
                 alt={skill.src}
                 />
            </div>
            <div className={styles.about}>
                    {skill.about}
                </div> 
        </section>
    );
};

export default SkillBox;