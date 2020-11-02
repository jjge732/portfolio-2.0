import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/heading-utils.module.css'

/**
 * Represents the heading content
 * 
 * @component
 */
export default function Heading(props) {
    // static propTypes = {
    //     /** The shorthand name for the content that user is viewing */
    //     sectionName: PropTypes.string.isRequired
    // }
    const textMap = {
        contact: 'Thanks for visiting!',
        landing: 'Welcome',
        links: 'Want to see more?',
        objective: 'I\'m John Eastwood,',
        recentWork: 'What I\'ve been up to lately:'
    }

    /**
     * Renders heading content
     * 
     * @returns The HTML for the heading
     */
    return (
        <h1 className={styles.heading}>
            {textMap[props.sectionName]}
        </h1>
    )
}