import { Component } from 'react'

import cn from 'classnames'

import Grid from '../components/grid'
import Heading from '../components/heading'
import Info from '../components/info'
import styles from '../styles/container-utils.module.css'
  
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isTransitioning: false,
        }
    }

    switchContainer = name => {
        setTimeout(() => {
            this.setState({ isTransitioning: false });
            this.props.router.push(`/?endpoint=${name}`);
        }, 800);
        this.setState({isTransitioning: true})
    }

    render() {
        let type = this.props.router.query.endpoint || "landing"
        return(
            <div className={cn({
                [styles.container]: true,
                [styles.transitioningIn]: !type.includes('landing'),
                [styles.transitioningOut]: this.state.isTransitioning,
            })}>
                <main className="content">
                    <Heading type={type}/>
                    <Info type={type}/>
                    <Grid type={type} handleClick={this.switchContainer}/>
                </main>
            </div>
        )
    };
}