import React,{Component} from 'react'

class Form extends Component{
  initialState = {
    priority:'',
    task:'',
  }
  state = this.initialState
  
  // input event 
  handleChange = (event) => {
    const {name,value} = event.target
    this.setState({[name] : value})
  }

  submitForm = () => {
    // 把值传递给App组件
    // if(this.state.priority === '' || this.state.task === ''){
      this.props.isComplete(true)
    // }else{
      this.props.handleSubmit(this.state);
      // 把Form的初值置空
      this.setState(this.initialState);
    // }

  }
  getTodoListData = () => {
    this.props.getTodoListData()
  }

  render(){
    const {priority, task} = this.state;

    return (
      <form className="form clearfix">
        <label htmlFor="priority" >优先级</label>
        <input type='number' name='priority' id='priority' value={ priority } onChange={this.handleChange} />
        <label htmlFor='job'>任务描述</label>
        <input type='text' name='task' id='task' value = { task } onChange={this.handleChange} />
        <input className="form-btn" type='button' value='保存' onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;