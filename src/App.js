import React, { Component } from 'react';
import './App.css';
import CampaignService from './services/campaign-service';
import UserService from './services/user-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { id: "", photo: "shrug.jpg" };

    // set the priority in the docker-compose file. You will need to restart this app with docker-compose to update it.
    const priority = process.env.REACT_APP_CAMPAIGN_PRIORITY.split(",").map(Number);
  console.log(priority);
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
