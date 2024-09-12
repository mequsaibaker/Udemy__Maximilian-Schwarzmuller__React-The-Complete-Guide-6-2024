import Button from "./components/Button";
import HomeIcon from "./icons/HomeIcon";
import PlusIcon from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button>Default</Button>
      <Button mode="filled">Filled (Default)</Button>
      <Button mode="outline">Outline</Button>
      <Button mode="text">Text</Button>
      <Button icon={<PlusIcon />}>Add</Button>
      <Button mode="outline" icon={<HomeIcon />}>
        Home
      </Button>
    </>
  );
}

export default App;
