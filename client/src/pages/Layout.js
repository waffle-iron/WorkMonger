import React, { Component, PropTypes } from 'react'
import { Title, Meta } from 'react-isomorphic-render'

import Menu from '../components/Menu'
import Preloading from '../components/Preloading'

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props

        // Html document metadata

        const title = 'WorkMonger'
        const description = 'Unlock the Workplace'

        const meta = [
            // <meta charset="utf-8"/>
            { charset: 'utf-8' },

            // <meta name="..." content="..."/>
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },

            // <meta property="..." content="..."/>
            { property: 'og:title', content: 'WorkMonger: Unlock the Workplace' },
            { property: 'og:description', content: 'Our mission is to transform the education sector by revolutionizing the way education organizations and professionals connect for meaningful work.' },
            { property: 'og:locale', content: 'en_US' }
        ]

        const menu_items = [{
            name: 'Home',
            link: '/'
        }]

        const markup =
            (
                <div className="content">
				<Title>{ title }</Title>
				<Meta>{ meta }</Meta>
				<Preloading/>
				<div className={"main-header"}>
				<nav>
					<Menu items={ menu_items }/>
				</nav>
				</div>
				{ children }
				<footer></footer>
			</div>
            )

        return markup
    }
}
