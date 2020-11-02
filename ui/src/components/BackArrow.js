import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/arrow-utils.module.css'

library.add(faChevronDown, faEnvelope)

/**
 * Represents the arrow to return to the previously displayed content
 * 
 * @component
 */
export default function BackArrow(props){
    // static propTypes = {
    //     /** The index of the current section */
    //     sectionIndex: PropTypes.number.isRequired
    // }

    const getPreviousSection = sectionIndex => `section${--sectionIndex}`;

    /**
     * Renders back arrow
     * 
     * @returns The back arrow component
     */
    let { sectionIndex } = props
    return (
        <>
            {
                sectionIndex > 0 && sectionIndex < 5 ? 
                    <Link
                        className={styles.arrow}
                        activeClass="active"
                        to={getPreviousSection(sectionIndex)}
                        spy={true}
                        smooth={true}
                        duration={750}
                    >
                        <FontAwesomeIcon icon={faChevronDown} rotation={180}></FontAwesomeIcon>
                    </Link>
                : null
            }
        </>
    )
}