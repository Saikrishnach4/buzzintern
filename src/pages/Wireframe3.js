import styles from "./Wireframe3.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useEmailContext } from '../components/influencercontext';
const Wireframe3 = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { email, updateEmail } = useEmailContext();
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [influencerData, setInfluencerData] = useState([]);
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
    updateEmail(influencer.email);
    // Get the user's token from local storage
    const token = localStorage.getItem('token');
// Storing email in localStorage
localStorage.setItem('email', influencer.email);

    // Send the selected influencer's details and the user's token to the server for enrollment
    axios.post('http://localhost:5000/selected', {
      token: token,
      cohortDetails: influencer
    })
      .then(response => {
        console.log('User enrolled in cohort:', response.data);
        
        window.location.href = '/userview';
      })
      .catch(error => {
        console.error('Error enrolling in cohort:', error);
        
        window.location.href = '/userview';
      });
  };
  useEffect(() => {
    // Fetch influencer details
    fetchInfluencerDetails();
  }, []);
  useEffect(() => {
    console.log('Influencer Email:', email);
  }, [email]);
  const fetchInfluencerDetails = () => {
    axios
      .get("http://localhost:5000/influencersdetailsdata")
      .then((response) => {
        setInfluencerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching influencer details:", error);
      });
  };




  return (
    <div className={styles.wireframe3}>
      {isAuthorized ? (
        <>
          {influencerData.map((influencer) => (
            <div key={influencer._id} className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                alt=""
                src={influencer.image} // Replace with the actual image URL
              />
              <button
                onClick={() => handleCohortClick(influencer)}
                className={styles.joinMyCohortWrapper}
              >
                <div className={styles.joinMyCohort}>join my cohort</div>
              </button>
              <div className={styles.influencerName}>{influencer.name}</div>
              <div className={styles.influencerCategory}>
                {influencer.category}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>You are not authorized to access this page.</div>
      )}
    </div>
  );
};

export default Wireframe3;
