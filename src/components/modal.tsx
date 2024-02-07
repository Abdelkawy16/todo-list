export default function Modal(props:props) {
  function cancelHandler(event: any): void {
    props.onCancel();
  }
  
  function confirmHandler(event: any): void {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Delete {props.title}, Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

type props = {
  title: string;
  onCancel:() => void;
  onConfirm:() => void;
};
