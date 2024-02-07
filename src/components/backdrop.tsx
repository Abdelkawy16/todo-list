export default function Backdrop(props:props){
    return <div className="backdrop" onClick={props.onCancel}/>
}

type props = {
    onCancel?: () => void;
  };