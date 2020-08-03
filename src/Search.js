import React,{Component} from 'react'

class Search extends Component{
  searchInput = {
    searchNumber:'',
    searchText:''
  }

  constructor(props){
    super(props);
    this.state = {
      searchInput:this.searchInput
    }
  }
  searchInputChange = (event) => {
    const {name,value} = event.target
    this.setState({searchInput:{...this.state.searchInput,[name]:value}})
    console.log(this.state);
    
  }

  searchTodoThings = () => {
    console.log(this.state.searchInput);
    this.props.handleSearch(this.state.searchInput);
  }
  // prioritySearch = () => {
  //   // console.log(this.state.searchInput);
  //   this.props.handleSearch(this.state.searchInput)
  //   // input值置空
  //   this.setState({searchInput:this.searchInput})
  // }

  // 新建弹窗
  setNewTask = () => {
    this.props.isComplete(false)
    this.props.changePopContent(true)
  }

  render(){
    return(
      <div className="search">
        <span>优先级:</span>
        <input type='number' name='searchNumber' value={this.state.searchInput.priority} onChange={this.searchInputChange}></input>
        <span>任务描述:</span>
        <input type='text' name='searchText' value={this.state.searchInput.task} onChange={this.searchInputChange} />
        <div className="search-btn">
          <button type="button" onClick={this.props.getTodoListData}>重置</button>
          <button type="button" onClick={() =>{this.props.resetSearch(); this.searchTodoThings()}}>🔍搜索</button>
          <button type="button" onClick={this.setNewTask}>📝 新建</button>
        </div>
      </div>
    )
  }
}

export default Search