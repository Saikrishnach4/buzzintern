import styles from "./mainpage.module.css";
import { Link } from 'react-router-dom';

const Wireframe1 = () => {
    const accessToken = localStorage.getItem('token');
    const handleLogout = () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('email');
      
        
        window.location.href = '/login';
      };
      const isAuthenticated = localStorage.getItem('token');

  const handleMentorsClick = () => {
    if (!isAuthenticated) {
      window.alert('Login users only access the Mentors page.');
    }
  };
  return (
    <div className={styles.wireframe1}>
      <img
        className={styles.unsplashrcahigjsuueIcon}
        alt=""
        src="/unsplashrcahigjsuue@2x.png"
      />
      <img
        className={styles.unsplashrcahigjsuueIcon}
        alt=""
        src="/unsplashrcahigjsuue@2x.png"
      />
      <div className={styles.boxElements}>
        <div className={styles.boxElementsChild} />
        <div className={styles.boxElementsItem} />
        <div className={styles.boxElementsInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.div}>5</div>
        <div className={styles.div1}>5</div>
        <div className={styles.div2}>4</div>
        <div className={styles.div3}>10+</div>
      </div>
      <div className={styles.welcomeTitle}>
        <div className={styles.buzzfluencer}>buzzfluencer</div>
        <div className={styles.welcomeToYour}>welcome to your</div>
        <div className={styles.influencers}>Influencers</div>
        <div className={styles.cohorts}>Cohorts</div>
        <div className={styles.weeks}>Weeks</div>
        <div className={styles.brandDeals}>Brand deals</div>
        <div className={styles.journey}>journey</div>
      </div>
      <div className={styles.header}>
        <img className={styles.headerChild} alt="" src="/rectangle-1.svg" />
        <img
          className={styles.logoFullMainW11}
          alt=""
          src="/logo-full-main-w-1-1@2x.png"
        />
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.home}>Home</div>
        </button>
        {!accessToken ? (
  <Link to="/login" className={styles.rectangleGroup}>
    <div className={styles.frameItem} />
    <div className={styles.login}>Login</div>
  </Link>
) : (
  <button className={styles.rectangleGroup} onClick={handleLogout}>
    <div className={styles.frameItem} />
    <div className={styles.login}>Logout</div>
  </button>
)}

        <button className={styles.rectangleContainer}>
          <div className={styles.frameItem} />
          <div className={styles.home}>Contact Us</div>
        </button>
        <div>
      {isAuthenticated ? (
        <Link to="/mentors" className={styles.frameButton}>
          <div className={styles.frameChild1} />
          <div className={styles.mentors}>Mentors</div>
        </Link>
      ) : (
        <button onClick={handleMentorsClick} className={styles.frameButton}>
          <div className={styles.frameChild1} />
          <div className={styles.mentors}>Mentors</div>
        </button>
      )}
    </div>
      </div>
      <img
        className={styles.welcomeImageIcon}
        alt=""
        src="/welcome-image.svg"
      />
    </div>
  );
};

export default Wireframe1;
