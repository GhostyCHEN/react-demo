import React ,{Component} from 'react'
import './loading.scss'

class Loading extends Component{


  render(){
    return(
      <div className="sk-chase" style={{display: this.props.showLoading ? 'block' : 'none'}}>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    )
  }
}

export default Loading
