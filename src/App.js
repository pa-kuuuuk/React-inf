import { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  
  state ={
    information:[
      {
        id:0,
        name : '홍길동',
        phone : '010-0000-0001',
      },
      {
        id:1,
        name : '임꺽정',
        phone : '010-0000-0002',
      },
      {
        id:2,
        name : '일지매',
        phone : '010-0000-0001',
      },
    ],
    keyword:'',
  }
  
  handleChange = (e)=>{
    this.setState(
      {
        keyword: e.target.value,
      },
      console.log(this.state.keyword)
    )
  }

  
  id =this.state.information.length;

  //concat or 배열,object 복사를 통해 불변성 유지는 필수다.  => immutable js라이브러리를 사용하면 편하다

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
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        ></input>
        <PhoneInfoList 
        data={this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )}
        onRemove ={this.handleRemove}
        onUpdate={this.handleUpdate}
        />  
      </div>
    )
  }
}
export default App;
