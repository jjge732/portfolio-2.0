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
        this.props = props
        this.state = {type: props.type}
        this.handleClick = props.arrowClick
    }

    render() {
        return (
            <div className={styles.grid}>
                {this.props.type.includes('landing') ?
                    // <Link href="/links">
                    //     <a className={styles.arrowIcon}>
                    //         <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    //     </a>
                    // </Link>
                    <button onClick={this.handleClick}>
                        <a className={styles.arrowIcon}>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </a>
                    </button>
                    :
                    <a className={"card" + styles.iconLinks}  href="https://github.com/jjge732">
                        <img src="/github-icon.png" height="80px"/>
                    </a>
                }
            </div>
        )
    }
}