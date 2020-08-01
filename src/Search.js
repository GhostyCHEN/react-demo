import React,{Component} from 'react'

class Search extends Component{
  searchInput = {
    priority:'',
    task:''
  }

  constructor(props){
    super(props);
    this.state = {
      searchInput:this.searchInput
    }
  }
  searchInputChange = (event) => {
    const {value} = event.target
    this.setState({searchInput:value})
    console.log(this.state);
    
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
        <input type='text' name='searchText' value={this.state.searchInput.task} />
        <div className="search-btn">
          <button type="button" onClick={this.props.getTodoListData}>重新导入</button>
          <button type="button" onClick={this.props.resetSearch} >搜索</button>
          <button type="button" onClick={this.setNewTask}>📝 新建</button>
        </div>
      </div>
    )
  }
}

export default Search