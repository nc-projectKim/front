import ReactDOM from 'react-dom';
import React from 'react';
// import reducer from './reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
// import 'bootstrap/dist/css/bootstrap.css';

// const store = createStore(reducer);

ReactDOM.render(
    <div>
   {/*<Provider store={store}>*/}
        <App />
    {/*</Provider>*/}
    </div>,
    document.getElementById('root')
);