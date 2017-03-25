import React, { Component, PropTypes } from 'react'
import { flat as style } from 'react-styling'
import { Title } from 'react-isomorphic-render'

import husky from '../../assets/images/husky.jpg'

export default class Page extends Component {
    render() {
        const markup =
            (
                <section className="content">
				<Title>Home</Title>

				<div className={"row"}>
								<h2 style={ styles.header }>
					Find the <span style={styles.em}> perfect job, </span> or the <span style={styles.em}>perfect hire</span>
				</h2>
				<div className={"circle"}>
					<h2 className={"titleLink"}>Work</h2>
					<h5 style={styles.subText}>For <span style={styles.em}>Job Seekers</span></h5>
				</div>
				<div className={"spacerHorizontal"}></div>
				<div className={"circle"}>
					<h2 className={"titleLink"}>Hire</h2>
					<h5 style={styles.subText}>For <span style={styles.em}>Employers</span></h5>
				</div>
				</div>
			</section>
            )

        return markup
    }
}

const styles = style `
	header
		text-align: center
		font-weight: 200
		color: #808080

	em
		color: #4C4C4C
		font-weight: 600

	subText
		display: inline-block
		font-weight: 200

	image
		display: block

		margin-left  : auto
		margin-right : auto

		border-width : 1px
		border-style : solid
		border-color : #7f7f7f

		border-radius : 0.5em
`
