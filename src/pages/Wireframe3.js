import styles from "./Wireframe3.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
const Wireframe3 = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

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
    <div className={styles.wireframe3}>
     {isAuthorized ? (
      
        <>
        <div className={styles.yourMentors}>Your Mentors</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/group-2@2x.png" />
        <button className={styles.joinMyCohortWrapper}>
          <div className={styles.joinMyCohort}>join my cohort</div>
        </button>
        <div className={styles.nicholasKeinan}>Nicholas Keinan</div>
        <div className={styles.foodAndBeverage}>Food and Beverage</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/group-12@2x.png" />
        <button className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.joinMyCohort1}>join my cohort</div>
        </button>
        <div className={styles.lisaPedrinho}>Lisa Pedrinho</div>
        <div className={styles.lifestyle}>Lifestyle</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" src="/group-14@2x.png" />
        <button className={styles.frameButton}>
          <div className={styles.frameChild3} />
          <div className={styles.joinMyCohort1}>join my cohort</div>
        </button>
        <div className={styles.zacMarino}>Zac Marino</div>
        <div className={styles.musicAndPerforming}>
          Music and Performing Arts
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild4} />
        <img className={styles.frameChild5} alt="" src="/group-111@2x.png" />
        <button className={styles.rectangleParent2}>
          <div className={styles.frameChild6} />
          <div className={styles.joinMyCohort3}>join my cohort</div>
        </button>
        <div className={styles.gwendoline}>Gwendoline</div>
        <div className={styles.fashionAndThrift}>Fashion and Thrift</div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.frameChild4} />
        <img className={styles.frameChild5} alt="" src="/group-111@2x.png" />
        <button className={styles.rectangleParent4}>
          <div className={styles.frameChild9} />
          <div className={styles.joinMyCohort1}>join my cohort</div>
        </button>
        <div className={styles.carinaWilliams}>Carina Williams</div>
        <div className={styles.travelAndTourism}>Travel and Tourism</div>
      </div>
        </>
      ) : (
        // Render the unauthorized message or component
        <div>You are not authorized to access this page.</div>
      )}
      
    </div>
  );
};

export default Wireframe3;
