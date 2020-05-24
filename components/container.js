import { Component } from "react"
import cn from 'classnames'

import Grid from '../components/grid'
import Heading from '../components/heading'
import Info from '../components/info'
import styles from '../styles/container-utils.module.css'

export default class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTransitioning: false,
            type: props.type
        }
    }
    
    switchContainer = name => {
        setTimeout(() => {this.setState({
            isTransitioning: false,
            type: name
        })}, 800);
        this.setState({isTransitioning: true})
    }

    render() {
        return(
            <div className={cn({
                [styles.container]: true,
                [styles.links]: this.state.type.includes('links'),
                [styles.transitioning]: this.state.isTransitioning
            })}>
                <main className="content">
                    <Heading type={this.state.type}/>
                        {this.state.type.includes('links') ?
                            <Info/> : <></> 
                        }
                    <Grid type={this.state.type} handleClick={this.switchContainer}/>
                </main>
                <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
                `}</style>
            </div>
        )
    };
}