import React, { PureComponent } from 'react'
import logo from '../assets/img/smart-bull.png'

export default class ConfluxNetwork extends PureComponent {
  render() {
    const logostyle = {
      width: 'auto'
    }
    const style ={
      textAlign: 'center'
    }
    return (
      <div className="card pt-3">
        <img src={logo} className="card-img-top m-auto" alt="Conflux" style={logostyle}/>
        <div className="card-body" style={style}>
          <h5 className="card-title" >SmartBull Trade</h5>
          <p className="card-text">Powered by Conflux Blockchain</p>
          <p className="card-text">Node URL: <code>{process.env.REACT_APP_CONFLUX_NODE_RPC}</code></p>
        </div>
      </div>
    )
  }
}
