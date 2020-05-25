import { Component } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faChevronDown, faEnvelope, faGithub, fab, faInfoCircle)

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

    render() {
        return (
            <>
                {
                    this.nextPageMap[this.props.type] ? 
                        <a className={styles.arrowIcon} onClick={this.handleClick.bind(this, this.nextPageMap[this.props.type], false)}>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </a>
                    : null
                }
            </>
        )
    }
}