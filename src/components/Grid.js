import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faEnvelope, faFile, faGithub, fab)

/**
 * Represents a grid of items to display to the user.
 * 
 * @component
 */
export default function Grid(props) {
    const elementsMap = {
        contact:
            <a 
                className={styles.iconLinks} 
                href="mailto:jjge732@gmail.com?subject=Portfolio Reference&body=Hey John,%0d%0a%0d%0aI saw your portfolio and wanted to reach out!" 
            >
                <FontAwesomeIcon icon={faEnvelope} color='#CEF2ED' size="3x"></FontAwesomeIcon>
            </a>,
        links:
            <>
                <a className={styles.iconLinks} href="https://github.com/jjge732">
                    <FontAwesomeIcon icon={faGithub} color='#CEF2ED' size="4x"></FontAwesomeIcon>
                </a>
            </>
    }

    // static propTypes = {
    //     /** The shorthand name for the content that user is viewing */
    //     sectionName: PropTypes.string.isRequired
    // }

    /**
     * Renders the content of the grid for the given "page"
     * 
     * @returns The HTML for the grid
     */
    return (
        <>
            <div className={styles.grid}>
                {elementsMap[props.sectionName]}
            </div>
        </>
    )
}