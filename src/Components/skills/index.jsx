import React from 'react';
import withLayout from '../../Layout/layout';
import { SKILLS } from '../../Constants/skill-constants';
import styles from './skills.module.css';
import SkillBox from './SkillBox';

const Skills = () => {
    return (
        <div className={styles.skill__container}>
            {SKILLS.map(skill => (<SkillBox skill={skill}/>))}
        </div>
    );
};

export default withLayout(Skills);