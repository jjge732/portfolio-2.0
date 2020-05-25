import { Component } from "react"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faChevronDown, faEnvelope, faGithub, fab, faInfoCircle)

/**
 * Represents the arrow to takes the user to more content
 * 
 * @component
 */
export default class ForwardArrow extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.handleClick = props.handleClick
        this.nextPageMap = {
            landing: "recentWork",
            recentWork: "links",
            links: "contact"
        }
    }

    static propTypes = {
        /** The shorthand name for the content that user is viewing (the "page" the viewer is on) */
        endpoint: PropTypes.string,
        /** 
         * A method that handles the arrow click and returns the user to the previous  or next "page"
         * 
         * @param {string} endpointName The "page" the user will reach by clicking this arrow
         * @param {string} isBack Whether this arrow sends the user to the next or previous content
         */
        handleClick: PropTypes.PropTypes.func.isRequired
    }

    /**
     * Renders the forward arrow
     * 
     * @returns The HTML for the forward arrow
     */
    render() {
        return (
            <>
                {
                    this.nextPageMap[this.props.endpoint] ? 
                        <a className={styles.arrowIcon} onClick={this.handleClick.bind(this, this.nextPageMap[this.props.endpoint], false)}>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </a>
                    : null
                }
            </>
        )
    }
}