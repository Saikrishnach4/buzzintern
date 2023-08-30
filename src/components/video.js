import styles from "./video.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Videoframe = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const email = localStorage.getItem("email");
    useEffect(() => {
      // Fetch a random video URL for the given influencer email
      axios.get('http://localhost:5000/influencervideo', {
        params: {
          email: email
        }
      })
        .then(response => {
          setVideoUrl(`http://localhost:5000${response.data.videoUrl}`);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching video URL:', error);
        });
    }, [email]);
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.roadmap}>Roadmap</div>
      <div className={styles.tutorial}>Tutorial</div>
      <div className={styles.week1}>week 1</div>
      <div className={styles.week2}>week 2</div>
      <div className={styles.week3}>week 3</div>
      <div className={styles.week4}>week 4</div>
      <img className={styles.frameItem} alt="" src="/group-94.svg" />
      <div className={styles.problemStatementParent}>
        <div className={styles.problemStatement}>Problem Statement</div>
        <div className={styles.tutorialVideo}>Tutorial Video</div>
        <div className={styles.tools}>Tools</div>
        <div className={styles.assignment1}>Assignment 1</div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.ellipseDiv} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      {videoUrl ? (
        <video className={styles.wrapper} autoPlay
                loop controls width="600">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video available.</p>
      )}
      
      <div className={styles.div}>{`>`}</div>
      <div className={styles.frameInner} />
      <img className={styles.groupIcon} alt="" src="/group-96.svg" />
    </div>
  );
};

export default Videoframe;
