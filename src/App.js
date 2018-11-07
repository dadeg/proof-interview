import React, { Component } from 'react';
import './App.css';
import CampaignService from './services/campaign-service';
import UserService from './services/user-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { id: "", photo: "shrug.jpg" };

    // set the priority in the URL by setting a query param, /?priority=1,2,3,4,5,6,7
    const urlParams = new URLSearchParams(window.location.search);
    let priority = urlParams.get("priority") || "1,2,3,4,5,6,7";
    priority = priority.split(",").map(Number);

    this.campaignService = new CampaignService(priority);
    this.userService = new UserService();

    this.updateId = this.updateId.bind(this);
    this.submitId = this.submitId.bind(this);
  }

  updateId(event) {
    this.setState({ id: event.target.value });
  }

  submitId() {
    const { id } = this.state;

    const user = this.userService.login(Number(id));

    if (!user) {
      this.setState({ id: "", photo: "shrug.jpg" });
      return;
    }

    const photo = this.campaignService.serve(user);

    this.setState({ id: "", photo });

  }

  render() {
    const { id, photo } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          Campaign Server
        </header>
        <p>Log in by entering your User ID and we will show you your campaign!</p>
        <p><input type='text' value={id} onChange={this.updateId}/> <button onClick={this.submitId}>Login</button></p>
        <p><img src={`/images/${photo}`} alt="Your Campaign" /></p>
      </div>
    );
  }
}

export default App;
