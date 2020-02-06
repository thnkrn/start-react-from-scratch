import React from 'react'

class Example extends React.Component {
  static getInitialProps({ isServer }) {
    if (isServer) {
      return { data: 'server' }
    }

    return { data: 'client' }
  }

  render() {
    return (
      <div>1</div>
    )
  }
}

export default Example
