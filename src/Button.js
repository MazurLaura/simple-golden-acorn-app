
function Button(props) {

 
  return (
    <div className="App">
      <button onClick={props.buttonClick}>{props.name}</button>
    </div>
  );
}

export default Button;