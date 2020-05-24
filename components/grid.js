import { Component } from "react"
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faChevronDown, faEnvelope, faGithub, fab)

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {type: props.type}
        this.handleClick = props.handleClick
    }

    render() {
        return (
            <div className={styles.grid}>
                {this.props.type.includes('landing') ?
                    <a className={styles.arrowIcon} onClick={this.handleClick.bind(this, "links")}>
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </a>
                    :
                    <>
                        <a className={styles.iconLinks} href="https://github.com/jjge732">
                            <FontAwesomeIcon icon={faGithub}color='#CEF2ED' size="4x"></FontAwesomeIcon>
                        </a>
                        <Link href="/contact">
                            <a className={styles.iconLinks}>
                                <FontAwesomeIcon icon={faEnvelope} color="#CEF2ED" size="4x"></FontAwesomeIcon>
                            </a>
                        </Link>
                    </>
                }
            </div>
        )
    }
}