import { Component, Input, SimpleChange } from '@angular/core';
import * as d3 from 'd3';
import * as uuid from 'uuid/v4';

/**
 * Generated class for the TempGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'temp-graph',
  templateUrl: 'temp-graph.html'
})
export class TempGraphComponent {

  @Input()
  data;

  random;

  xAxis;
  yAxis;

  xRange;
  yRange;

  graph;

  graphData: [{ x: number, y: number }];
  lineData;

  constructor() {
  }

  ngOnInit() {
    // generate a random UUID to use as a binding ID for the graph SVG object
    this.random = uuid();
  }

  // listen for changes to the input data field
  ngOnChanges(changes: { [data: string]: SimpleChange }) {
    console.log(changes);
    console.log(this.data);
    if (this.data && this.data.length > 0) {
      this.graphData = this.mapGraphData(this.data);
      this.prepGraph();
      this.lineData = this.getLineData(this.graphData);
      this.drawGraphLines();
    }
  }

  // get our relevant data into x,y fashion
  mapGraphData(data) {
    let result = data.map(d => {
      return { x: d.dt, y: d.main.temp }
    });
    console.log('result GRAPH DATA');
    console.log(result);
    return result;
  }

  // prepare the SVG graph based on relevant data
  prepGraph() {
    // Grab the graph SVG from DOM
    this.graph = d3.select(`#graph-${this.random}`);

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight / 2;
    var MARGINS = {
      top: 50,
      right: 20,
      bottom: 20,
      left: 50
    };

    // get range relevancy w data
    this.xRange = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(this.graphData, function (d) {
      return d.x;
    }), d3.max(this.graphData, function (d) {
      return d.x;
    })]);
    this.yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(this.graphData, function (d) {
      return d.y;
    }), d3.max(this.graphData, function (d) {
      return d.y;
    })]);

    // set the axis based on ranges
    this.xAxis = d3.axisBottom(this.xRange).tickSize(10).tickFormat((d: any) => { return d.x; });
    this.yAxis = d3.axisLeft(this.yRange);

    // draw the axis
    this.graph.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
      .call(this.xAxis);

    this.graph.append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
      .call(this.yAxis);
  }

  // convert the line data into relevant points for the SVG graph
  getLineData(data) {
    let result = data.map(d => {
      return [this.xRange(d.x), this.yRange(d.y)]
    });
    console.log('result LINE DATA');
    console.log(result);
    return result;
  }


  // append the lines to DOM
  drawGraphLines() {
    let lineGen = d3.line();

    let lines = lineGen(this.lineData);

    this.graph.append('svg:path')
      .attr('d', lines)
      .attr('stroke', 'red')
      .attr('stroke-width', 4)
      .attr('fill', 'none');
  }



}
