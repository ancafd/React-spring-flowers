import React from 'react';
import './App.css';
import Card from './Card';
import CardList from './CardList';
import Form from './Form';

const testData = [
  {name: "Lily", avatar_url: "https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/oriental-lily.jpg?itok=Bi1IVpr8"},
  {name: "Cherry Blosom", avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTneI7yDVFKRsjECd0FNkgtB6AffMBTCj-6CS1Rhm_Zl6gBE84p&usqp=CAU"},
  {name: "Tulip", avatar_url: "https://s3.eu-west-2.amazonaws.com/jparkers/1000/1008359.jpg"},
  {name: "Cherry Blosom", avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTneI7yDVFKRsjECd0FNkgtB6AffMBTCj-6CS1Rhm_Zl6gBE84p&usqp=CAU"},
  {name: "Tulip", avatar_url: "https://s3.eu-west-2.amazonaws.com/jparkers/1000/1008359.jpg"},
  {name: "Cherry Blosom", avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTneI7yDVFKRsjECd0FNkgtB6AffMBTCj-6CS1Rhm_Zl6gBE84p&usqp=CAU"},
];


class App extends React.Component {
  state = {
    profiles: testData,
  };

  render(){
    return (
      <div className="App">
      {this.props.title}
      <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
