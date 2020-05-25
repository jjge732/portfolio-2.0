import { Component } from 'react'
import PropTypes from 'prop-types'

import cn from 'classnames'

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
        this.state = {
            initialLoad: true,
            isTransitioning: false
        }
    }

    static propTypes = {
        /** 
         * The router component that is used to "shallowly" change the url
         *      Allows for the user to return to the last viewed content ("page")
         *      when the browser back button is clicked
        */
        router: PropTypes.object.isRequired
    }

    /** 
     * Handles arrow clicks to allow for navigation on the page
     * 
     * @param {string} endpointName The "page" the user will reach by clicking this arrow
     * @param {string} isBack Whether this arrow sends the user to the next or previous content
     */
    componentDidMount = () => {
        /* 
        * Sets the default query parameter to landing so that this parameter can be used to load all "pages."
        *       Allows for better rendering of content when a user uses the browser back button.
        */
        setTimeout(() => {
            if (!this.props.router.query.endpoint)
                this.props.router.push(`/?endpoint=landing`);
        }, 300);
        
    }

    /** 
     * Handles the arrow click and returns the user to the previous or next "page"
     * 
     * @param {string} endpointName The "page" the user will reach by clicking this arrow
     * @param {string} isBack Whether this arrow sends the user to the next or previous content
     */
    switchContainer = (endpointName, isBack=false) => {
        setTimeout(() => {
            this.setState({ isBack: isBack, isTransitioning: false });
            this.props.router.push(`/?endpoint=${endpointName}`);
        }, 800);
        this.setState({
            initialLoad: false,
            isBack: isBack,
            isTransitioning: true
        })
    }

    /**
     * Renders all the "page" content
     * 
     * @returns The HTML for the app
     */
    render() {
        const { endpoint } = this.props.router.query;
        const { isBack, initialLoad, isTransitioning } = this.state;
        return(
            // Leverages the classnames library to allow for simple CSS transitions between pages.
            <main className={cn({
                [styles.container]: true,
                [styles.initialLoad]: initialLoad,
                [styles.reverseTransitionIn]: !initialLoad && isBack,
                [styles.reverseTransitionOut]: isTransitioning && isBack,
                [styles.transitioningIn]: !initialLoad && !isBack,
                [styles.transitioningOut]: isTransitioning && !isBack,
            })}>
                <BackArrow endpoint={endpoint} handleClick={this.switchContainer}/>
                <Heading endpoint={endpoint}/>
                <Info endpoint={endpoint}/>
                <Grid endpoint={endpoint} handleClick={this.switchContainer}/>
                <ForwardArrow endpoint={endpoint} handleClick={this.switchContainer}/>
            </main>
        )
    };
}