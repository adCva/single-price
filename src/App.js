import './App.css';
import "./Style.css";


function App() {
  return (
    <div className="App-wrapper">
      <div className="App-container">
        {/* ================== Join container ================== */}
        <div className="join-container">
          <h1>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>

        {/* ================== Grid container ================== */}
        <div className="grid-container">
          {/* ================== Subscription container ================== */}
          <div className="subscription">
            <h3>Monthly Subscription</h3>
            <h1>$29 <span>per month</span></h1>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          {/* ================== About container ================== */}
          <div className="about">
            <h4>Why Us</h4>
            <p>Tutorials by industry experts <span>Peer &amp; expert code review </span><span>Coding exercises</span><span>Access to our GitHub repos</span><span>Community forum</span><span>Flashcard decks</span><span>New videos every week</span></p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;