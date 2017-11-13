import React, { Component } from 'react';

class Listing extends Component {
  constructor(props) {
    super(props);
    const people = [
      {name: 'Steve', email: 'steve@email.com', city: 'Sydney', role: 'Developer'},
      {name: 'Tom', email: 'tom@email.com', city: 'Melbourne', role: 'UX'},
      {name: 'Jane', email: 'jane@email.com', city: 'Brisbane', role: 'BA'}
    ];

    this.state = {people};

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log('button was clicked');
  }

  render() {
    return (
      <div className="Listing">
        <h2>Listing Component</h2>
        <ul>
          {this.state.people.map((person, index) => {
            return (
              <div key={index} className="profile-container person">
                <h3>{person.name}</h3>
                <p>{person.email}</p>
                <button className="profile-button" onClick={this.handleButtonClick}>Details</button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Listing;
