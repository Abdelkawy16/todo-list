export default function Todo(props:props) {

  function handleDelete(): void {

  }

  return (
    <div className="card">
      <h2>{props.title?props.title:"Title"}</h2>
      <h4>{props.info?props.info:"No info!"}</h4>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

type props = {
  title?: string;
  info?: string;
};
