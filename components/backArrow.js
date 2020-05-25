import { Component } from "react"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faChevronDown, faEnvelope)

/**
 * Represents the arrow to return to the previously displayed content
 * 
 * @component
 */
export default class backArrow extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.nextPageMap = {
            recentWork: "landing",
            links: "recentWork",
            contact: "links"
        }
    }
    static propTypes = {
        /** The shorthand name for the content that user is viewing (the "page" the viewer is on) */
        endpoint: PropTypes.string
    }

    /**
     * Renders back arrow
     * 
     * @returns The HTML for the back arrow
     */
    render() {
        return (
            <>
                {
                    this.nextPageMap[this.props.endpoint] ? 
                        <a className={styles.arrowIcon} onClick={this.props.handleClick.bind(this, this.nextPageMap[this.props.endpoint], true)}>
                            <FontAwesomeIcon icon={faChevronDown} rotation={180}></FontAwesomeIcon>
                        </a>
                    : null
                }
            </>
        )
    }
}