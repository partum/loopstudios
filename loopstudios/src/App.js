import logo from "./images/logo.svg";
import vrGuy from "./images/desktop/image-interactive.jpg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <body>
      <Header />
      <Leader />
      <Creations />
    </body>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <NavLinks />
      </nav>
      <h1>Imersive Experiences That Deliver</h1>
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
    { id: 1, title: "Deep earth" },
    { id: 2, title: "Night arcade" },
    { id: 3, title: "Soccer team VR" },
    { id: 4, title: "The grid" },
    { id: 5, title: "From up above VR" },
    { id: 6, title: "Pocket borealis" },
    { id: 7, title: "The curiosity" },
    { id: 8, title: "Make it fisheye" }
  ];
  return (
    <div>
      <h2>Our creations</h2>
      <MyButton foo="See all" />
    </div>
  );
}

function MyButton(props) {
  return <button>{props.foo}</button>;
}

export default App;
