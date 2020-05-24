import { Component } from "react"

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
                    <a className={styles.arrowIcon} onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </a>
                    :
                    <a className={styles.iconLinks}  href="https://github.com/jjge732">
                        <img src="/github-icon.png" height="80px"/>
                    </a>
                }
            </div>
        )
    }
}