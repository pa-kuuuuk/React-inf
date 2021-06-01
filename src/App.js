import { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component{
  
  id =0;

  state ={
    information:[],
  }
  handleCreate =(data) => {
    //비메모리 할당구조
    //const object = { a: 1, b: 2 };
    //const { a, b } = object;
    const {information} = this.state;
    console.log(data);
    this.setState({
      information: information.concat(Object.assign({},data, {
        // ...data, 방법 1
        // name: data.name,
        // phone:data.phone, 방법2
        id: this.id++
      }))
    })
  }

  render(){
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {JSON.stringify(this.state.information)}
      </div>
    )
  }
}

export default App;
