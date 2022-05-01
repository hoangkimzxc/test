import "./App.css";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function App() {
  const listItem = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "} know for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <div className="avatar">
      <article>
        <h1>Scientists</h1>
        <ul>{listItem}</ul>
      </article>
    </div>
  );
}
