import styles from "./BuzzfluencerView.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
const BuzzfluencerView = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
      // Make an API call to check authorization
      axios.get('http://localhost:5000/', {
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
    <div className={styles.buzzfluencerView}>
      {isAuthorized?(
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
      <div className={styles.gwendoline}>Gwendoline</div>
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
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-85.svg" />
          <div className={styles.frameItem} />
          <div className={styles.tiaPakhi}>Tia Pakhi</div>
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
        <div className={styles.vectorGroup}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-851.svg"
          />
          <div className={styles.frameDiv} />
          <div className={styles.tiaPakhi1}>Tia Pakhi</div>
          <div className={styles.frameChild6} />
          <div className={styles.frameChild7} />
          <div className={styles.frameChild8} />
          <div className={styles.frameChild9} />
          <div className={styles.w11}>W1</div>
          <div className={styles.grade4}>Grade :</div>
          <div className={styles.frameChild10} />
          <div className={styles.w21}>W2</div>
          <div className={styles.w31}>W3</div>
          <div className={styles.w41}>W4</div>
          <div className={styles.grade5}>Grade :</div>
          <div className={styles.grade6}>Grade :</div>
          <div className={styles.grade7}>Grade :</div>
          <div className={styles.frameChild11} />
          <div className={styles.frameChild12} />
          <div className={styles.frameChild13} />
        </div>
        <div className={styles.vectorContainer}>
          <img
            className={styles.frameChild14}
            alt=""
            src="/rectangle-852.svg"
          />
          <div className={styles.frameChild15} />
          <div className={styles.itaKaphi}>Ita Kaphi</div>
          <div className={styles.frameChild16} />
          <div className={styles.frameChild17} />
          <div className={styles.frameChild18} />
          <div className={styles.frameChild19} />
          <div className={styles.w12}>W1</div>
          <div className={styles.grade8}>Grade :</div>
          <div className={styles.frameChild20} />
          <div className={styles.w22}>W2</div>
          <div className={styles.w32}>W3</div>
          <div className={styles.w42}>W4</div>
          <div className={styles.grade9}>Grade :</div>
          <div className={styles.grade10}>Grade :</div>
          <div className={styles.grade11}>Grade :</div>
          <div className={styles.frameChild21} />
          <div className={styles.frameChild22} />
          <div className={styles.frameChild23} />
        </div>
        <div className={styles.vectorParent1}>
          <img
            className={styles.frameChild24}
            alt=""
            src="/rectangle-853.svg"
          />
          <div className={styles.frameChild25} />
          <div className={styles.tiaPakhi2}>Tia Pakhi</div>
          <div className={styles.frameChild26} />
          <div className={styles.frameChild27} />
          <div className={styles.frameChild28} />
          <div className={styles.frameChild29} />
          <div className={styles.w13}>W1</div>
          <div className={styles.grade12}>Grade :</div>
          <div className={styles.frameChild30} />
          <div className={styles.w23}>W2</div>
          <div className={styles.w33}>W3</div>
          <div className={styles.w43}>W4</div>
          <div className={styles.grade13}>Grade :</div>
          <div className={styles.grade14}>Grade :</div>
          <div className={styles.grade15}>Grade :</div>
          <div className={styles.frameChild31} />
          <div className={styles.frameChild32} />
          <div className={styles.frameChild33} />
        </div>
        <div className={styles.vectorParent2}>
          <img
            className={styles.frameChild34}
            alt=""
            src="/rectangle-854.svg"
          />
          <div className={styles.frameChild35} />
          <div className={styles.piaTakhi}>Pia Takhi</div>
          <div className={styles.frameChild36} />
          <div className={styles.frameChild37} />
          <div className={styles.frameChild38} />
          <div className={styles.frameChild39} />
          <div className={styles.w14}>W1</div>
          <div className={styles.grade16}>Grade :</div>
          <div className={styles.frameChild40} />
          <div className={styles.w24}>W2</div>
          <div className={styles.w34}>W3</div>
          <div className={styles.w44}>W4</div>
          <div className={styles.grade17}>Grade :</div>
          <div className={styles.grade18}>Grade :</div>
          <div className={styles.grade19}>Grade :</div>
          <div className={styles.frameChild41} />
          <div className={styles.frameChild42} />
          <div className={styles.frameChild43} />
        </div>
        <div className={styles.vectorParent3}>
          <img
            className={styles.frameChild24}
            alt=""
            src="/rectangle-855.svg"
          />
          <div className={styles.frameChild45} />
          <div className={styles.tiaPakhi3}>Tia Pakhi</div>
          <div className={styles.frameChild46} />
          <div className={styles.frameChild47} />
          <div className={styles.frameChild28} />
          <div className={styles.frameChild29} />
          <div className={styles.w15}>W1</div>
          <div className={styles.grade12}>Grade :</div>
          <div className={styles.frameChild30} />
          <div className={styles.w25}>W2</div>
          <div className={styles.w35}>W3</div>
          <div className={styles.w45}>W4</div>
          <div className={styles.grade13}>Grade :</div>
          <div className={styles.grade14}>Grade :</div>
          <div className={styles.grade15}>Grade :</div>
          <div className={styles.frameChild31} />
          <div className={styles.frameChild32} />
          <div className={styles.frameChild33} />
        </div>
        <div className={styles.registeredUsers}>Registered users</div>
      </div></>
      ):(<div>You are not authorized to access this page.</div>)}
    </div>
  );
};

export default BuzzfluencerView;
