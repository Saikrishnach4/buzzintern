import styles from "./Wireframe3.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Wireframe3 = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  useEffect(() => {
    // Log the token value from localStorage
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    // Make an API call to check authorization
    axios.get('http://localhost:5000/mentors', {
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        // If the response is successful, user is authorized
        console.log('Success');
        setIsAuthorized(true);
      })
      .catch(error => {
        console.log('Fail');
        setIsAuthorized(false);
      });
  }, []);
  const handleCohortClick = (influencer) => {
    setSelectedInfluencer(influencer);
   console.log(influencer)
    // Get the user's token from local storage
    const token = localStorage.getItem('token');

    // Send the selected influencer's details and the user's token to the server for enrollment
    axios.post('http://localhost:5000/selected', {
      token: token,
      cohortDetails: influencer
    })
    .then(response => {
      console.log('User enrolled in cohort:', response.data);
      // Handle any UI changes or feedback here
    })
    .catch(error => {
      console.error('Error enrolling in cohort:', error);
    });
  };
  return (
    <div className={styles.wireframe3}>
      {isAuthorized ? (

        <>
          <div className={styles.yourMentors}>Your Mentors</div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/group-2@2x.png" />
            <button  onClick={() => handleCohortClick({
                name: 'Nicholas Keinan',
                bio: 'Food and Beverage influencer. Mentorship in culinary arts.',
                image: '/group-2@2x.png', // Add the image URL here
                // Other influencer details
              })} className={styles.joinMyCohortWrapper}>
              <div className={styles.joinMyCohort}>join my cohort</div>
            </button>
            <div className={styles.nicholasKeinan}>Nicholas Keinan</div>
            <div className={styles.foodAndBeverage}>Food and Beverage</div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/group-12@2x.png" />
            <button onClick={() => handleCohortClick({
                name: 'Lisa pedrinho',
                bio: 'lifestyle',
                image: '/group-12@2x.png', // Add the image URL here
                // Other influencer details
              })} className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div  className={styles.joinMyCohort1}>join my cohort</div>
            </button>
            <div className={styles.lisaPedrinho}>Lisa Pedrinho</div>
            <div className={styles.lifestyle}>Lifestyle</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/group-14@2x.png" />
            <button  onClick={() => handleCohortClick({
                name: 'Zac Marino',
                bio: 'Music and Performing Arts',
                image: '/group-14@2x.png', // Add the image URL here
                // Other influencer details
              })} className={styles.frameButton}>
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
            <button onClick={() => handleCohortClick({
                name: 'Gwendoline',
                bio: 'Fashion and Thrift',
                image: '/group-111@2x.png', // Add the image URL here
                // Other influencer details
              })} className={styles.rectangleParent2}>
              <div className={styles.frameChild6} />
              <div className={styles.joinMyCohort3}>join my cohort</div>
            </button>
            <div className={styles.gwendoline}>Gwendoline</div>
            <div className={styles.fashionAndThrift}>Fashion and Thrift</div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild4} />
            <img className={styles.frameChild5} alt="" src="/group-111@2x.png" />
            <button onClick={() => handleCohortClick({
                name: 'Carina Williams',
                bio: 'Travel and Tourism',
                image: '/group-12@2x.png', // Add the image URL here
                // Other influencer details
              })} className={styles.rectangleParent4}>
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
