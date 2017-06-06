
import React, { Component } from 'react'
import styles from './styles.scss'

export default class User extends Component {
  constructor (props) {
    super(props)

    this.state = {
      jwt: ''
    }
  }

  componentWillMount () {
    const { location: { query } } = this.props
    if (query.jwt) {
      this.setState(() => ({
        jwt: query.jwt
      }))
    }
  }

  componentDidMount () {
    const { jwt } = this.state
    if (jwt) {
      this.props.history.push('/user')
    }
  }

  render () {
    return (
      <div> {`Current User's JWT is ${this.state.jwt}`}</div>
    )
  }
}
