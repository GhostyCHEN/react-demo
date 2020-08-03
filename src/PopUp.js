import React,{Component} from 'react'
import Form from './Form'

class PopUp extends Component{
  resetComplete = () => {
    this.props.isComplete(true)
  }


  render(){
    // console.log(typeof this.props.renderContent.type.name);
    // if(this.state.visible) {
      
      return(
        <div className={`popUp ${this.props.complete ? null : 'popUp-show'} `}>
        <div className='popUp-container' style={{visibility: this.props.complete ? "hidden" : "visible"}}>
          <div className={`popUp-content ${this.props.complete ? null : 'popUp-content-show'}`}>
            <span onClick={this.resetComplete}>✖</span>

            <h3 style={{display:this.props.renderContent.type.name === 'Form' ? 'block' :'none'}}>📝 新建任务</h3>
            <h3 style={{display:this.props.renderContent.type.name === 'Modify' ? 'block' :'none'}}>📝 修改任务</h3>
            <div>
              {this.props.renderContent}
            </div>
          </div>
        </div>
      </div>
    )
  // }else{
  //   return null
  // }
  }
}

export default PopUp
