import { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

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

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id,data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return{
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render(){
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList 
        data={this.state.information}
        onRemove ={this.handleRemove}
        onUpdate={this.handleUpdate}
        />  
      </div>
    )
  }
}

export default App;
