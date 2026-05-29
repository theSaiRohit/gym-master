import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import CookieConsent from "./components/cookie-consent/CookieConsent";
import HeroSection from "./components/hero-section/HeroSection";
import Join from "./components/join/Join";
import Plans from "./components/plans/Plans";
import Programs from "./components/programs/Programs";
import Reasons from "./components/reasons/Reasons";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection key="home-page"/>
                <Programs />
                <Reasons />
                <Plans />
                <Testimonials />
                <Join />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <HeroSection key="blog-page"/>
                <Blog />
              </>
            }
          />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
