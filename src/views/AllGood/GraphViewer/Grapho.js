import React, {
  Component
} from 'react';
import { Graph } from 'react-d3-graph';
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "123"));

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  "automaticRearrangeAfterDropNode": false,
  "collapsible": false,
  "directed": true,
  "focusAnimationDuration": 0.75,
  "focusZoom": 1,
  "height": 1400,
  "highlightDegree": 1,
  "highlightOpacity": 1,
  "linkHighlightBehavior": true,
  "maxZoom": 8,
  "minZoom": 0.1,
  "nodeHighlightBehavior": true,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1400,
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -100,
    "linkLength": 100,
    "linkStrength": 1
  },
  "node": {
    "color": "#00ACAB",
    "fontColor": "black",
    "fontSize": 10,
    "fontWeight": "normal",
    "highlightColor": "#F9F871",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "highlightStrokeColor": "black",
    "highlightStrokeWidth": "SAME",
    "labelProperty": "nombre",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "size": 300,
    "strokeColor": "#906DB1",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "circle"
  },
  "link": {
    "color": "#E6F4F1",
    "fontColor": "black",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "black",
    "highlightFontSize": 12,
    "highlightFontWeight": "normal",
    "labelProperty": "type",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "semanticStrokeWidth": false,
    "strokeWidth": 1.5
  }
};

class Grapho extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      config : myConfig,
      data :{
          "nodes": [{
                  "id": 777777777777777,
                  "nombre": "Init Graph"
                }],
          "links": []
      }
    }
  }

  componentDidMount() {
    console.log(this.props.idArticle)
    fetch("http://localhost:8080/articles/graph")
      .then(response => response.json())
      .then(data => {
        console.log("Data del REST: " , data);
        this.setState({data:data})
      })
  }

  render() {
    const onClickNode = function(node) {
      sendNodeId(node)
    };

    const sendNodeId = (nodeId) => {
      let clickedNodeId = nodeId
      this.props.sendClickedNodeId(clickedNodeId)
    }

    const idArticle = this.props.idArticle
    //console.log(idArticle)
    if(idArticle != null){
      fetch("http://localhost:8080/articles/graph/"+idArticle)
      .then(response => response.json())
      .then(data => {
        this.setState({data:data})
      })
    }

    return (
      <Graph
      id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
      config={this.state.config}
      data={this.state.data}
      onClickNode={onClickNode}
      />
      )
    }
  }
  export default Grapho;