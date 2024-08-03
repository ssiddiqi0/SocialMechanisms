// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';
import './App.css';
import QuizPage from './pages/quizpage'; // Import the QuizPage component
import LearnMore from './pages/learnmore';
import About from './pages/about';

function Home() {
  const scaleCParallax = useParallax({
    scaleX: [0, 3, 'easeInQuad'],
  });
  const parallaxRotateY = useParallax({
    rotateY: [0, 360],
  });
  const parallaxEasing = useParallax({
    easing: 'easeOutQuad',
    translateX: [-340, 100],
  });
  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  });

  return (
    <div>
      <section className="bg-container">
        <img
          ref={parallaxRotateY.ref}
          src="https://canadaartsandculture.com/wp-content/uploads/2022/08/MarcL_Canada_arts_and_culture_6d311b5b-e104-48a7-a330-babbe8db06db.jpg"
          alt="Background"
        />
        <div className="absolute-text">
          <h1 ref={parallaxEasing.ref}>EXPLORING CANADIAN HISTORY</h1>
          <h2 ref={parallaxEasingLeft.ref}>Recognition and Resistance</h2>
        </div>
      </section>
      <br />
      <section className="card-container" ref={scaleCParallax.ref}>
        <div className="card">
          <img src="https://montecristomagazine.com/wp-content/uploads/2022/09/MM_15-3_DPS_Page_21_Image_0001_23.jpg" alt="Recognition" />
          <div>
            <h2>Recognition</h2>
            <p>
              In Canadian history, recognition involves acknowledging and validating diverse identities and contributions. It addresses past injustices and fosters inclusivity, such as recognizing Indigenous rights and the contributions of various ethnic communities. This mechanism is key for reconciliation and promoting equity in society.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://muskratmagazine.com/wp-content/uploads/2013/06/timeline.jpg" alt="Resistance" />
          <div>
            <h2>Resistance</h2>
            <p>
              Resistance in Canadian history refers to the efforts by individuals and groups to challenge and oppose oppression and injustice. This includes Indigenous peoples' struggles against colonialism, as well as various social movements advocating for civil rights and equity. Resistance shapes societal change by confronting unfair practices and pushing for reforms to achieve greater justice and equality.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="subscribe-section">
        Take a quiz to learn more<br />
        <Link to="/quiz"><button>Start</button></Link>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;
            <Link to="/About">About</Link>
            &nbsp;&nbsp;
            <Link to="/quiz">Quiz</Link>
            &nbsp;&nbsp;
            <Link to="/LearnMore">Learn More</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/About" element={<About/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
