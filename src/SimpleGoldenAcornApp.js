import Button from './Button';
import Display from './Display';
import { useState, useEffect } from 'react';


function SimpleGoldenAcornApp() {
  const[acorn, setAcorn] = useState(0);

  function buyAcorn() {
    setAcorn(acorn + 1);
  }

  function eatAcorn() {
    if (acorn > 0) {
      setAcorn(acorn - 1);
    } else {
      setAcorn(acorn);
    }
  }

  const keyPressFunction = (e) => {
    if (e.key === 'ArrowUp') {
      buyAcorn();
    } else if (e.key === 'ArrowDown') {
      eatAcorn();
    }
  }

  useEffect(() => {
    document.onkeyup = keyPressFunction;
  })

  return (
    <div>
      <Button buttonClick={buyAcorn} name='Buy one' />
      <Display>
        <p>{acorn}</p>
      </Display>
      <Button buttonClick={eatAcorn} name='Eat one' />
    </div>
  )
}

/* Ez lenne a class-os megoldás:

class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acorn: 0,
    }
  }


  buyAcorn = () => {
    this.setState({
      acorn: this.state.acorn + 1,
    })
  }

  eatAcorn = () => {
    if(this.state.acorn > 0) {
      this.setState({
        acorn: this.state.acorn - 1,
      })
    }  
  }

  render() {
    return (
      <div>
        <button onClick={this.buyAcorn}>Buy One</button>
        <p>{this.state.acorn}</p>
        <button onClick={this.eatAcorn}>Eat One</button>
      </div>
    );
  }
}

*/

export default SimpleGoldenAcornApp;
