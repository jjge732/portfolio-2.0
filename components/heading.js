import cn from 'classnames'
import styles from '../styles/heading-utils.module.css'
import { Component } from 'react'

export default class Heading extends Component {
    constructor (props) {
        super(props);
        this.state = {}
        this.state.text = props.text
        this.state.type = props.type
    }
    render() {
        return <h1
            className={cn({
                'title': true,
                [styles.landing]: this.state.type === 'landing',
                [styles.links]: this.state.type === 'links'
            })}
        >
            {this.state.text}
        </h1>
    }
}