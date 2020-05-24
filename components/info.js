import { Component } from "react"

import styles from '../styles/info-utils.module.css'

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.elementsMap = {
            contact: <div className={styles.info}>Send an email to <a href='mailto:jjge732@gmail.com'>jjge732@gmail.com</a> to get in touch!</div>,
            links: <div className={styles.info}>This site will be updated regularly, come back to see more of my work or check out my <a href="https://github.com/jjge732/fractal-machine">github</a>!</div>,
            recentWork:
                <a className={styles.info} href="https://github.com/jjge732/fractal-machine">
                    <img src="/fractal_image.png" width="350px" alt="link to fractal machine github"/>
                </a>
        }
    }

    render() {
        return <>
            {this.elementsMap[this.props.type]}
        </>
    }
}