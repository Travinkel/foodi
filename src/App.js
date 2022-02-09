import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

function foodCard(props) {
  return (
    <div className="foodCard">
      <h1>{props.food.name}</h1>
      <p>{props.food.description}</p>
      <p>{props.food.price}</p>
    </div>
  );
}

function mealCard(props) {
  return (
    <div className="mealCard">
      <h1>{props.meal.name}</h1>
      <p>{props.meal.description}</p>
      <p>{props.meal.price}</p>
    </div>
  );
}

export default App;
