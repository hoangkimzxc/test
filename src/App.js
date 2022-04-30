import "./App.css";

const user = {
  name: "Sigmund Freud",
  imgUrl: "https://picsum.photos/200",
  imgSize: 500,
};

const check=false;

export default function App() {
  return check &&(
    <div className="avatar">
      <h1>{user.name}</h1>
      <img
        src={user.imgUrl}
        style={{ width: user.imgSize, height: user.imgSize }}
        alt={"userfdsa" + user.name}
      />
    </div>
  );
}
