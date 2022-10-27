import Marker from "components/Marker/Marker";
import "./HeroesList.css"


export default function HeroesList({ heroes }) {
  return (
    <div className="container">
    <div className="text">SELECT YOUR FIGHTER</div>
    <div className="heroesList">
      {heroes &&
        heroes.map((marker, i) => (
          <Marker marker={marker} key={i} />
        ))}
      </div>
      </div>
  );
}