export default function Joke(props) {
  return (
    <div>
      <p>{props.num}</p>
      <h3>{props.title}</h3>
      <p className="setup">setup : {props.setup}</p>
      {props.punchline && <p className="punchline">punchline : {props.punchline}</p>}
      {/* or */}
      {/* <p style={{display: props.punchline ? "block" : "none"}} className="punchline">punchline : {props.punchline}</p> */}
    </div>
  );
}
