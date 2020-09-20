import {applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
const composedMiddlewares = applyMiddleware(logger, thunk);
export default composedMiddlewares;