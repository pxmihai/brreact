import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {

    render(){

        return (
            <div className="App">
                <header className="App-header">
                    <div id="wrapper">
                        <div id="tl">tl
                            <Button/>
                        </div>
                        <div id="tr">tr<Button/></div>
                        <div id="bl">
                            <div id="f1">1<Button/></div>
                            <div id="f2">
                                <div id="le">le<Button/></div>
                                <div id="ri">ri<Button/></div>
                            </div>
                            <div id="f3">3<Button/></div>
                            <div id="f4">4<Button/></div>
                        </div>
                        <div id="br">
                            <div id="one"  >one<Button/></div>
                            <div id="two"  >two<Button/></div>
                            <div id="three">three<Button/></div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
class Button extends React.Component{

        render(){
            return(
                <button type="button">Click Me!</button>
            )
        }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//magic ++!111
