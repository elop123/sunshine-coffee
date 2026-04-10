import React, { useEffect, useState } from "react";
import style from "./Cookie.module.scss";
import ReactGA from "react-ga4";
import s from './Cookie.module.scss'

 const Cookie = () => {
  const [withTracking, setWithTracking] = useState(false);
  const [hasUserCookie, setHasUserCookie] = useState(false);

  // Initialize Google Analytics with GTag ID
  if (withTracking === true) {
    ReactGA.initialize('G-NM20KV40KL')
  }


    // Initialize GA when user accepts cookies
    useEffect(() => {
        if (withTracking) {
          ReactGA.initialize('G-NM20KV40KL');
          
        }
      }, [withTracking]);

  function enableGA() {
    setWithTracking(true);
    setHasUserCookie(true);
    localStorage.setItem("userAccept", true);
  }

  function disableGA() {
    setWithTracking(false);
    setHasUserCookie(true);
    localStorage.setItem("userAccept", false);
  }

  // Check in localstorage if user has accepted cookie or not 
  const hasUserAccepted = localStorage.getItem("userAccept");
  console.log("User Accepted", hasUserAccepted);

  return (
    hasUserCookie === false &&
    hasUserAccepted == null && (
      <div className={s.cookie_banner}>
        <section>
          <p>We Use Cookies to Enhance Your Experience.<br/>This website uses cookies to improve your
           browsing experience and analyze traffic.<br/> By accepting, you agree to the use of cookies 
           for tracking purposes and to help us improve our services. 
           <br/>These cookies collect data about your interactions with our website and allow us to 
           personalize content.</p>
        </section>
        <section>
          <button className={s.denyButton} onClick={disableGA}>DENY</button>
          <button className={s.acceptButton} onClick={enableGA}>ACCEPT</button>
        </section>
      </div>
    )
  )
}

export default Cookie