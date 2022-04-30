import "./App.css";

const Profile = () => (
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
);

export default function App() {
  return (
    <div className="avatar">
      <h1>Amazing scientist </h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </div>
  );
}
