import PropTypes from 'prop-types'
import { Component } from "react"
import { Link } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/arrow-utils.module.css'

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
    }

    static propTypes = {
        /** The index of the section associated with this arrow */
        sectionIndex: PropTypes.number.isRequired
    }

    getNextSection = sectionIndex => `section${++sectionIndex}`

    /**
     * Renders the forward arrow
     * 
     * @returns The forward arrow component
     */
    render() {
        let { sectionIndex } = this.props
        return (
            <>
                {
                    sectionIndex > -1 && sectionIndex < 4 ? 
                        <Link 
                            className={styles.arrow}
                            activeClass="active"
                            to={this.getNextSection(sectionIndex)}
                            spy={true}
                            smooth={true}
                            duration={750}
                        >
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </Link>
                    : null
                }
            </>
        )
    }
}