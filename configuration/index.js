import merge from 'lodash/merge'
import fs from 'fs'

import default_configuration from './configuration.defaults'
import development_configuration from './configuration.development'
import production_configuration from './configuration.production'

const configuration = merge({}, default_configuration)

if (process.env.NODE_ENV === 'production')
{
	merge(configuration, production_configuration)
}
else
{
	merge(configuration, development_configuration)
}

// For services like Amazon Elastic Compute Cloud and Heroku
if (process.env.PORT)
{
	configuration.web.port = process.env.PORT
}

// For passing custom configuration via an environment variable.
// For frameworks like Docker.
// E.g. `CONFIGURATION="{ \"key\": \"value\" }" npm start`.
if (process.env.CONFIGURATION)
{
	try
	{
		merge(configuration, JSON.parse(process.env.CONFIGURATION))
	}
	catch (error)
	{
		console.error(error)
	}
}

export default configuration