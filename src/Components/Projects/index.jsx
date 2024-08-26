import withLayout from "../../Layout/layout";
import styles from "./Projects.module.css";
import { PROJECTS } from "../../Constants/project-constants";
import Header from "../Header/Header";

const Projects = () =>{
    return(
        <div className={styles["projects__container"]}>
            <Header heading="Projects"/>
            {
             PROJECTS.map((project,index) => (
                <Projects.Card
                  key={project.id}
                  index={index}
                  title={project.title}
                  description={project.description}
                  src={project.src}
                  href={project.href}/>
             ))   
            }
        </div>
    );
}

Projects.Card = (props) => {
    const {
        key,
        index,
        title,
        description,
        src,
        href
    } = props;
    return(
        <a href={href} className={styles["projects__card"]} key={key}>
            <div className={styles["projects__card__image"]}>
                <img src={src} alt={`project - ${index}`}/>
            </div>
            <div className={styles["projects__card__content"]}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </a>
    );
}

export default withLayout(Projects);