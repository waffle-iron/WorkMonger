import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout       from './pages/Layout'
import GenericError from './pages/Error'
import NotFound     from './pages/NotFound'
import Home         from './pages/Home'

export default
(
	<Route path="/" component={ Layout }>
		<IndexRoute component={ Home }/>
		<Route path="entry" component={ Home }/>
		<Route path="error" component={ GenericError }/>
		<Route path="*" component={ NotFound } status={ 404 }/>
	</Route>
)