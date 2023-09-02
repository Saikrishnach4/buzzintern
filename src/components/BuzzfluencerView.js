import styles from "./BuzzfluencerView.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
const BuzzfluencerView = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [influencerDetails, setInfluencerDetails] = useState({});
  const [usersdata, setusersdata] = useState([])
  // Effect to check authorization
  useEffect(() => {
    axios.get('http://localhost:5000/', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(response => {
        setIsAuthorized(true);
      })
      .catch(error => {
        setIsAuthorized(false);
      });
  }, []);

  // Effect to fetch influencer details
  useEffect(() => {
    if (isAuthorized) {
      axios.get('http://localhost:5000/influencerdata', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then(response => {
          setusersdata(response.data.enrolledUsers)
          setInfluencerDetails(response.data.influencer);
          

          console.log("helllooooooo1", response.data.enrolledUsers)
          console.log("helllooooooo", response.data.influencer)
        })
        .catch(error => {
          console.error('Error fetching influencer details:', error);
        });
    }
  }, [isAuthorized]);

  return (
    <div className={styles.buzzfluencerView}>
      {isAuthorized ? (
        <><img className={styles.vectorIcon} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
          <div className={styles.fashionAndThrift}>Fashion and Thrift</div>
          <div className={styles.meetYourMentor}>Meet your Mentor</div>
          <div className={styles.followers}>Followers</div>
          <div className={styles.engagement}>Engagement</div>
          <img
            className={styles.buzzfluencerViewChild}
            alt=""
            src="/group-11@2x.png"
          />
          <div className={styles.gwendoline}>{influencerDetails.buzzname}</div>

          <div className={styles.gwendyyy}>@gwendyyy</div>
          <img className={styles.vectorIcon2} alt="" src="/vector6.svg" />
          <div className={styles.k}>150K</div>
          <div className={styles.k1}>455K</div>
          <div className={styles.fashionOpenedUp}>
            “Fashion opened up new lanes for me and empowered me to heritage “
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
            suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
            ante fermentum sit amet. Pellentesque commodo lacus at sodales.
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.joinMyCohort}>join my cohort</div>
          </button>
          <div className={styles.whatYouCan}>what you can expect ?</div>
          <div className={styles.cohortJourney}>
            <p className={styles.cohort}>Cohort</p>
            <p className={styles.cohort}>Journey</p>
          </div>
          <img className={styles.buzzfluencerViewItem} alt="" src="/vector-3.svg" />
          <div className={styles.week1}>
            <span>{`Week `}</span>
            <span className={styles.span}>1</span>
          </div>
          <div className={styles.week3}>
            <span>{`Week `}</span>
            <span className={styles.span}>3</span>
          </div>
          <div className={styles.week4}>
            <span>{`Week `}</span>
            <span className={styles.span}>4</span>
          </div>
          <div className={styles.week2}>
            <span>{`Week `}</span>
            <span className={styles.span}>2</span>
          </div>
          <div className={styles.cohortStatisticsParent}>
            <div className={styles.cohortStatistics}>Cohort Statistics</div>
            <img
              className={styles.iconamoonmenuBurgerHorizont}
              alt=""
              src="/iconamoonmenuburgerhorizontalbold.svg"
            />
            <div className={styles.parent}>
              {usersdata.map((user, index) => (
                <div key={index} className={styles.frameChild}>
                  <img className={styles.frameChild} alt="" src="/rectangle-85.svg" />
                  <div className={styles.frameItem} />
                  <div className={styles.tiaPakhi}>{user.buzzname}</div>
                  <div className={styles.frameInner} />
                  <div className={styles.lineDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.w1}>W1</div>
                  <div className={styles.grade}>Grade :</div>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.w2}>W2</div>
                  <div className={styles.w3}>W3</div>
                  <div className={styles.w4}>W4</div>
                  <div className={styles.grade1}>Grade :</div>
                  <div className={styles.grade2}>Grade :</div>
                  <div className={styles.grade3}>Grade :</div>
                  <div className={styles.frameChild3} />
                  <div className={styles.frameChild4} />
                  <div className={styles.frameChild5} />
                </div>
              ))}
            </div>

            <div className={styles.registeredUsers}>Registered users</div>
          </div></>
      ) : (<div>You are not authorized to access this page.</div>)}
    </div>
  );
};

export default BuzzfluencerView;
