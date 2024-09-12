import reactImg from "./assets/react-core-concepts.png";
import compImg from "./assets/components.png";

const reactDesc = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDesc[getRandomInt(3)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title="Compenets"
              description="The core UI building block."
              img={compImg}
            />
            <CoreConcept title="Props" description="" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
