
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.scss'
import { saveTokenToLocalStorage, retrieveTokenFromLocalStorage } from '../../lib/actions/index'

class User extends Component {

  componentDidMount () {
    const { location: { query }, dispatch, history, token } = this.props
    if (query.jwt) {
      dispatch(saveTokenToLocalStorage(query.jwt))
      .then(() => {
        history.push('/user')
      })
    }
  }

  render () {
    return (
      <div> {`Current User's JWT is ${this.props.token}`}</div>
    )
  }
}

function mapStateToProps (state) {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(User)
