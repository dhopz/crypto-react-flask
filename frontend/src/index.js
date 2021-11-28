import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import Header from './components/header'
import NewsList from './components/news_list';

class App extends Component {

  state = {
    news:JSON
  }

  render() {    

    return(
  <>
    <h1>Hello</h1>
    <h2>Hello number 2</h2>
    <Header/>
    <NewsList
      news={this.state.news}
    />
  </>
  )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

