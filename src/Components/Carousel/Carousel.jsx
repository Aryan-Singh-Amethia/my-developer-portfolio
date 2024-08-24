import styles from './Carousel.module.css';

const Carousel = (props) => {
    const { logos, reverse } = props;
  return(
    <div className={styles.carousel}>
        <div className={`${styles.carousel__logos} ${reverse ? styles.reverse__animation : ""}`}>
           {
                logos.concat(logos).map(logo => (
                     <img key={logo.id} src={logo.src} alt={logo.src}/>
                ))
           }
        </div>
    </div>   
  );
}

export default Carousel;