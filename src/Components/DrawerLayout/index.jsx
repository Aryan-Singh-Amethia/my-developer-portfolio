import { createPortal } from 'react-dom';
import React, { useEffect, useState } from 'react';
import styles from './drawer.module.css';
import { SOCIAL_PROFILES } from '../../Constants/constant';


const DrawerLayout = ({showHamburger, setShowHamburger}) => {
    return createPortal(
         <Overlay showHamburger={showHamburger} setShowHamburger={setShowHamburger}/>,
        document.getElementById('portal-root')
    );
};

const Overlay = ({showHamburger, setShowHamburger}) => {
  const [ show , setShow] = useState(showHamburger);
  useEffect(()=>{
    window.addEventListener('scroll', (e)=>{
      if(setShow){
        setShow(false);
        setShowHamburger(false);
      }
    });
  },[]);
  return show ? (
<div   
         style={{
            position:'absolute',
            background:'transparent',
            top:'0',
            bottom:'0',
            left:'0',
            right:'0',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'999999',
            width:'100%',
            height:'100%',
            overflow:'hidden' 
         }}>
            <div 
              style={{
                width:'100%',
                height:'100vh',
                background:'rgba(0, 0, 0, 0.5)',
                display:'flex',
                justifyContent:'flex-start',
                overflow:'hidden',
              }}>
                {/* <button onClick={
                  ()=> { 
                        setShowHamburger(false);
                        setShow(s=>!s);
                        }} 
                  style={{width:'50%'}}>Close</button> */}
                  <div className={styles.container}>
                     <div className={styles.image__container}>
                        <svg width='100' height='100'>
                           <circle cx='50' cy='50' r='45' stroke-width='0' fill='black' />
                               <text x="40" y="61" font-family="Arial" font-size="30" fill="white">
                                 A
                               </text>
                         </svg>
                         <img src={"/chevrons-down-svgrepo-com.svg"} 
                              alt="arrows"
                              className={styles.chevron__image}/>
                         <div className={styles.social__container}>
                           {SOCIAL_PROFILES.map(social=>(
                              <a href={social.href}>
                                 <div className={styles.imgCont}>
                                    <img src={social.src} alt={social.key} />
                                  </div>
                              </a>
                           ))}
                          </div>     
                     </div>
                  </div>
            </div>
        </div>
  ) : null;
}

export default DrawerLayout;