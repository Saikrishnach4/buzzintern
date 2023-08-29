import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Wireframe20.module.css';

const Wireframe20 = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log the token to the console
  
    // Make an API call to fetch user details
    axios.get('http://localhost:5000/details', {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setUserDetails(response.data);
    })
    .catch(error => {
      console.error('Error fetching user details', error);
    });
  }, []);
  useEffect(() => {
    // Make an API call to check authorization
    axios.get('http://localhost:5000/mentors', {
        headers: {
            Authorization: localStorage.getItem('token') // Assuming token is stored in localStorage
        }
    })
    .then(response => {
        // If the response is successful, user is authorized
        console.log("success")
        setIsAuthorized(true);
    })
    .catch(error => {
      console.log("fail")
        setIsAuthorized(false);
    });
}, []);

  return (
    <div className={styles.wireframe20}>
    {isAuthorized ? (<><div className={styles.myAccount}>My Account</div>
      {userDetails && (
        <div className={styles.groupParent}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.hasbullaRahim}>{userDetails.name}</div>
          </div>
          <div className={styles.bParent}>
            <div className={styles.b}>b</div>
            <div className={styles.hbulla}>{userDetails.buzzname}</div>
          </div>
          <div className={styles.mdipassword} />
          <div className={styles.vectorGroup}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.husbullagmailcom}>
             
              <span>{userDetails.email}</span>
            </div>
          </div>
          <div className={styles.mdipasswordWrapper}>
            <div className={styles.mdipassword1} />
          </div>
        </div>
      )}
      <div className={styles.editInYour}>Edit in your buzz account</div>
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <button className={styles.iconamoonmenuBurgerHorizont}>
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      </button>
      <img
        className={styles.wireframe20Child}
        alt=""
        src="/rectangle-59.svg"
      />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.unsplashcwnxlkekbeaIcon}
          alt=""
          src="/unsplashcwnxlkekbea@2x.png"
        />
      </div></>) : ( <h2>only user dashboard you are not authorized</h2> )}
      
    </div>
  );
};

export default Wireframe20;
