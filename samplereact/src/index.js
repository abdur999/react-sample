import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'

//Upto 109 line the dependency was there
//const tasks = ["Take out the trash","Shovel out the trash","Grape Vine"]

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

// const element = React.createElement('ol', null, 
//   tasks.map((task,index) => React.createElement("li",{ key: index }, task))
// )
// ReactDOM.render(element, document.getElementById('root'))


//JSX element

// const element = <ol> 
//   <li>Hello World</li> 
//   <li>Hello World</li> 
//   <li>Hello World</li> 
//   </ol>
// ReactDOM.render(element, document.getElementById('root'))


//JSX element from array manually

// const element = <ol> 
//   <li>{tasks[0]}d</li> 
//   <li>{tasks[1]}</li> 
//   <li>{tasks[2]}</li> 
//   </ol>
// ReactDOM.render(element, document.getElementById('root'))


//JSX element from array using map

// const element = <ol> 
//   { tasks.map((task) => <li key= {task}>{task}</li>)}
//   </ol>
// ReactDOM.render(element, document.getElementById('root'))


//JSX element from array using map if we put multiple tag we have to enclose with another tag like <div> or some other suitable tag

// const element = <div>
//     <h1>Task List</h1>
//     <ol> 
//     { tasks.map((task) => <li key= {task}>{task}</li>)}
//     </ol>
//   </div>
// ReactDOM.render(element, document.getElementById('root'))

/*
class List extends Component { 
  render(){
    return ( <ol> 
      {tasks.map((task, index) => <li key = {index}> {task} </li>)}
    </ol> )

    }

}

class Title extends Component {
    render() {
      return <h1> Task List</h1>
    }
}
*/

//We can render single component 1 time
// class Main extends Component {
//     render() {
//       return <div>
//         <Title/>
//         <List/>
//       </div>
//     }
// }

//We can render same component multiple time
/*
class Main extends Component {
  render() {
    return <div>
      <Title/>
      <List/>
      <List/>
      <List/>
    </div>
  }
}
ReactDOM.render(<Main/>, document.getElementById('root'))
*/


// Due to modularity we change the code and write in different file
/*
//Dynamic Components
class List extends Component { 
  render(){
    return ( <ol> 
      {this.props.tasks.map((task, index) => <li key = {index}> {task} </li>)}
    </ol> )

    }

}

class Title extends Component {
    render() {
      return <h1> {this.props.mytitle} </h1>
    }
}

class Main extends Component {
  render() {
    return <div>
      <Title mytitle={"List of jist : "}/>
      <List tasks={["Move with Style","Fly like a bee"]}/>
      <List tasks={["Be like a man", "Belive on yourself", "Wow like"]}/>
      <List tasks={["Be like a man", "Belive on yourself", "Wow like", "meow !"]}/>
    </div>
  }
}
*/


ReactDOM.render(<Main/>, document.getElementById('root'))
