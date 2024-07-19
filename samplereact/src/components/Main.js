import React,{Component} from "react"
import List from "./List"
import Title from "./Title"

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

  export default Main
