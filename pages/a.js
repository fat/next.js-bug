import React from 'react'

export default class extends React.Component {
  static getInitialProps ({ query: { user } }) {
    return { user }
  }

  render () {
    return <div>
      <h1>My {this.props.user.id} blog post</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}
