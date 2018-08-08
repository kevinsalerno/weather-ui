import { Component, Input, SimpleChange } from '@angular/core';
import * as d3 from 'd3';

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

  xAxis;
  yAxis;

  xRange;
  yRange;

  graph;

  graphData: [{ x: number, y: number}];
  lineData;

  constructor() {
  }

  ngOnChanges(changes: {[data: string]: SimpleChange}) {
    console.log(changes);
    console.log(this.data);
    if (this.data && this.data.length > 0) {
      this.graphData = this.mapGraphData(this.data);
      this.prepGraph();
      this.lineData = this.getLineData(this.graphData);
      this.drawGraphLines();
    }
  }

  mapGraphData(data) {
    let result = data.map(d => {
      return {x: d.dt, y: d.main.temp}
    });
    console.log('result GRAPH DATA');
    console.log(result);
    return result;
  }

  getLineData(data) {
    let result = data.map(d => {
      return [this.xRange(d.x),this.yRange(d.y)]
    });
    console.log('result LINE DATA');
    console.log(result);
    return result;
  }

  prepGraph() {
    
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight / 2;
    var MARGINS = {
      top: 50,
      right: 20,
      bottom: 20,
      left: 50
    };
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
    this.xAxis = d3.axisBottom(this.xRange).tickSize(10).tickFormat((d: any) => { return d.x; });
    this.yAxis = d3.axisLeft(this.yRange);
    this.graph.append('svg:g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
      .call(this.xAxis);

      this.graph.append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
      .call(this.yAxis);


      let lineGen = d3.line();
      let pathString = lineGen([[this.xRange(3), this.yRange(20)], [this.xRange(16), this.yRange(23)], [this.xRange(27), this.yRange(43)]]);

      this.graph.append('svg:path')
      .attr('d', pathString)
      .attr('stroke', 'red')
      .attr('stroke-width', 4)
      .attr('fill', 'none');
  }


  drawGraphLines() {
    let lineGen = d3.line();
    
    let lines = lineGen(this.lineData);

    this.graph.append('svg:path')
    .attr('d', lines)
    .attr('stroke', 'red')
    .attr('stroke-width', 4)
    .attr('fill', 'none');
  }

  ngOnInit() {
    this.graph = d3.select('#graph');
    
    // var lineData = [{
    //   x: 1,
    //   y: 5
    // }, {
    //   x: 20,
    //   y: 20
    // }, {
    //   x: 40,
    //   y: 10
    // }, {
    //   x: 60,
    //   y: 40
    // }, {
    //   x: 80,
    //   y: 5
    // }, {
    //   x: 100,
    //   y: 60
    // }];


    // var WIDTH = window.innerWidth;
    // var HEIGHT = window.innerHeight / 2;
    // var MARGINS = {
    //   top: 50,
    //   right: 20,
    //   bottom: 20,
    //   left: 50
    // };
    // this.xRange = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function (d) {
    //   return d.x;
    // }), d3.max(lineData, function (d) {
    //   return d.x;
    // })]);
    // this.yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function (d) {
    //   return d.y;
    // }), d3.max(lineData, function (d) {
    //   return d.y;
    // })]);
    // this.xAxis = d3.axisBottom(this.xRange).tickSize(10).tickFormat((d: any) => { console.log(d); return d.x; });
    // this.yAxis = d3.axisLeft(this.yRange);
    // this.graph.append('svg:g')
    //   .attr('class', 'x axis')
    //   .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    //   .call(this.xAxis);

    //   this.graph.append('svg:g')
    //   .attr('class', 'y axis')
    //   .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    //   .call(this.yAxis);


    //   let lineGen = d3.line();
    //   let pathString = lineGen([[this.xRange(3), this.yRange(20)], [this.xRange(16), this.yRange(23)], [this.xRange(27), this.yRange(43)]]);

    //   this.graph.append('svg:path')
    //   .attr('d', pathString)
    //   .attr('stroke', 'red')
    //   .attr('stroke-width', 4)
    //   .attr('fill', 'none');


    // .interpolate('linear');
  }

  lineFunc(d: any): any {
    d3.line()
      .x(function (d: any) {
        return d.x;// this.xRange(d.x);
      })
      .y(function (d: any) {
        return d.y;// this.yRange(d.y);
      });
  }


}
