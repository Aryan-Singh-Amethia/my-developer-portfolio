import React, { Fragment } from "react";
import classes from "./navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { SOCIAL_PROFILES } from "../../Constants/constant";
import DrawerLayout from "../DrawerLayout";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1183px)' });
  const [ showHamburger, setShowHamburger ] = React.useState(false);
  const currentUrl = useLocation().pathname;
  return isMobile ? (
    <Fragment>
    <div className={classes["mweb__header"]}>
    <div className={classes["mweb__navbar-icon"]} 
         onClick={()=>{
          if(window.scrollY > 0 ){
            window.scrollTo(0,0);
            document.getElementById("hb-btn").click();
          }
            setShowHamburger(s=>!s);
         }}>
      <img id="hb-btn" src="/hamburger2.png" alt="hamburger-icon" className={classes["mweb__icon"]}>
      </img>
      {showHamburger && <DrawerLayout showHamburger={showHamburger} setShowHamburger={setShowHamburger}/>}
     </div>
    </div> 
   <div className={classes["mweb__navbar-container"]}>
    <div className={classes["mweb__navbar-icon"]}>
      <a href="/">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fcfcfc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </a>
    </div>
    <div className={classes["mweb__navbar-icon"]}>
       <a href="/projects">
         <svg viewBox="0 0 1024 1024" fill="#ffffff" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M161.6 923.2c-15.2 0-30.4-6.4-40.8-17.6-22.4-22.4-22.4-60 0-82.4 11.2-11.2 25.6-17.6 40.8-17.6 15.2 0 30.4 6.4 40.8 17.6 22.4 22.4 22.4 60 0 82.4-10.4 12-24.8 17.6-40.8 17.6z m0-68c-2.4 0-4.8 0.8-6.4 2.4-4 4-4 10.4 0 14.4 1.6 1.6 4 2.4 6.4 2.4 2.4 0 4.8-0.8 6.4-2.4 4-4 4-10.4 0-14.4-1.6-1.6-4-2.4-6.4-2.4z" fill=""></path><path d="M178.4 972c-24.8 0-47.2-9.6-64.8-27.2l-24-24c-35.2-36-35.2-94.4 0-130.4l1.6-1.6 423.2-362.4c-25.6-43.2-37.6-93.6-33.6-144 4-59.2 28.8-114.4 69.6-156 45.6-46.4 106.4-72 171.2-72 31.2 0 62.4 6.4 91.2 18.4 7.2 3.2 12.8 9.6 14.4 17.6 1.6 8-0.8 16-6.4 21.6L696.8 236.8l84 85.6L904 198.4c4.8-4.8 11.2-7.2 17.6-7.2 1.6 0 3.2 0 4.8 0.8 8 1.6 14.4 7.2 17.6 14.4 18.4 44 23.2 92.8 14.4 140-8.8 48.8-32 92.8-66.4 128-45.6 46.4-105.6 72-169.6 72-35.2 0-70.4-8-101.6-23.2l-377.6 421.6c-17.6 17.6-40.8 27.2-64.8 27.2z m-54.4-147.2c-16 17.6-16 44.8 0.8 61.6l24 24c8 8 18.4 12.8 29.6 12.8 11.2 0 21.6-4.8 29.6-12.8l388.8-434.4c4.8-4.8 11.2-8 18.4-8 4 0 8.8 0.8 12 3.2 28.8 16.8 61.6 25.6 95.2 25.6 51.2 0 98.4-20 134.4-56.8 45.6-47.2 65.6-113.6 52.8-178.4l-112 112.8c-4.8 4.8-11.2 7.2-17.6 7.2-6.4 0-12.8-2.4-17.6-7.2L645.6 253.6c-9.6-9.6-9.6-24.8 0-34.4l112-112.8c-12-2.4-24-3.2-36-3.2-51.2 0-100 20.8-136 57.6-68 68.8-75.2 176.8-18.4 256 7.2 10.4 5.6 24.8-4 32.8l-439.2 375.2z" fill=""></path><path d="M405.6 522.4c-6.4 0-12.8-2.4-17.6-7.2L216 340h-58.4c-8.8 0-16.8-4.8-20.8-12L57.6 198.4c-5.6-9.6-4-22.4 4-30.4l64-64.8c4.8-4.8 11.2-7.2 17.6-7.2 4.8 0 8.8 1.6 12.8 4l130.4 81.6c7.2 4.8 11.2 12 11.2 20l0.8 58.4 176.8 181.6c4.8 4.8 7.2 11.2 7.2 17.6 0 6.4-2.4 12.8-7.2 16.8-4.8 4.8-10.4 7.2-16.8 7.2s-12.8-2.4-17.6-7.2L256 287.2c-4-4.8-7.2-10.4-7.2-16.8l-0.8-55.2-102.4-64-36.8 37.6 62.4 102.4h54.4c6.4 0 12.8 2.4 17.6 7.2l179.2 182.4c4.8 4.8 7.2 11.2 7.2 17.6 0 6.4-2.4 12.8-7.2 17.6-4 4-10.4 6.4-16.8 6.4zM768.8 979.2c-15.2 0-30.4-6.4-40.8-17.6L520.8 748c-22.4-22.4-22.4-59.2 0-82.4l6.4-6.4-7.2-7.2c-9.6-9.6-9.6-24.8 0.8-34.4 4.8-4.8 10.4-7.2 16.8-7.2s12.8 2.4 17.6 7.2l24 24c9.6 9.6 8.8 24.8 0 34.4l-23.2 24c-4 4-4 10.4 0 14.4L763.2 928c1.6 1.6 4 2.4 6.4 2.4 2.4 0 4.8-0.8 6.4-2.4l94.4-96.8c4-4 4-10.4 0-14.4l-208-213.6c-1.6-1.6-4-2.4-6.4-2.4-2.4 0-4.8 0.8-6.4 2.4L624 629.6c-4.8 4.8-11.2 7.2-17.6 7.2-6.4 0-12.8-2.4-17.6-7.2L568 606.4c-4.8-4.8-7.2-11.2-7.2-17.6 0-6.4 2.4-12.8 7.2-16.8 4.8-4.8 10.4-7.2 16.8-7.2s12.8 2.4 17.6 7.2l4.8 4.8 8-8c11.2-11.2 25.6-17.6 40.8-17.6 15.2 0 30.4 6.4 40.8 17.6L904 782.4c22.4 22.4 22.4 60 0 82.4l-94.4 96.8c-10.4 11.2-24.8 17.6-40.8 17.6z" fill=""></path></g></svg>
       </a>
    </div>
     <div className={classes["mweb__navbar-icon"]}>
      <a href="/about">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L9.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </a> 
     </div>
     <div className={classes["mweb__navbar-icon"]}>
       <a href="/skills">
       <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.001 297.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M148.494,105.824c-23.529,0-42.671,19.142-42.671,42.671c0,23.529,19.142,42.671,42.671,42.671 s42.671-19.142,42.671-42.671C191.165,124.966,172.022,105.824,148.494,105.824z M148.494,171.099 c-12.464,0-22.604-10.14-22.604-22.604c0-12.464,10.14-22.604,22.604-22.604s22.604,10.14,22.604,22.604 C171.098,160.958,160.957,171.099,148.494,171.099z"></path> <path d="M259.09,117.662c-1.866,1.867-2.94,4.455-2.94,7.094s1.074,5.227,2.94,7.094c1.876,1.876,4.455,2.939,7.094,2.939 c2.639,0,5.227-1.063,7.094-2.939c1.875-1.867,2.94-4.455,2.94-7.094c0-2.639-1.064-5.218-2.94-7.094 c-1.867-1.866-4.446-2.94-7.094-2.94C263.545,114.722,260.956,115.796,259.09,117.662z"></path> <path d="M171.571,257.86c-2.639,0-5.227,1.074-7.094,2.94c-1.866,1.867-2.939,4.455-2.939,7.094c0,2.639,1.074,5.227,2.939,7.094 c1.876,1.876,4.455,2.94,7.094,2.94c2.639,0,5.227-1.063,7.094-2.94c1.875-1.867,2.94-4.455,2.94-7.094 c0-2.639-1.064-5.218-2.94-7.094C176.798,258.934,174.219,257.86,171.571,257.86z"></path> <path d="M211.074,85.915c-14.385-14.385-29.455-27.408-44.703-38.73c12.28-7.492,24.454-13.651,36.222-18.256 c30.052-11.758,53.97-11.818,65.627-0.161c11.867,11.867,11.605,36.3-0.718,67.035c-2.063,5.143,0.435,10.985,5.578,13.047 c5.145,2.063,10.986-0.433,13.047-5.578c15.684-39.114,14.363-70.613-3.716-88.694c-17.812-17.811-48.755-19.354-87.13-4.337 c-15.208,5.951-30.988,14.253-46.786,24.508c-15.798-10.255-31.578-18.557-46.787-24.508 C63.336-4.773,32.392-3.234,14.579,14.579c-17.813,17.812-19.353,48.756-4.337,87.129c5.951,15.209,14.253,30.989,24.508,46.786 c-10.256,15.798-18.558,31.578-24.509,46.787c-15.016,38.374-13.476,69.316,4.337,87.13c9.704,9.704,23.3,14.577,39.877,14.577 c13.851,0,29.785-3.405,47.253-10.24c35.692-13.967,74.533-40.842,109.365-75.674c14.345-14.345,27.322-29.338,38.724-44.714 c7.495,12.284,13.657,24.462,18.263,36.234c11.759,30.051,11.818,53.971,0.161,65.627c-11.865,11.866-36.299,11.604-67.035-0.719 c-5.144-2.061-10.984,0.437-13.047,5.579c-2.062,5.144,0.436,10.985,5.579,13.047c18.101,7.257,34.566,10.873,48.83,10.872 c16.559-0.001,30.151-4.877,39.864-14.59c17.812-17.813,19.352-48.757,4.337-87.13 C272.78,159.588,245.905,120.747,211.074,85.915z M28.929,94.395c-11.759-30.05-11.818-53.97-0.161-65.626 c11.655-11.657,35.577-11.598,65.626,0.16c11.768,4.605,23.943,10.764,36.223,18.256C115.369,58.507,100.3,71.531,85.915,85.916 c-14.385,14.385-27.408,29.454-38.73,44.702C39.693,118.338,33.534,106.163,28.929,94.395z M94.395,268.06 c-30.051,11.758-53.97,11.818-65.627,0.161c-11.657-11.656-11.598-35.577,0.161-65.627c4.605-11.768,10.764-23.943,18.256-36.223 c11.322,15.249,24.345,30.318,38.731,44.704c14.344,14.344,29.338,27.321,44.713,38.723 C118.344,257.292,106.166,263.454,94.395,268.06z M196.883,196.884c-15.578,15.578-31.935,29.441-48.36,41.103 c-16.657-11.807-32.92-25.605-48.417-41.103c-15.587-15.587-29.458-31.954-41.124-48.39 c11.666-16.435,25.536-32.802,41.123-48.388c15.587-15.587,31.954-29.458,48.39-41.124c16.436,11.666,32.803,25.537,48.39,41.123 c15.578,15.578,29.441,31.935,41.103,48.361C226.18,165.123,212.382,181.386,196.883,196.884z"></path> </g> </g> </g> </g></svg>
       </a>
     </div>
   </div>
    </Fragment>):
    (<header className={classes.navbar_container}>
      <nav className={classes.navbar_main}>
        <div className={classes.navbar_options_container}>
          <a href="/" className={classes.navbar_option}> <h2 className={`${classes.navbar_options} ${currentUrl === "/" ? classes.navbar_active : ""}`}>Home</h2></a>
          <a href="/about" className={classes.navbar_option}><h2 className={`${classes.navbar_options} ${currentUrl === "/about" ? classes.navbar_active : ""}`}>About</h2></a>
          <a href="/projects" className={classes.navbar_option}><h2 className={`${classes.navbar_options} ${currentUrl === "/projects" ? classes.navbar_active : ""}`}>Projects</h2></a>
          <a href="/skills" className={classes.navbar_option}><h2 className={`${classes.navbar_options} ${currentUrl === "/skills" ? classes.navbar_active : ""}`}>Skills</h2></a>
        </div>
        <div className={classes.navbar_signature_icon}>
          <svg width='100' height='100'>
            <circle cx='50' cy='50' r='27' stroke-width='0' fill='black' />
            <text x="40" y="61" font-family="Arial" font-size="30" fill="white">
               A
            </text>
          </svg>
        </div>
        <div className={classes.navbar_socials_container}>           
           {SOCIAL_PROFILES.map(social=>(
            <a href={social.href} className={classes.navbar_social_container} key={social.key}>
              <img className={classes.navbar_social_image} src={social.src} alt={social} objectFit="contain"/>
           </a>
           ))} 
        </div>
      </nav>
    </header>)
  ;
};

export default Navbar;
