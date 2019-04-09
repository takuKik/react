import React from 'react';

//class App extends Component {
  //render() {
    // const greeting = "Hi,Tom!";
     //const dom = <h1>{greeting}</h1>;
    //return dom;
  //}
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
