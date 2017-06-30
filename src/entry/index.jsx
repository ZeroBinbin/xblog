import ReactDOM from 'react-dom';
import React    from 'react' ;
import Router    from '../route/index.jsx';
import { hashHistory } from 'react-router';
import './index.less';

ReactDOM.render(<Router history={ hashHistory } />, document.getElementById('root'));