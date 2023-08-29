import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./enrolled.module.css";

const Wireframe21 = () => {
  const [enrolledCohorts, setEnrolledCohorts] = useState([]);

  useEffect(() => {
    // Fetch the user's enrolled cohorts from the server
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage
    axios.get('http://localhost:5000/user/enrolled-cohorts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setEnrolledCohorts(response.data.cohorts);
    })
    .catch(error => {
      console.error('Error fetching enrolled cohorts:', error);
    });
  }, []);

  return (
    <div className={styles.wireframe21}>
      <div className={styles.myCohorts}>My Cohorts</div>
      <img
        className={styles.iconamoonmenuBurgerHorizont}
        alt=""
        src="/iconamoonmenuburgerhorizontalbold.svg"
      />
      {enrolledCohorts.map(cohort => (
        <div key={cohort._id}>
          <div className={styles.wireframe21Child} />
          <div className={styles.wireframe21Item} />
          <img className={styles.wireframe21Inner} alt="" src={cohort.image} />
          <div className={styles.lisaPedrinho}>{cohort.name}</div>
          <div className={styles.lifestyle}>{cohort.category}</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
          <img className={styles.rectangleIcon} alt="" src="/rectangle-60.svg" />
          <img
            className={styles.wireframe21Child1}
            alt=""
            src="/rectangle-60.svg"
          />
          <div className={styles.inProgress}>In Progress</div>
          <div className={styles.div}>12:00:00</div>
        </div>
      ))}
    </div>
  );
};

export default Wireframe21;
