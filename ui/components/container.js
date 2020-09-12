import cn from 'classnames'
import PropTypes from 'prop-types'
import { Component } from 'react'

import BackArrow from './backArrow'
import Grid from './grid'
import ForwardArrow from './forwardArrow'
import Heading from './heading'
import Info from './info'
import styles from '../styles/container-utils.module.css'
  
/**
 * Represents all of the content in a given section that is displayed to the user.
 * 
 * @component
 */
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            initialLoad: true,
            isTransitioning: false,
        }
    }

    static propTypes = {
        /** The name of the given contained section */
       sectionName: PropTypes.string.isRequired,
        /** The index of the given contained section */
       sectionIndex: PropTypes.number.isRequired
    }

    /**
     * Renders all the "page" content
     * 
     * @returns The components for the app
     */
    render() {
        const { sectionName, sectionIndex } = this.props;
        return(
            // Leverages the classnames library to add names of classes to the container based on state 
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
    };
}