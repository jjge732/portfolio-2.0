import { Component } from "react"

import styles from '../styles/info-utils.module.css'

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {type: props.type}
    }

    render() {
        return <div className={styles.info}>This site will be updated regularly, check back soon!</div>
    }
}