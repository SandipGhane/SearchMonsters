import React, { Component, Fragment } from 'react';
import { CardList } from './components/CardList/CardList'
import SearchName from './components/SearchName/SearchName'
import './App.css';

class App extends Component{
  state={
    monsters:[],
    searchName:''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response=>Response.json())
      .then(users=>this.setState({monsters:users}))
     // console.log(monsters);
  }
  handleChange=(name)=>{
      this.setState({searchName:name.target.value})
  }

    render(){
       const {monsters,searchName} = this.state;
       const filterMonsters = monsters.filter(monster=>
          monster.name.toLowerCase().includes(searchName.toLowerCase())
        )
      // console.log(monsters);
      return(
        <div className="App">
          <h1>Search Monsters</h1>
          <SearchName
            onSearchName={this.handleChange}
          />
          <CardList monsters={filterMonsters}/>
        </div>
     
      );
    }
}

export default App;