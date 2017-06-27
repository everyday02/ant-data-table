import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import BasicExample from './example/BasicExample';
// import Demo02 from './src/Demo02';

class App extends Component {
  render() {
    return (
      <div>
        <BasicExample />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
