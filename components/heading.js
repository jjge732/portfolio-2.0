import { Component } from 'react'

import cn from 'classnames'

import styles from '../styles/heading-utils.module.css'

export default class Heading extends Component {
    constructor (props) {
        super(props);

        this.props = props

        this.textMap = {
            landing: 'Welcome',
            links: 'Thanks for coming!'
        }

        this.state = {type: props.type}
    }
    // componentDidUpdate= () => {
    //     this.setState({type: this.state.type + " unmounting"})
    // } 

    render() {
        return (
            <h1 className={cn({
                'title': true,
                [styles.landing]: this.props.type.includes('landing'),
                [styles.links]: this.props.type.includes('links'),
                [styles.unmounting]: this.props.type.includes('unmounting')
            })}>
                {this.textMap[this.props.type]}
            </h1>
        )
    }
}