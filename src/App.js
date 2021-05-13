
import React from 'react';
import {Button, Input, Progress} from 'semantic-ui-react'

function Login2(){

return (

      <div>
      <Input/>
      <Button primary onClick = {(e)=>
      alert(e.target.value)
    }> Login 2 </Button>
      </div>
    )
  }

class Login extends React.Component{

constructor(){
  super()
  this.state = {id : ""}
}

render(){
  return(
    <div>
    <Input onChange = {(e) => this.setState({id : e.target.value})}/>
    <Button value = {this.state.id} primary onClick = {(event)=>{
      alert(event.target.value)
    }}> Login </Button>
    </div>
    )
  }
}




function App() {
  return (
    <div>
        <p> 안녕하세요1</p>
  <Button primary> 안녕하세요2 </Button>
    <Button> 안녕하세요3 </Button>
    <button> 안녕하세요3 </button>
  <Progress percent = {66} indicating/>
<Login / >

</div>
  );
}

export default App;
