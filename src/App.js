import React, {Component} from 'react'
import axios from 'axios'

import Table from './Table'
import Form from './Form'
import PopUp from './PopUp'
import Search from'./Search'
import Modify from './Modify'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      todoThings: [],
      complete:true,
      isLoaded:false,
      searchResult:[],
      popUpWhat:true
    };
  }

  // 生命周期
  componentDidMount(){
    // 请求数据
    // this.getTodoListData = () => {
    //   axios.get('http://172.16.6.202:7300/mock/5f215dcba72c560020dfe6d0/example/reactdemo')
    //   .then((response) => {
    //     console.log(response.data.data.todoList);
    //     this.setState({todoThings:response.data.data.todoList})
    //   })
    //   .catch( (err) => {
    //     console.log(err);
    //   })
    // }
  }

  // 请求数据
  getTodoListData = () => {
    axios.get('http://172.16.6.202:7300/mock/5f215dcba72c560020dfe6d0/example/reactdemo')
    .then((response) => {
      // console.log(response.data.data.todoList);
      this.setState({todoThings:response.data.data.todoList})
    })
    .catch( (err) => {
      console.log(err);
    })
  }

  // 删除thing方法
  removeTodoThing = (index) => {
    const {todoThings,searchResult} = this.state
    
    this.setState({
      todoThings:todoThings.filter((todoThing,i) => {
        return i !== index
      }),
      // todoThings:todoThings.filter((todoThing) => {
      //   return todoThing.task !== searchResult[index].task
      // }),
      // searchResult:searchResult.filter((item,i) => {
      //   return i !== index
      // })

    })
  }

  // Form组件 增加thing
  handleSubmit = (todoThing) => {
    this.setState({
      todoThings:[...this.state.todoThings,todoThing]
    })
  }
  // 展示弹窗
  isComplete = (submit) => {
    if(submit){
      this.setState({complete:true})
    }else{
      this.setState({complete:false})
    }
  }
  
  // Search组件 查找方法
  handleSearch = (searchInput) => {
    const {todoThings} = this.state;
    this.setState({
      searchResult:todoThings.filter((todoThing) => {
        return Number.parseInt(todoThing.priority) === Number.parseInt(searchInput) 
      })
    })
  }
  // Search返回按钮 searchResult置空
  resetSearch = () => {
    this.setState({
      searchResult:[]
    })
  }
  // 判断弹窗展示的是新建还是修改
  showPopUp = () =>{
    if(this.state.popUpWhat){
      return <Form 
        handleSubmit = {this.handleSubmit}
        isComplete = {this.isComplete}
        />
    }else{
      return <Modify/>
    }
  }
  // 修改弹窗展示的判断条件
  changePopContent = (boolean) => {
    this.setState({popUpWhat:boolean})
  }

  render(){
    const {todoThings,complete,searchResult} = this.state
    
    return(
      <div className="container">
        <h1>A to-do List</h1>
        <Search 
        handleSearch = {this.handleSearch} 
        resetSearch={this.resetSearch} 
        getTodoListData = {this.getTodoListData} 
        handleSubmit={this.handleSubmit} 
        isComplete={this.isComplete}
        changePopContent={this.changePopContent}
        />
        <Table  
        todoThingDate = {todoThings} 
        removeTodoThing = {this.removeTodoThing}
        isComplete={this.isComplete} 
        changePopContent={this.changePopContent}
        h1Str={`今日任务已完成👏👏👏`} />
        <PopUp  
        complete={complete} 
        isComplete={this.isComplete}
        handleSubmit = {this.handleSubmit}
        renderContent={this.showPopUp()}
          />
      </div>
    )
  }
}

export default App