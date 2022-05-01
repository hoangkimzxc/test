import "./App.css";

let guest=0;

const Cup=()=>{
  guest=guest+1;
  return <h2>Tea cup for guest #{guest}</h2>
}

export default function App() {
 
  return (
    <div className="avatar">
      <Cup/>
      <Cup/>
      <Cup/>
      <Cup/>
    </div>
  );
}
