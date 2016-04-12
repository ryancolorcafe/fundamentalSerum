/*
  Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import autobind from 'autobind-decorator';

/*
  Components
*/
import App from './components/App';
import jQuery from './jQuery';


@autobind
class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav>
            <ul>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="cart-icon">
        </div>
        <div className="home">
        </div>
    </header>
    )
  }

}

class Footer extends React.Component {

  render() {
    return (
      <div>
        <div className="push"></div>
        <footer className="push"></footer>
      </div>
    )
  }

}

/*
  Routes
*/
var routes = (
    <Router history={createHistory()}>
      <Route path="/" component={App} />
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
ReactDOM.render(<Navigation />, document.querySelector('#nav'));
ReactDOM.render(<Footer />, document.querySelector('#footer'));
