import React from "react"

class Thedata extends React.Component {



  render() {
    return(
      <div>

        <div className="datainfo-container">

          <div className="data-content-container">
            <h1 className="data-name">{this.props.name}</h1>
            <p className="datainfo-txt">{this.props.pageTitle}</p>
            <p className="datainfo-txt">{this.props.url}</p>
            <p className="datainfo-txt">{this.props.headerPosition}</p>
            <p className="datainfo-txt">{this.props.tableType}</p>
            <p className="datainfo-txt">{this.props.tableType}</p>
          </div>

        </div>

      </div>
    )
  }
}


export default Thedata
