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

    onArrowClick = () => {
        setTimeout(() => {this.setState({
            isTransitioning: false,
            type: 'links'
        })}, 1300);
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
                        { this.state.type.includes('links') ?
                            <Info/> : <></> 
                        }
                    <Grid type={this.state.type} arrowClick={this.onArrowClick}/>
                </main>
                <style jsx>{`
                    main {
                        padding: 5rem 0;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: #CEF2ED;
                    }

                    .title,
                    .description {
                        text-align: center;
                    }

                    .description {
                        line-height: 1.5;
                        font-size: 1.5rem;
                    }

                    code {
                        padding: 0.75rem;
                        font-size: 1.1rem;
                        font-size: 45px;
                        color: #A59D9D;
                        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                    }

                    .card {
                        margin: 1rem;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        text-align: left;
                        color: inherit;
                        text-decoration: none;
                        transition: color 0.15s ease, border-color 0.15s ease;
                    }

                    .card p {
                        margin: 0;
                        font-size: 1.25rem;
                        line-height: 1.5;
                    }

                    .logo {
                        height: 1em;
                    }
                `}</style>

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