import React,{Component} from 'react'

class Modify extends Component{
  Modify = {
    priority:'',
    task:'',
  }
  constructor(props) {
    super(props);
    
    this.state = {
      Modified:this.Modify
    }
  }

  render(){
    return(
      <div className="modify">
        
      </div>
    )
  }
}

export default Modify