
import './App.css';
import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div>
//      <h1>This is a news app!
//        And i will practice my react course by building this news app.
//      </h1>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div className=''>

        <Navbar />
        <News />
        
      </div>
    )
  }
}

