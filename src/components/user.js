import React, { useState } from 'react';
import axios from 'axios';
import styles from "./user.module.css"
function User() {
    const [email, setEmail] = useState('');
    const [name, setname] = useState('');
    const [buzzname, setbuzzname] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [password, setPassword] = useState('');
    const inputStyles = {
        color: '#CBCBCB',
        fontFamily: 'Cocogoose Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        fontVariant: 'small-caps',
    };
    const textStyles = {
        color: '#1E1E1E',
        textAlign: 'center',

        fontFamily: 'Cocogoose Pro',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/user/signup', {
                name,
                buzzname,
                email,
                password
            });
    
            // Handle successful response here (e.g., redirect or show a success message)
            console.log('Registration successful', response.data);
    
            // Assuming the token is returned in the response
            const token = response.data.token;
    
            // Store the token in localStorage
            localStorage.setItem('token', token);
    
            // Redirect to the desired page
            window.location.href = '/mentors';
        } catch (error) {
            // Handle error here (e.g., show an error message)
            console.error('Registration failed', error);
        }
    };
    
    return (
        <div className={styles.maindiv}>
            <div className={styles.innerdiv} >
                <p className={styles.h2}>SIGN UP FOR USERS</p>
                <div className={styles.email}>
                    <span style={{ position: "relative", top: "18px", left: "47px" }} >
                        {/* Include the SVG component here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M22.5 4.5H4.5C3.2625 4.5 2.26125 5.5125 2.26125 6.75L2.25 20.25C2.25 21.4875 3.2625 22.5 4.5 22.5H22.5C23.7375 22.5 24.75 21.4875 24.75 20.25V6.75C24.75 5.5125 23.7375 4.5 22.5 4.5ZM22.5 9L13.5 14.625L4.5 9V6.75L13.5 12.375L22.5 6.75V9Z" fill="#CBCBCB" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="NAME"
                        style={{ textAlign: "center" }}
                    />
                </div>
                <div className={styles.email}>
                    <span style={{ position: "relative", top: "18px", left: "47px" }} >
                        {/* Include the SVG component here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5001 17.7077C13.0527 17.7077 13.5826 17.4882 13.9733 17.0975C14.364 16.7068 14.5835 16.1769 14.5835 15.6243C14.5835 15.0718 14.364 14.5419 13.9733 14.1512C13.5826 13.7605 13.0527 13.541 12.5001 13.541C11.9476 13.541 11.4177 13.7605 11.027 14.1512C10.6363 14.5419 10.4168 15.0718 10.4168 15.6243C10.4168 16.1769 10.6363 16.7068 11.027 17.0975C11.4177 17.4882 11.9476 17.7077 12.5001 17.7077ZM18.7501 8.33268C19.3027 8.33268 19.8326 8.55218 20.2233 8.94288C20.614 9.33358 20.8335 9.86348 20.8335 10.416V20.8327C20.8335 21.3852 20.614 21.9151 20.2233 22.3058C19.8326 22.6965 19.3027 22.916 18.7501 22.916H6.25014C5.69761 22.916 5.1677 22.6965 4.777 22.3058C4.3863 21.9151 4.16681 21.3852 4.16681 20.8327V10.416C4.16681 9.86348 4.3863 9.33358 4.777 8.94288C5.1677 8.55218 5.69761 8.33268 6.25014 8.33268H7.29181V6.24935C7.29181 4.86801 7.84054 3.54325 8.8173 2.5665C9.79405 1.58975 11.1188 1.04102 12.5001 1.04102C13.1841 1.04102 13.8614 1.17573 14.4933 1.43748C15.1252 1.69922 15.6994 2.08286 16.183 2.5665C16.6666 3.05014 17.0503 3.6243 17.312 4.25621C17.5738 4.88811 17.7085 5.56538 17.7085 6.24935V8.33268H18.7501ZM12.5001 3.12435C11.6713 3.12435 10.8765 3.45359 10.2904 4.03964C9.70438 4.62569 9.37514 5.42055 9.37514 6.24935V8.33268H15.6251V6.24935C15.6251 5.42055 15.2959 4.62569 14.7099 4.03964C14.1238 3.45359 13.3289 3.12435 12.5001 3.12435Z" fill="#CBCBCB" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        id="buzz name"
                        value={buzzname}
                        onChange={(e) => setbuzzname(e.target.value)}
                        placeholder="BUZZ NAME"
                        style={{ textAlign: "center" }}
                    />
                </div>
                <div className={styles.email}>
                    <span style={{ position: "relative", top: "18px", left: "47px" }} >
                        {/* Include the SVG component here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5001 17.7077C13.0527 17.7077 13.5826 17.4882 13.9733 17.0975C14.364 16.7068 14.5835 16.1769 14.5835 15.6243C14.5835 15.0718 14.364 14.5419 13.9733 14.1512C13.5826 13.7605 13.0527 13.541 12.5001 13.541C11.9476 13.541 11.4177 13.7605 11.027 14.1512C10.6363 14.5419 10.4168 15.0718 10.4168 15.6243C10.4168 16.1769 10.6363 16.7068 11.027 17.0975C11.4177 17.4882 11.9476 17.7077 12.5001 17.7077ZM18.7501 8.33268C19.3027 8.33268 19.8326 8.55218 20.2233 8.94288C20.614 9.33358 20.8335 9.86348 20.8335 10.416V20.8327C20.8335 21.3852 20.614 21.9151 20.2233 22.3058C19.8326 22.6965 19.3027 22.916 18.7501 22.916H6.25014C5.69761 22.916 5.1677 22.6965 4.777 22.3058C4.3863 21.9151 4.16681 21.3852 4.16681 20.8327V10.416C4.16681 9.86348 4.3863 9.33358 4.777 8.94288C5.1677 8.55218 5.69761 8.33268 6.25014 8.33268H7.29181V6.24935C7.29181 4.86801 7.84054 3.54325 8.8173 2.5665C9.79405 1.58975 11.1188 1.04102 12.5001 1.04102C13.1841 1.04102 13.8614 1.17573 14.4933 1.43748C15.1252 1.69922 15.6994 2.08286 16.183 2.5665C16.6666 3.05014 17.0503 3.6243 17.312 4.25621C17.5738 4.88811 17.7085 5.56538 17.7085 6.24935V8.33268H18.7501ZM12.5001 3.12435C11.6713 3.12435 10.8765 3.45359 10.2904 4.03964C9.70438 4.62569 9.37514 5.42055 9.37514 6.24935V8.33268H15.6251V6.24935C15.6251 5.42055 15.2959 4.62569 14.7099 4.03964C14.1238 3.45359 13.3289 3.12435 12.5001 3.12435Z" fill="#CBCBCB" />
                        </svg>
                    </span>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="EMAIL"
                        style={{ textAlign: "center" }}
                    />
                </div>
                <div className={styles.email}>
                    <span style={{ position: "relative", top: "18px", left: "47px" }} >
                        {/* Include the SVG component here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5001 17.7077C13.0527 17.7077 13.5826 17.4882 13.9733 17.0975C14.364 16.7068 14.5835 16.1769 14.5835 15.6243C14.5835 15.0718 14.364 14.5419 13.9733 14.1512C13.5826 13.7605 13.0527 13.541 12.5001 13.541C11.9476 13.541 11.4177 13.7605 11.027 14.1512C10.6363 14.5419 10.4168 15.0718 10.4168 15.6243C10.4168 16.1769 10.6363 16.7068 11.027 17.0975C11.4177 17.4882 11.9476 17.7077 12.5001 17.7077ZM18.7501 8.33268C19.3027 8.33268 19.8326 8.55218 20.2233 8.94288C20.614 9.33358 20.8335 9.86348 20.8335 10.416V20.8327C20.8335 21.3852 20.614 21.9151 20.2233 22.3058C19.8326 22.6965 19.3027 22.916 18.7501 22.916H6.25014C5.69761 22.916 5.1677 22.6965 4.777 22.3058C4.3863 21.9151 4.16681 21.3852 4.16681 20.8327V10.416C4.16681 9.86348 4.3863 9.33358 4.777 8.94288C5.1677 8.55218 5.69761 8.33268 6.25014 8.33268H7.29181V6.24935C7.29181 4.86801 7.84054 3.54325 8.8173 2.5665C9.79405 1.58975 11.1188 1.04102 12.5001 1.04102C13.1841 1.04102 13.8614 1.17573 14.4933 1.43748C15.1252 1.69922 15.6994 2.08286 16.183 2.5665C16.6666 3.05014 17.0503 3.6243 17.312 4.25621C17.5738 4.88811 17.7085 5.56538 17.7085 6.24935V8.33268H18.7501ZM12.5001 3.12435C11.6713 3.12435 10.8765 3.45359 10.2904 4.03964C9.70438 4.62569 9.37514 5.42055 9.37514 6.24935V8.33268H15.6251V6.24935C15.6251 5.42055 15.2959 4.62569 14.7099 4.03964C14.1238 3.45359 13.3289 3.12435 12.5001 3.12435Z" fill="#CBCBCB" />
                        </svg>
                    </span>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="PASSWORD"
                        style={{ textAlign: "center" }}
                    />
                </div>
                <div className={styles.email}>
                    <span style={{ position: "relative", top: "18px", left: "47px" }} >
                        {/* Include the SVG component here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5001 17.7077C13.0527 17.7077 13.5826 17.4882 13.9733 17.0975C14.364 16.7068 14.5835 16.1769 14.5835 15.6243C14.5835 15.0718 14.364 14.5419 13.9733 14.1512C13.5826 13.7605 13.0527 13.541 12.5001 13.541C11.9476 13.541 11.4177 13.7605 11.027 14.1512C10.6363 14.5419 10.4168 15.0718 10.4168 15.6243C10.4168 16.1769 10.6363 16.7068 11.027 17.0975C11.4177 17.4882 11.9476 17.7077 12.5001 17.7077ZM18.7501 8.33268C19.3027 8.33268 19.8326 8.55218 20.2233 8.94288C20.614 9.33358 20.8335 9.86348 20.8335 10.416V20.8327C20.8335 21.3852 20.614 21.9151 20.2233 22.3058C19.8326 22.6965 19.3027 22.916 18.7501 22.916H6.25014C5.69761 22.916 5.1677 22.6965 4.777 22.3058C4.3863 21.9151 4.16681 21.3852 4.16681 20.8327V10.416C4.16681 9.86348 4.3863 9.33358 4.777 8.94288C5.1677 8.55218 5.69761 8.33268 6.25014 8.33268H7.29181V6.24935C7.29181 4.86801 7.84054 3.54325 8.8173 2.5665C9.79405 1.58975 11.1188 1.04102 12.5001 1.04102C13.1841 1.04102 13.8614 1.17573 14.4933 1.43748C15.1252 1.69922 15.6994 2.08286 16.183 2.5665C16.6666 3.05014 17.0503 3.6243 17.312 4.25621C17.5738 4.88811 17.7085 5.56538 17.7085 6.24935V8.33268H18.7501ZM12.5001 3.12435C11.6713 3.12435 10.8765 3.45359 10.2904 4.03964C9.70438 4.62569 9.37514 5.42055 9.37514 6.24935V8.33268H15.6251V6.24935C15.6251 5.42055 15.2959 4.62569 14.7099 4.03964C14.1238 3.45359 13.3289 3.12435 12.5001 3.12435Z" fill="#CBCBCB" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        id="confirmpassword"
                        value={confirmpassword}
                        onChange={(e) => setconfirmpassword(e.target.value)}
                        placeholder="CONFIRM PASSWORD"
                        style={{ textAlign: "center" }}
                    />
                </div>

               
                <button className={styles.button} onClick={handleSubmit} type="button" ><span style={textStyles}>Login</span></button>


                
            </div>
        </div>
    );
}

export default User;
