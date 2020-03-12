import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import "./australia";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState = () => ({ option: this.getOption() });

  getOption = () => {
    return {
      title: {
        text: "COVID-19",
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Confirmed case"]
      },
      visualMap: {
        min: 0,
        max: 100,
        left: "left",
        top: "bottom",
        calculable: true
      },
      toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center"
      },
      series: [
        {
          name: "Confirmed case",
          type: "map",
          mapType: "australia",
          roam: false,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: "NSW", value: 78 },
            { name: "VIC", value: 28 },
            { name: "QLD", value: 27 },
            { name: "WA", value: 9 },
            { name: "SA", value: 12 },
            { name: "TAS", value: 3 },
            { name: "ACT", value: 1 },
            { name: "NT", value: 0 }
          ]
        }
      ]
    };
  };
  render() {
    return (
      <div className="examples">
        <div className="parent">
          <ReactEcharts
            option={this.state.option}
            style={{ height: "500px", maxWidth: "800px", margin: "0 auto" }}
            className="react_for_echarts"
          />
        </div>
      </div>
    );
  }
}
