import { Component } from "react"
import PropTypes from 'prop-types'

import styles from '../styles/info-utils.module.css'

/**
 * Represents the info section of the "page"
 * 
 * @component
 */
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.elementsMap = {
            contact: 
                <div className={styles.info}>
                    Send an email to <a href="mailto:jjge732@gmail.com?subject=Portfolio Reference&body=Hey John,%0d%0a%0d%0aI saw your portfolio and wanted to reach out!">
                        jjge732@gmail.com
                    </a> to get in touch!
                </div>,
            links: <div className={styles.info}>Check out my resume or <a href="https://github.com/jjge732/fractal-machine">github</a>!</div>,
            recentWork:
                <a className={styles.info} href="https://github.com/jjge732/OneStopNews">
                    <img src="/OneStopNews.png" width="300px" alt="link to OneStopNews github"/>
                </a>
        }
    }

    static propTypes = {
        /** The shorthand name for the content that user is viewing */
        sectionName: PropTypes.string.isRequired
    }

    /**
     * Renders the "page" info
     * 
     * @returns The HTML for the info
     */
    render() {
        return <>
            {this.elementsMap[this.props.sectionName]}
        </>
    }
}