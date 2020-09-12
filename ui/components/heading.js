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
            links: 'Want to see more?',
            objective: 'I\'m John Eastwood,',
            recentWork: 'What I\'ve been up to lately:'
        }
    }

    static propTypes = {
        /** The shorthand name for the content that user is viewing */
        sectionName: PropTypes.string.isRequired
    }

    /**
     * Renders heading content
     * 
     * @returns The HTML for the heading
     */
    render() {
        return (
            <h1 className={styles.heading}>
                {this.textMap[this.props.sectionName]}
            </h1>
        )
    }
}