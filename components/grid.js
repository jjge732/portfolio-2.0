import { Component } from "react"
import Link from 'next/link'

import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/grid-utils.module.css'

library.add(faChevronDown)

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.type = props.type
    }

    render() {
        return (
            <div className={styles.grid}>
                { this.state.type.includes('landing') ?
                    <Link href="/links">
                        <a className={styles.arrowIcon}>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </a>
                    </Link>
                    :
                    <a className={"card" + styles.iconLinks}  href="https://github.com/jjge732">
                        <img src="/github-icon.png" height="80px"/>
                    </a>
                }
            </div>
        )
    }
}