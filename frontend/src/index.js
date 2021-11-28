import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
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

    const {news} = this.state

    return(
  <>
    <Header/>
    <NewsList
      news={news}
    />
  </>
  )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

