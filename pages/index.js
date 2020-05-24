import { Component } from 'react'

import Container from '../components/container'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <Container headingText="Welcome" type="landing"/>
  }
}
