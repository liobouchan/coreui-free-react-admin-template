import React, {
  Component
} from 'react';
import { Graph } from 'react-d3-graph';

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "123"));

var data = {
  nodes: [ ],
  links: [ ]
};

class Grapho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {}
    }
  }

  componentDidMount() {
    // this.setState({data: "perreo"})
    // return(
    //   <h1>{this.state.data}</h1>
    // )
    console.log("This data: " , data)
    var session = driver.session();
    session
    .run('MATCH (a)-[r1]->(b) , (b)-[r2]->(c) WHERE NOT b.nombre="Artículo 1" OR  a.nombre="Artículo 1" OR c.nombre="Artículo 1" RETURN a,r1,b,r2 LIMIT 5')
    .then(function (result) {
      result.records.forEach(function (record) {
        // Nodos A
        console.log("Propiedades Nodo A:" , record.get('a').properties);
        let dictionaryOfFirtstNodeProperties = record.get('a').properties
        dictionaryOfFirtstNodeProperties['id'] = record.get('a').identity.low
        console.log("Resultado Nodo A: " , dictionaryOfFirtstNodeProperties);
        data.nodes.push(dictionaryOfFirtstNodeProperties)
      
        // Nodos B
        console.log("Propiedades Nodo B:" , record.get('b').properties);
        let dictionaryOfSecondtNodeProperties = record.get('b').properties
        dictionaryOfSecondtNodeProperties['id'] = record.get('b').identity.low
        console.log("Resultado Nodo B: " , dictionaryOfSecondtNodeProperties);
        data.nodes.push(dictionaryOfSecondtNodeProperties)
      });
      console.log("This data 2 : " , data)
      session.close();
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ data: data })
    // return(
    //   data
    // )
    return(
    <Graph
    id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    />)
  }

  render() {
    return (
      <div />
    )
  }

}
export default Grapho;