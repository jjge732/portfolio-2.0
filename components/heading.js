import { Component } from 'react'

import styles from '../styles/heading-utils.module.css'

export default class Heading extends Component {
    constructor (props) {
        super(props);
        this.props = props
        this.state = {type: props.type}
        this.textMap = {
            contact: 'Thanks for visiting!',
            landing: 'Welcome',
            links: 'More content on the way!',
            recentWork: 'What I\'ve been up to lately:'
        }
    }

    render() {
        return (
            <h1 className={styles.heading}>
                {this.textMap[this.props.type]}
            </h1>
        )
    }
}