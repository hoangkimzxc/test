import "./App.css";
import { getImageUrl } from "./utils";

const Avatar = ({ person, size }) => (
  <img
    className="ava"
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
  />
);

const Card = ({ children }) => <div className="card">{children}</div>;

export default function App() {
  return (
    <div className="avatar">
      <Card>
        <Avatar
          size={100}
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        />
      </Card>
    </div>
  );
}
