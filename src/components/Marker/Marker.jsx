import "./Marker.css";

export default function Marker({ marker }) {
  return (
    <div className={marker.active ? "marker active" : "marker"}
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/${marker.imgName}.png')`,
      }}
    >
    </div>
  );
}