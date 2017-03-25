import React, { Component, PropTypes } from 'react'
import { flat as style } from 'react-styling'
import { Title } from 'react-isomorphic-render'

export default class Page extends Component
{
	render()
	{
		const markup = 
		(
			<section className="content">
				<Title>Error</Title>

				<h1 style={ styles.header }>
					Page Not Found
				</h1>
			</section>
		)

		return markup
	}
}

const styles = style
`
	header
		text-align: center
`