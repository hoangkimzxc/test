import "./App.css";

const Item = ({ name, isPacked }) => (
  <li>
    {name}
    {isPacked && "(check)"}
  </li>
);

export default function App() {
  return <div className="avatar">
    <h1>Sally Ride's Packing List</h1>
    <ul>
      <Item isPacked={true} name='Space suit'/>
      <Item isPacked={true} name='Helmet with a golden leaf'/>
      <Item isPacked={false} name='Photo of Tam'/>
    </ul>
  </div>;
}
