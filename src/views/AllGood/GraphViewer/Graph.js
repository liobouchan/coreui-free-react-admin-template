import sigma from 'sigma';
import sigmaJS from '../../../../node_modules/sigma/plugins/rhisco.neo4j.cypher/rhisco.neo4j.cypher';
import React, {
  Component
} from 'react';

class Graph extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var i;
    var s;
    var g = { nodes: [], edges: [] };
    
    s = new sigma({ graph: g,
                    renderer: {
                      container: document.getElementById('graph-container'),
                      type: 'canvas'
                    },
                    settings: {
                      edgeLabelSize: 'proportional',
                      defaultEdgeColor: '',
                      defaultNodeColor: '#a7c4ec',
                      doubleClickEnabled: false,
                      enableEdgeHovering: true,
                      edgeHoverSizeRatio: 2,
                      edgeHoverExtremities: true,
                    }
                  });
    console.log("Sigma: " , s)
    var queryGetAllNodes = 'MATCH (a)-[r1]->(b) , (b)-[r2]->(c) ' +
    'WHERE NOT b.nombre="Artículo 1" OR  a.nombre="Artículo 1" OR c.nombre="Artículo 1"' +
    'return a,r1,b,r2 LIMIT 400';
    console.log("ESTO ES :" , sigma)
    sigmaJS.neo4j.cypher({ url: 'http://localhost:7474',
                         user: 'neo4j',
                         password: '123'
                      },
                      queryGetAllNodes,
                      s,
                      function (s) {
                        s.refresh();
                        return false;
                      }
                      );
    s.bind('clickNode', function (e) {
      console.log(e.data.node.label, e.data.node);
      document.getElementById("textoNombre").innerHTML = e.data.node.label;
      document.getElementById("textoDescripcion").innerHTML = e.data.node.descripcion;
      document.getElementById("textoContenido").innerHTML = e.data.node.contenido;
      document.querySelector("#textoTitulo").value = e.data.node.titulo;
      document.querySelector("#textoCapitulo").value = e.data.node.capitulo;
      document.querySelector("#textoSeccion").value = e.data.node.seccion;
      document.querySelector("#textoApartado").value = e.data.node.apartado;
      document.querySelector("#textoSubApartado").value = e.data.node.subApartado;
    });
  }
  render() {
    return (
      <div />
    )
  }

}
export default Graph;