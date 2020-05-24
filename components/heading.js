import { Component } from 'react'

import cn from 'classnames'

import styles from '../styles/heading-utils.module.css'

export default class Heading extends Component {
    constructor (props) {
        super(props);
        this.props = props
        this.state = {type: props.type}
        this.textMap = {
            contact: 'Thanks for coming!',
            landing: 'Welcome',
            links: 'More coming soon!',
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