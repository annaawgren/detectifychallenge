import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Thedata from "./thedata"

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      dataList: []
    }
  }

  componentDidMount() {
      fetch("http://localhost:8080").then(response => {
        return response.json()
      }).then(json => {
        console.log('set state', typeof json)
        this.setState({ dataList: json })
      })
    }

  renderDataInfo = () => {
    console.log("renderDataInfo", typeof this.state.dataList)
    return this.state.dataList.map(data => (
      <Thedata
        key={data.id}
        name={data.name}
        type={data.type}
        area={data.area}
        phoneNumber={data.phoneNumber}
        address={data.address}
        homepage={data.homepage}
        />
    ))
  }

  render() {
    return (
      <div className="App">

        <div className="yourData-header-container">
          <div className="yourData-headline">
            <h1>YOUR DATA</h1>
          </div>
          <div className="yourData-tagline">
            <h2>We found these restaurants in your city.</h2>
          </div>
        </div>

        <div className="thedata-container">
          {this.renderDataInfo()}
        </div>


        <div className="footer">
          <div className="coding-challenge-txt">
            <p>/DETECTIFY WEB CODING CHALLENGE</p>
          </div>
          <div className="anna-txt">
            <p>BY ANNA ÅGREN</p>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
