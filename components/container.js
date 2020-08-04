import cn from 'classnames'
import PropTypes from 'prop-types'
import { Component } from 'react'

import BackArrow from '../components/backArrow'
import Grid from '../components/grid'
import ForwardArrow from '../components/forwardArrow'
import Heading from '../components/heading'
import Info from '../components/info'
import styles from '../styles/container-utils.module.css'
  
/**
 * Represents all of the content displayed to the user.
 * 
 * @component
 */
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        let {section} = props
        let nextSection = this.getNextSection(section)
        console.log(nextSection)
        this.state = {
            initialLoad: true,
            isTransitioning: false,
        }
        this.pageMap = [
            {
                landing: "recentWork",
                recentWork: "links",
                links: "contact"
            },
            {
                recentWork: "landing",
                links: "recentWork",
                contact: "links"
            }
        ]
    }

    getPreviousSection = section => `section${--section}`

    getNextSection = section => `section${++section}`

    static propTypes = {
        /** 
         * The router component that is used to "shallowly" change the url
         *      Allows for the user to return to the last viewed content ("page")
         *      when the browser back button is clicked
        */
       endpoint: PropTypes.string.isRequired
    }

    /**
     * Renders all the "page" content
     * 
     * @returns The components for the app
     */
    render() {
        const { endpoint, section } = this.props;
        return(
            // Leverages the classnames library to allow for simple CSS transitions between pages.
            <main 
                className={cn({
                    [styles.container]: true,
                    [styles.initialLoad]: this.state.initialLoad,
                })}
                id={`section${section}`}
            >
                <BackArrow endpoint={endpoint} previousSection={this.getPreviousSection(section)} pageMap={this.pageMap[1]}/>
                <Heading endpoint={endpoint}/>
                <Info endpoint={endpoint}/>
                <Grid endpoint={endpoint}/>
                <ForwardArrow endpoint={endpoint} nextSection={this.getNextSection(section)} pageMap={this.pageMap[0]}/>
            </main>
        )
    };
}