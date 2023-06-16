import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  onClickUpdate = () => {
    this.setState(prevState => {
      let status
      if (prevState.isDark) {
        status = {isDark: false}
      } else {
        status = {isDark: true}
      }
      return status
    })
  }

  render() {
    const {isDark} = this.state
    let output
    if (isDark) {
      output = (
        <div className="card light-theme">
          <h1 className="dark-heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickUpdate}>
            Dark Mode
          </button>
        </div>
      )
    } else {
      output = (
        <div className="card dark-theme">
          <h1 className="light-heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickUpdate}>
            Light Mode
          </button>
        </div>
      )
    }
    return <div className="bg-container">{output}</div>
  }
}

export default LightDarkMode
