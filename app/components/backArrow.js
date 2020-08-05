import PropTypes from 'prop-types'
import { Component } from "react"
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
        /** The index of the current section */
        sectionIndex: PropTypes.number.isRequired
    }

    getPreviousSection = sectionIndex => `section${--sectionIndex}`

    /**
     * Renders back arrow
     * 
     * @returns The back arrow component
     */
    render() {
        let { sectionIndex } = this.props
        return (
            <>
                {
                    sectionIndex > 1 && sectionIndex < 5 ? 
                        <Link
                            className={styles.arrow}
                            activeClass="active"
                            to={this.getPreviousSection(sectionIndex)}
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
}