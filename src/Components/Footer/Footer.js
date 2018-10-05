import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <hr className="Footer-separator" />
        <footer className="Footer-container">
          Scott Warren's Project for the code exercise portion of the Get Selected interview process
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer