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
    // componentDidUpdate= () => {
    //     this.setState({type: this.state.type + " unmounting"})
    // } 

    render() {
        return <h1
            className={cn({
                'title': true,
                [styles.landing]: this.state.type.includes('landing'),
                [styles.links]: this.state.type.includes('links'),
                [styles.unmounting]: this.state.type.includes('unmounting')
            })}
        >
            {this.state.text}
        </h1>
    }
}