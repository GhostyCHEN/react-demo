import React,{Component} from 'react'

class Modify extends Component{
  Modify = {
    priority:'',
    task:'',
  }
  constructor(props) {
    super(props);
    
    this.state = {
      priority:this.props.modifyData.priority,
      task:this.props.modifyData.task,
    }
  }
  
  modifyData = (event) => {
    const {name,value} = event.target
    this.setState({
      [name]:value
    })
  }

  submitModify = () => {
    this.props.isComplete(true)
    console.log(this.state);
  }

  render(){
    
    return(
      <div className="modify">
        <form className="form clearfix">
          <label htmlFor="priorityModify" >优先级</label>
          <input type='number' name="priority" value={this.state.priority} onChange={this.modifyData}/>
          <label htmlFor='taskModify'>任务描述</label>
          <input type='text' name="task" value={this.state.task} onChange={this.modifyData} />
          <input className="form-btn" type='button' value='保存' onClick={this.submitModify}/>
        </form>
      </div>
    )
  }
}

export default Modify