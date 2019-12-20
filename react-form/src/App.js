import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      email: '',
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUser(event) {
    this.setState({ user: event.target.value });
    console.log(event.target);
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value });
    console.log(event.target);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(event.target);
  }

  async handleSubmit(event) {
    event.preventDefault();
    alert(this.state.user + ' ' + this.state.pass + ' ' + this.state.email);
    // console.log(event.target);
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">From</h3>
              </div>
              <div className="panel-body">
                {/* Tạo From */}
                <form onSubmit={this.handleSubmit}>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="txtEmail"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </div>

                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtUserName"
                      value={this.state.user}
                      onChange={this.handleChangeUser}
                    />
                  </div>

                  <div className="form-group">
                    <label>PassWord</label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtPassWord"
                      value={this.state.pass}
                      onChange={this.handleChangePass}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                  <button type="reset" className="btn btn-default">Clear</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
