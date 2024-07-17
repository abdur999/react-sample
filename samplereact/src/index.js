import React from 'react'
import ReactDOM from 'react-dom'

const tasks = ["Take out the trash","Shovel out the trash","Grape Vine"]

//Static content creation

// const element = React.createElement('ul', null,
//   React.createElement('li',null,"Take out the trash"),
//   React.createElement('li',null,"Shovel out the trash"),
//   React.createElement('li',null,"Grape Vine")
// )
// ReactDOM.render(element, document.getElementById('root'))

//Pass item only

// const element = React.createElement('ol', null, 
//   tasks.map((task,index) => React.createElement('li',null, task) )
// )
// ReactDOM.render(element, document.getElementById('root'))


//Pass item with property
const element = React.createElement('ol', null, 
  tasks.map((task,index) => React.createElement("li",{ key: index }, task))
)
ReactDOM.render(element, document.getElementById('root'))
