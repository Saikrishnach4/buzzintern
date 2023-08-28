import styles from "./UserView.module.css";

const UserView = () => {
 
  return (
    <div className={styles.userView}>
      <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
      <div className={styles.fashionAndThrift}>Fashion and Thrift</div>
      <div className={styles.meetYourMentor}>Meet your Mentor</div>
      <div className={styles.followers}>Followers</div>
      <div className={styles.engagement}>Engagement</div>
      <img className={styles.userViewChild} alt="" src="/group-11@2x.png" />
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
      <img className={styles.userViewItem} alt="" src="/vector-3.svg" />
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
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.roadmap}>Roadmap</div>
        <div className={styles.problemStatement}>
          <p className={styles.cohort}>Problem</p>
          <p className={styles.cohort}>Statement</p>
        </div>
        <div className={styles.abcLifestyleIs}>
          “ABC Lifestyle Is launching their new ‘Summer Collection‘ comprising
          of both T-shirts and a new line of Jeans. For promotional purposes,
          they would like you to craft a campaign consisting of posts, stories
          and reels to launch on Social Media for gaining brand visibility and
          product promotion to increase sales. “
        </div>
        <div className={styles.week11}>week 1</div>
        <div className={styles.week21}>week 2</div>
        <div className={styles.week31}>week 3</div>
        <div className={styles.week41}>week 4</div>
        <img className={styles.frameItem} alt="" src="/group-94.svg" />
        <div className={styles.problemStatementParent}>
          <div className={styles.problemStatement1}>Problem Statement</div>
          <div className={styles.tutorialVideo}>Tutorial Video</div>
          <div className={styles.tools}>Tools</div>
          <div className={styles.assignment1}>Assignment 1</div>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.groupChild1} />
          <img className={styles.vectorIcon3} alt="" src="/vector7.svg" />
        </div>
        <img className={styles.frameInner} alt="" src="/group-96.svg" />
        <div className={styles.div}>{`>`}</div>
        <div className={styles.frameChild1} />
      </div>
    </div>
  );
};

export default UserView;
