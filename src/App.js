import './App.css';
import items from "./resources/items";
import List from './components/list'

function App() {
  const stages = [
    "Idea",
    "Development",
    "Testing",
    "Deployment"
  ]

  return (
    <div className="App">
      <List items={items}></List>
    </div>
  );
}

export default App;
