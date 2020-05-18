import React from 'react';
import './Card.css';


class Card extends React.Component {
  render(){
    const profile = this.props;
    return (
      <div className="Card">
        <div>
        {profile.name}
        </div>
        <div>
        {profile.attribute}
        </div>
        <img src={profile.avatar_url} height="200" width="200"/>
     </div> 
    );
  }
}

export default Card;
