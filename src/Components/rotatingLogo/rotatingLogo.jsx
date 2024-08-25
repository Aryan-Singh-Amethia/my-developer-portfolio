import { useEffect } from "react";
import styles from "./rotatingLogo.module.css";
import { useNavigate } from "react-router-dom";

const RotatingLogo = ()=>{

    const myIntro = 'UI/UX | Web Frontend . Full-Stack Dev ';
    const navigate = useNavigate();
   return(
    <div className={styles.body} 
          onClick={() =>{
            window.location.href = "mailto:aryanamethia1998@gmail.com";
          }}>
      <div className={styles.circle}>
        <div className={styles.innerCta}>Hire Me</div>
        <div className={styles.text}>
            <p>
                {
                 myIntro.split('')
                         .map((c,i)=>{
                           console.log(''); 
                          return <span style={{transform:`rotate(${i*9.5}deg)`}}>{c}</span>
                        })
                }
            </p>
        </div>
      </div>
    </div>);
}

export default RotatingLogo;