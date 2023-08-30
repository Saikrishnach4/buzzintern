import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BuzzfluencerView from "./components/BuzzfluencerView";
import UserView from "./components/UserView";
import Wireframe20 from "./components/Wireframe20";
import Wireframe3 from "./pages/Wireframe3";
import Wireframe19 from "./pages/Wireframe19";
import { useEffect, useState } from "react";
import Login from "./components/login";
import User from "./components/user";
import Wireframe21 from "./components/enrolled";
import { EmailProvider, InfluencerProvider } from "./components/influencercontext";

import Videoframe from "./components/video";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-view":
        title = "";
        metaDescription = "";
        break;
      case "/wireframe-20":
        title = "";
        metaDescription = "";
        break;
      case "/wireframe-3":
        title = "";
        metaDescription = "";
        break;
      case "/wireframe-19":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);



  return (
    <EmailProvider><Routes>
      <Route path="/" element={<Login />} />
      <Route path="/accountdashboard" element={<Wireframe20 />} />
      <Route path="/mentors" element={<Wireframe3 />} />
      <Route path="/influencersignup" element={<Wireframe19 />} />
      <Route path="/buzzfluencerview" element={<BuzzfluencerView />} />
      <Route path="/usersignup" element={<User />} />
      <Route path="/enrolled" element={<Wireframe21 />} />
      <Route path="/userview" element={<UserView />} />
      <Route path="/video" element={<Videoframe />} />

    </Routes></EmailProvider>

  );
}
export default App;
