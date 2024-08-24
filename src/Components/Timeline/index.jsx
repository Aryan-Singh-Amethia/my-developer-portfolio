import { EXPERIENCES, TIMELINE_CARD_LEFT, TIMELINE_CARD_RIGHT } from "../../Constants/constant";
import withLayout from "../../Layout/layout";
import styles from './Timeline.module.css';
import { useMediaQuery } from 'react-responsive';

function Timeline(){
    const isMobile = useMediaQuery({ query: '(max-width: 1183px)'});
    return (
        isMobile?
     <div className={styles.tl__container}>
        <Timeline.SpanBlockMobile 
             type={TIMELINE_CARD_RIGHT} 
             iconPath={'/bag.svg'}
             title="Hindustan Times Media"
             orgLogo={"/ht.png"}
             experiences={EXPERIENCES.HT}
             background={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}/>
        <Timeline.SpanBlockMobile 
             type={TIMELINE_CARD_LEFT}
             iconPath={'/bag4.svg'}
             title="KPMG India"
             orgLogo="/kpmg.png"
             experiences={EXPERIENCES.KPMG}
             background="linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)"/>
       <Timeline.SpanBlockMobile 
             type={TIMELINE_CARD_RIGHT}
             iconPath={'/bag5.svg'}
             title="Highradius Corporation"
             orgLogo="/hrc.png"
             experiences={EXPERIENCES.HRC}
             background="linear-gradient(to right, #f9d423 0%, #ff4e50 100%)"
             />
       <Timeline.SpanBlockMobile
             type={TIMELINE_CARD_LEFT}
             iconPath={'/cap.svg'}
             title="KIIT University"
             orgLogo="/kiit.png"
             experiences={EXPERIENCES.KIIT}
             background="linear-gradient(to top, #f77062 0%, #fe5196 100%)"
             />                  
     </div>    
    :(<div className={styles.tl__container}>
       <Timeline.SpanBlock 
             type={TIMELINE_CARD_RIGHT} 
             iconPath={'/bag.svg'}
             title="Hindustan Times Media"
             orgLogo={"/ht.png"}
             experiences={EXPERIENCES.HT}
             background={"linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)"}/>
       <Timeline.SpanBlock 
             type={TIMELINE_CARD_LEFT}
             iconPath={'/bag4.svg'}
             title="KPMG India"
             orgLogo="/kpmg.png"
             experiences={EXPERIENCES.KPMG}
             background="linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)"/>
       <Timeline.SpanBlock 
             type={TIMELINE_CARD_RIGHT}
             iconPath={'/bag5.svg'}
             title="Highradius Corporation"
             orgLogo="/hrc.png"
             experiences={EXPERIENCES.HRC}
             background="linear-gradient(to right, #f9d423 0%, #ff4e50 100%)"
             />
       <Timeline.SpanBlock
             type={TIMELINE_CARD_LEFT}
             iconPath={'/cap.svg'}
             title="KIIT University Bhubaneshwar"
             orgLogo="/kiit.png"
             experiences={EXPERIENCES.KIIT}
             background="linear-gradient(to top, #f77062 0%, #fe5196 100%)"
             />
    </div>)
);
}

Timeline.SpanBlock = (props) =>{
    const {type,iconPath} = props;
    return(
        <div className={styles.tl__block}>
         <div className={styles.tl_round}>
            <img src={iconPath} alt='timeline-icon'/>
         </div>
        <div style={{position:'relative'}}>
         {type === TIMELINE_CARD_LEFT && <Timeline.Card containerClass={"tl__card-left"} {...props}/>}   
         <div className={styles.tl__line}></div>
         {type === TIMELINE_CARD_RIGHT && <Timeline.Card containerClass={"tl__card-right"} {...props}/>}
        </div>
        </div>
    );
}

Timeline.SpanBlockMobile = (props) =>{
    const {type,iconPath} = props;
    return(
        <div className={styles.tl__block}>
         <div className={styles.tl_round}>
            <img src={iconPath} alt='timeline-icon'/>
         </div>
        <div style={{position:'relative'}}>
         <div className={styles.tl__line}></div>
        </div>
        <Timeline.Card {...props} containerClass={"tl__card-center"}/>
        <div style={{position:'relative'}}>
         <div className={styles.tl__line}></div>
        </div>
        </div>
    );
}

Timeline.Card = (props) =>{
    const {containerClass,title,orgLogo,experiences,background} = props;
    return(
        <div className={styles[`${containerClass}`]} style={{backgroundImage:background}}>
           <div className={styles.card__container}>
           <div className={styles.orglogo}>
              <img
                src={orgLogo}
                alt={title}
                width="100%"
                height="100%"
                objectFit="contain"
                />
            </div>
            <h2 className={styles.card__title}><b>{title}</b></h2> 
           </div>
           <div className={styles.card__details}>
             <p>[ {experiences?.time} ] : {experiences?.description}</p>
             <ul>
                {experiences?.roles.map((role,index) => (
                <li key={index} className={styles.card__role}>
                    <p>{role?.title}</p>
                    <section>{role?.description}</section>
                </li>
                ))}
             </ul>
           </div>
        </div>
    );
} 

export default withLayout(Timeline);