import { Component } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faChevronDown, faEnvelope, faGithub, fab)

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.handleClick = props.handleClick
        this.elementsMap = {
            contact:
                <a className={styles.iconLinks} href="mailto:jjge732@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope}color='#CEF2ED' size="3x"></FontAwesomeIcon>
                </a>,
            links:
                <a className={styles.iconLinks} href="https://github.com/jjge732">
                    <FontAwesomeIcon icon={faGithub}color='#CEF2ED' size="4x"></FontAwesomeIcon>
                </a>
        }
    }

    render() {
        return (
            <>
                <div className={styles.grid}>
                    {this.elementsMap[this.props.type]}
                </div>
            </>
        )
    }
}