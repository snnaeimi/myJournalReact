export default function Card(props) {
  return (
    <div>
      <img src={props.image} alt="an image of journal" />
      <div>
        <span> {props.location}</span>
        <span>{props.map}</span>
      </div>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.description}</p>
    </div>
  );
}
