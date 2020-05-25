import { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/heading-utils.module.css'

/**
 * Represents the heading content
 * 
 * @component
 */
export default class Heading extends Component {
    constructor (props) {
        super(props);
        this.props = props
        this.textMap = {
            contact: 'Thanks for visiting!',
            landing: 'Welcome',
            links: 'More content on the way!',
            recentWork: 'What I\'ve been up to lately:'
        }
    }

    static propTypes = {
        /** The shorthand name for the content that user is viewing (the "page" the viewer is on) */
        endpoint: PropTypes.string
    }

    /**
     * Renders heading content
     * 
     * @returns The HTML for the heading
     */
    render() {
        return (
            <h1 className={styles.heading}>
                {this.textMap[this.props.endpoint]}
            </h1>
        )
    }
}