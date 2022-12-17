import './App.css';
// Playing in https://beta.reactjs.org/learn 

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}



function AppVal() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start <MyButton />
        </p>
        <p>
        <ul>{listItems}</ul>
        </p>
      </header>
    </div>
  );
}

export default AppVal;
