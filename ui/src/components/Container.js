import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import BackArrow from './BackArrow'
import Grid from './Grid'
import ForwardArrow from './ForwardArrow'
import Heading from './Heading'
import Info from './Info'
import styles from '../styles/container-utils.module.css'
  
/**
 * Represents all of the content in a given section that is displayed to the user.
 * 
 * @component
 */
export default function Container(props) {
    // static propTypes = {
    //     /** The name of the given contained section */
    //    sectionName: PropTypes.string.isRequired,
    //     /** The index of the given contained section */
    //    sectionIndex: PropTypes.number.isRequired
    // }

    /**
     * Renders all the "page" content
     * 
     * @returns The components for the app
     */
    const { sectionName, sectionIndex } = props;
    return (
        <main 
            className={styles.container}
            id={`section${sectionIndex}`}
        >
            <BackArrow sectionIndex={sectionIndex}/>
            <Heading sectionName={sectionName}/>
            <Info sectionName={sectionName}/>
            <Grid sectionName={sectionName}/>
            <ForwardArrow sectionIndex={sectionIndex}/>
        </main>
    )
}