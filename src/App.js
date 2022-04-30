import "./App.css";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const Render = () => {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

function handleClick() {
  alert("What are u clicking at?");
}

export default function App() {
  return (
    <div className="avatar">
      <button onClick={handleClick}>CLICKER</button>
      <Render />
    </div>
  );
}
