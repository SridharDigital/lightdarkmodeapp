import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  render() {
    const {isDark} = this.state
    let output;
    if(isDark) {
       output = (
       <div className="light-theme">
            <h1 className="dark-heading">Click to Change Mode</h1>
            <button className="button">Dark Mode</button>
        </div>)
      } else {
          output = (
          <div className="dark-theme">
            <h1 className="light-heading">Click to Change Mode</h1>
            <button className="button">Light Mode</button>
        </div>)
      }
    return {output}
}

export default LightDarkMode
