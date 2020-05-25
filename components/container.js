import { Component } from 'react'

import cn from 'classnames'

import BackArrow from '../components/backArrow'
import Grid from '../components/grid'
import Heading from '../components/heading'
import Info from '../components/info'
import styles from '../styles/container-utils.module.css'
  
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            initialLoad: true,
            isTransitioning: false
        }
    }

    switchContainer = (name, isBack=false) => {
        setTimeout(() => {
            this.setState({ isBack: isBack, isTransitioning: false });
            this.props.router.push(`/?endpoint=${name}`);
        }, 800);
        this.setState({
            initialLoad: false,
            isBack: isBack,
            isTransitioning: true
        })
    }

    render() {
        let type = this.props.router.query.endpoint || "landing";
        let isBack = this.state.isBack;
        let initialLoad = this.state.initialLoad;
        return(
            <div className={cn({
                [styles.container]: true,
                [styles.transitioningIn]: !initialLoad && !isBack,
                [styles.transitioningOut]: this.state.isTransitioning && !isBack,
                [styles.reverseTransitionIn]: !initialLoad && isBack,
                [styles.reverseTransitionOut]: this.state.isTransitioning && isBack

            })}>
                <main className="content">
                    <BackArrow type={type} handleClick={this.switchContainer}/>
                    <Heading type={type}/>
                    <Info type={type}/>
                    <Grid type={type} handleClick={this.switchContainer}/>
                </main>
            </div>
        )
    };
}