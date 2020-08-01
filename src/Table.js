import React ,{Component} from 'react'

// simple component
const TableHeader = (props) => {
  return (
    <thead style={{display: props.todoThingDate.length === 0 ? "none" : "table-row-group"}}>
      <tr>
        <th>优先级</th>
        <th>任务</th>
        <th>是否完成</th>
        <th>操作</th>
      </tr>
    </thead>

  )
}

const TableBody = (props) => {
  // 属性比较
  const compare = (att) => {
    return (m,n) => {
      let a = m[att];
      let b = n[att];
      // 升序
      return b - a
    }
  }

  props.todoThingDate.sort(compare('priority'))

  const rows = props.todoThingDate.map((row,index) => {
    return (
      <tr key={index} onClick={(e) =>{console.log(e);}}>
        <td>{row.priority}</td>
        <td>{row.task}</td>
        <td>
          <input type='checkbox' />
        </td>
        <td  style={{display: props.removeTodoThing === undefined ? 'none' : 'block'}}>
          <button className="tableList-btn" type="button" onClick={() => {props.isComplete(false);props.changePopContent(false)}}>修改</button>
          <button className="tableList-btn" onClick={ () => props.removeTodoThing(index)}>删除</button>
          
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}


const Table = (props) => {
  const {todoThingDate,removeTodoThing,isComplete,changePopContent} = props
  

  return (
    <div className="tableList">
      <table>
        <caption style={{display: todoThingDate.length === 0 ? "table-row-group" : "none"}}>
          {props.h1Str}
        </caption>
        <TableHeader todoThingDate={todoThingDate} removeTodoThing={removeTodoThing}/>
        <TableBody 
        todoThingDate={todoThingDate} 
        removeTodoThing={removeTodoThing}
        isComplete={isComplete}
        changePopContent={changePopContent}
        />
      </table>
    </div>
  )
}

export default Table