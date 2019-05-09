import React, {
  Component
} from 'react';
import { Graph } from 'react-d3-graph';

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: 'Harry', nombre: '2', nombre2: '2', nombre3: '2' }, { id: 'Sally' }, { id: 'Alice' }],
  links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue'
  },
  link: {
      highlightColor: 'lightblue'
  },
  height: 1000,
  width: 1000
};

class Grapho extends Component {
  ref = React.createRef();

  componentDidMount(){
    console.log(this.ref);
  }

  render() {
    return (
        <Graph
        id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        />
    )
  }
}
export default Grapho;