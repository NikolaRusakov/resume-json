// import 'core-js/es6/map';
// import 'core-js/es6/set';
// import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from "./pages/Root";
import './styles.scss';
// import 'font-awesome/css/font-awesome.css';
import {library} from '@fortawesome/fontawesome-svg-core';
// import * as awesome from '@fortawesome/free-solid-svg-icons';
import * as awesome from '@fortawesome/free-brands-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(...awesome);
library.add(awesome.faFacebookMessenger, fab);
// import Root from "./pages/Root";

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
