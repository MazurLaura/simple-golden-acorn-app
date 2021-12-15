import './App.css';
//import { checkPropTypes } from 'prop-types';
import PropTypes from 'prop-types';
//import { useState } from 'react';
import Button from './Button';
import Display from './Display';
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp';


function App() {
  /* Ez át lett téve a class-osba

  const [acorn, setAcorn] = useState(0);

  function buyAcorn(props) {
    setAcorn(acorn + 1);
  }

  function eatAcorn(props) {
    if (acorn > 0) {
      setAcorn(acorn - 1);
    } else {
      setAcorn(acorn);
    }
  }
  */

  return (
    <div className="App">
      <SimpleGoldenAcornApp />

      {/*} Ez is át lett téve a class-osba
      <Button buttonClick={buyAcorn} name='Buy one' />
      <Display>
        <p>{acorn}</p>
      </Display>
      <Button buttonClick={eatAcorn} name='Eat one' />
      */}
    </div>
  );
}

Button.propTypes = {
  function: PropTypes.func,
  name: PropTypes.string,
};

Display.propTypes = {
  amount: PropTypes.number,
};


export default App;



//__________________________________________________________________________

//Candy Game Mátéval, ez a function-ös megoldás:

/*
import { useState } from 'react';
import Info from './Info';


function App(props) {
  const [candies, setCandies] = useState(0);
  const [lollipops, setLollipops] = useState(0);

  function buyCandy() {
    setCandies(candies + 10);
  }

  function  buyLollipop() {
    if (candies >= 100) {
      setLollipops(lollipops + 1);
      setCandies(candies - 100);
    }
  }


  return (
    <div className="App">
      <Info candiesAmount ={candies} lollipopsAmount={lollipops} />

      <h3>App-on szereplő P tagek:</h3>
      <p>Candies: {candies}</p>
      <p>Lollipops: {lollipops}</p>
      <button onClick={buyCandy}>Buy candy</button>
      <button onClick={buyLollipop}>Buy Lollipop</button>
      <button>Make it rain</button>
    </div>
  );
}


export default App;


//Info.js-ben:

function Info(props) {
  

  return (
    <div>
      <p>Candies: {props.candiesAmount}</p>
      <p>Lollipops: {props.lollipopsAmount}</p>
    </div>
  )
}

export default Info;


//ChildrenInfo.js-ben, ez meg egy children-ös opció megoldásra:

function  ChildrenInfo(props) {
  
  return (
    <div>
      {props.children}
    </div>
  )
}


//ClassApp.js-ben, ugyanaz, csak a class-os megoldás:

import React from 'react';

class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candies: 0,
      lollipops: 0,
    }
  }

  handleClick = () => {
    this.setState({
      candies: this.state.candies + 1,
      lollipops: this.state.lollipops,
    })
  }

  render() {
    return (
      <div>
        <p>Candies: {this.state.candies}</p>
        <p>Lollipops: {this.state.lollipops}</p>
        <button onClick={this.handleClick}>Buy candy</button>
      </div>
    );
  }
}

export default ClassApp;


//index.js-ben

*/

