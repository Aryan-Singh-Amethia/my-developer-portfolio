import React from 'react';
import withLayout from '../../Layout/layout';
import { SKILLS } from '../../Constants/skill-constants';
import styles from './skills.module.css';
import SkillBox from './SkillBox';
import Header from '../Header/Header';

const Skills = () => {
    return (
        <div className={styles.skill__container}>
            <Header heading={"Skills"}/>
            {SKILLS.map(skill => (<SkillBox skill={skill}/>))}
        </div>
    );
};

export default withLayout(Skills);