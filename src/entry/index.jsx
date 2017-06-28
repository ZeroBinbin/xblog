import ReactDOM from 'react-dom';
import React    from 'react' ;
import Router    from '../route/index.jsx';
import { hashHistory } from 'react-router';

ReactDOM.render(<Router history={ hashHistory } />, document.getElementById('root'));