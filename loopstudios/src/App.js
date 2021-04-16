import logo from "./images/logo.svg";
import vrGuy from "./images/desktop/image-interactive.jpg";
import curiosity from "./images/desktop/image-curiosity.jpg";
import deep from "./images/desktop/image-deep-earth.jpg";
import fisheye from "./images/desktop/image-fisheye.jpg";
import above from "./images/desktop/image-from-above.jpg";
import grid from "./images/desktop/image-grid.jpg";
import night from "./images/desktop/image-night-arcade.jpg";
import pocket from "./images/desktop/image-pocket-borealis.jpg";
import soccer from "./images/desktop/image-soccer-team.jpg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div id="main-content">
      <Header />
      <Leader />
      <Creations />
      <Footer />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.github.com/partum/loopstudios">Julia Arrington</a>.
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <NavLinks />
      </nav>
      <div id="title">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </header>
  );
}

function NavLinks() {
  const nav = [
    { id: 1, text: "About", href: "#" },
    { id: 2, text: "Careers", href: "#" },
    { id: 3, text: "Events", href: "#" },
    { id: 4, text: "Products", href: "#" },
    { id: 5, text: "Support", href: "#" }
  ];
  return (
    <span>
      {nav.map(link => (
        <a key={link.id} href={link.href}>
          {link.text}
        </a>
      ))}
    </span>
  );
}

function Leader() {
  return (
    <div className="leader">
      <img src={vrGuy} alt="man playing with a VR headset" />
      <article>
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </article>
    </div>
  );
}

function Creations() {
  const projects = [
    { id: 1, title: "Deep earth", pic: deep },
    { id: 2, title: "Night arcade", pic: night },
    { id: 3, title: "Soccer team VR", pic: soccer },
    { id: 4, title: "The grid", pic: grid },
    { id: 5, title: "From up above VR", pic: above },
    { id: 6, title: "Pocket borealis", pic: pocket },
    { id: 7, title: "The curiosity", pic: curiosity },
    { id: 8, title: "Make it fisheye", pic: fisheye }
  ];
  return (
    <div>
      <h2>Our creations</h2>
      <MyButton foo="See all" />
      {projects.map(tile => (
        <article key={tile.id}>
          <img src={tile.pic} className="tile" />
          <h3>{tile.title}</h3>
        </article>
      ))}
    </div>
  );
}

function MyButton(props) {
  return <button>{props.foo}</button>;
}

function Footer() {
  const social = [
    { id: 1, title: "Facebook", pic: facebook },
    { id: 2, title: "Twitter", pic: twitter },
    { id: 3, title: "Pinterest", pic: pinterest },
    { id: 4, title: "Instagram", pic: instagram }
  ];
  return (
    <footer>
      <img src={logo} className="App-logo" alt="logo" />
      {social.map(icon => (
        <a href="#" key={social.id}>
          <img src={logo.pic} className="social-icon" alt={logo.title} />
        </a>
      ))}
      <NavLinks />
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  );
}

export default App;
