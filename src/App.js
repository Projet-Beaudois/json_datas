import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProposalData from "./JsonData/proposalData.json";
import { Button } from "@material-ui/core";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fileHandler = (event) => {
    let fileObj = event.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };
  render() {
    return (
      <div>
        <div style={{ justifyContent: "space-around", display: "flex" }}>
          <input
            type="file"
            onChange={this.fileHandler.bind(this)}
            style={{ padding: "10px" }}
          />
        </div>
        <p>
          <ul>{JSON.stringify(ProposalData)}</ul>
        </p>
      </div>
    );
  }
}
