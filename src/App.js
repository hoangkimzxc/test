import "./App.css";

const Cup = ({ guest }) => {
  return <h2>Tea cup for guest #{guest}</h2>;
};

export default function App() {
  return (
    <div className="avatar">
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
    </div>
  );
}
