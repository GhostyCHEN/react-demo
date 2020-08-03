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


  // 修改数据
  const clickChange = (row) => {
    props.isComplete(false);
    props.changePopContent(false);
    props.modifyData(row);
  }

  const clickToComplete = (row) => {
    props.handleChecked(row);
  }
  const rows = props.todoThingDate.map((row) => {
    return (
      <tr key={row.id} >
        <td>{row.priority}</td>
        <td style={{textDecoration:row.accomplish ? 'line-through':'none'}}>{row.task}</td>
        <td>
          <input type='checkbox' checked={row.accomplish} onChange={() => {clickToComplete(row)}}/>
        </td>
        <td  style={{display: props.removeTodoThing === undefined ? 'none' : 'block'}}>
          <button className="tableList-btn" type="button" onClick={() =>{clickChange(row)}}>修改</button>
          <button className="tableList-btn" type="button" onClick={ () => props.removeTodoThing(row.id)}>删除</button>
          
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}










const Table = (props) => {


  const {todoThingDate,removeTodoThing,isComplete,changePopContent,modifyData,showLoading,searchResult,handleChecked} = props
  
  return (
    <div className="tableList">
      <table>
        {/* <caption style={{display: todoThingDate.length === 0 ^ showLoading ? "table-row-group" : "none"}}>
          {props.h1Str}
        </caption> */}
        <caption style={{display: (todoThingDate.length === 0 && searchResult.length === 0) ^ showLoading ? "table-row-group" : "none"}} >暂无数据</caption>
        <TableHeader todoThingDate={todoThingDate} removeTodoThing={removeTodoThing}/>
        <TableBody 
        todoThingDate={todoThingDate} 
        removeTodoThing={removeTodoThing}
        isComplete={isComplete}
        changePopContent={changePopContent}
        modifyData={modifyData}
        handleChecked={handleChecked}
        />
      </table>
    </div>
  )
}

export default Table