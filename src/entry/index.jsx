import ReactDOM from 'react-dom';
import React    from 'react' ;
import Router    from '../route/index.jsx';
import { browserHistory } from 'react-router';
import './index.less';

ReactDOM.render(<Router history={ browserHistory } />, document.getElementById('root'));