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
        this.setState({ dataList: json.relation })
      })
    }

  renderDataInfo = () => {
    console.log("renderDataInfo", typeof this.state.dataList)
    return this.state.dataList.map(data => (
      <Thedata
        key={data.id}
        name={data.name}
        pagetitle={data.pageTitle}
        url={data.url}
        headerPosition={data.headerPosition}
        tableType={data.tableType}
        tableNum={data.tableNum}
        recordEndOffset={data.recordEndOffset}
        recordOffset={data.recordOffset}
        textBeforeTable={data.textBeforeTable}
        textAfterTable={data.textAfterTable}
        hasKeyColumn={data.hasKeyColumn}
        keyColumnIndex={data.keyColumnIndex}
        headerRowIndex={data.headerRowIndex}
        />
    ))
  }

  render() {
    return (
      <div className="App">

        {this.renderDataInfo()}

        <p className="App-intro">
          hello

        </p>
      </div>
    );
  }
}

export default App;
