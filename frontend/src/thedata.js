import React from "react"

import "./thedata.css"

class Thedata extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataVisible: false
    }
  }

  handleDataVisibleClick = () => {
  this.setState({ dataVisible: !this.state.dataVisible })
}

  render() {
    return(
      <div>

        <div className="datainfo-container">
          <div className="data-name-container">
            <h3 className="data-name">{this.props.name}</h3>
            <div onClick={this.handleDataVisibleClick} className="data-name-plus">+</div>
          </div>

          <div className={`data-info ${this.state.dataVisible ? "visible" : "hidden"}`}>
            <p className="datainfo-txt">ADDRESS: {this.props.address}</p>
            <p className="datainfo-txt">PHONE: {this.props.phoneNumber}</p>
            <p className="datainfo-txt">AREA: {this.props.area}</p>
            <p className="datainfo-txt">HOMEPAGE: {this.props.homepage}</p>
          </div>
        </div>

      </div>
    )
  }
}


export default Thedata
