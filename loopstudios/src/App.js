import logo from "./images/logo.svg";
import "./App.css";
import "./style.css";

function App() {
  const nav = [
    { id: 1, text: "About", href: "#" },
    { id: 2, text: "Careers", href: "#" },
    { id: 3, text: "Events", href: "#" },
    { id: 4, text: "Products", href: "#" },
    { id: 5, text: "Support", href: "#" }
  ];

  return (
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <NavLinks nav={nav} />
      </nav>
      <h1>Imersive Experiences That Deliver</h1>
    </header>
  );
}

function NavLinks(props) {
  return (
    <span>
      {props.nav.map(link => (
        <a key={link.id} href={link.href}>
          {link.text}
        </a>
      ))}
    </span>
  );
}
export default App;
