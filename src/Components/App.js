import './App.css';
import News from './News';
import { Component } from "react";
import Sidenews from "./Sidenews";

class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=wsj.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=wsj.com'
      }
    }
  }
  render ()
  {
    return (
        <div className='App'>
          <header className="App-header">
            <h1 className='title'>News feed</h1>
          </header>
          <News news={this.state.news1} />
          <News news={this.state.news2} />
          <hr/>
          <Sidenews news={this.state.news3} />
        </div>
    )
  }
}

// function App ()
// {
//   return (
//       <div className="App">
//         <header className="App-header">
//         <h1 className='title'>News feed</h1>
//         <News/>
//       </header>
//     </div>
//   );
// }

export default App;
