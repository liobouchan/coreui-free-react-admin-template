import React, {
  Component,
  lazy,
  Suspense
} from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form, 
  FormGroup,
  Progress,
  Row,
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText
} from 'reactstrap';

class ObligationsViewer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: [{descripcion: 'Esto es la descripcion',
    //           obligacion: 'Esto es la obligacion',
    //           titulo: 'Esto es el título',
    //           articulo: 'Esto es el articulo',
    //           capitulo: 'Esto es el capitulo',
    //           seccion: 'Esto es el seccion',
    //           subApartado: 'Esto es el subApartado',
    //           apartado: 'Esto es el apartado',
    //         }],
    //   items: 0,
    //   totalPaginas: 100,
    //   paginaActal: 1};
    this.state = {
      obtainedData : [],
      actualPage: '0',
      totalPages: '0',
      items: '0'
    }
  }

  loading = () => <div className = "animated fadeIn pt-1 text-center" > Loading... </div>

  componentWillMount(){
    fetch('http://localhost:8080/obligations?start=0&size=11')
    .then( results => {
      console.log("results: " , results)
      return results.json();
    }).then( data => {
      console.log("data: " , data)
      console.log("data.data: " , data.data)
      this.setState({actualPage: data.actualPage})
      this.setState({totalPages: data.totalPages})
      this.setState({items: data.items})
      let obligations = data.data.map( (obligation) => {
        console.log("obligation: " , obligation)
        console.log("obligation.nombre: " , obligation.nombre)
        return(
          obligation
        )
      })
      console.log("obligations: ", obligations);
      
      this.setState({obtainedData:obligations})
      console.log("state", this.state.obtainedData);
      console.log("state.items", this.state.totalPages);
    })
  }

  render() {
    return ( 
      <div className = "animated fadeIn" >
        {console.log("AQUIIII" , this.state)}
        {console.log("AQUI OBTAINED DATA" , this.state.obtainedData)}
        {(this.state.obtainedData).map(item => (
            console.log("ITEM: " , item.nombre)
          ))}
        {console.log("AQUI OBTAINED DATA.DATA" , this.state.obtainedData[0])}
        <Row className= "mt-3">
          <Col md={12} xl={12} lg={12}>
            <Card>
              <CardHeader>
                <strong>Búsqueda de obligaciones específicas</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm={6} md={6} lg={6} xl={6}>
                    <Row>
                      <Col sm={3} md={3} lg={3} xl={3}>
                      <div className="callout callout-info">
                        <h5 className="text-muted">
                          Obligaciones
                        </h5>
                        <strong className="h4">{this.state.items}</strong>
                      </div>
                      </Col>
                      <Col sm={9} md={9} lg={9} xl={9}>
                        <Form>
                          <FormGroup row>
                          <Col md={12} xl={12} lg={12} className="mt-3">
                            <InputGroup>
                              <Input type="text" id="input-obligacion" name="input-obligacion" placeholder="Obligacion" />
                              <InputGroupAddon addonType="append">
                                <Button type="button" color="primary"><i className="fa fa-search"></i> Buscar</Button>
                              </InputGroupAddon>
                            </InputGroup>
                          </Col>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12} xl={12} lg={12}>
                    <Col md={12} xl={12} lg={12}>
                      <Card className="border-primary">
                        <CardHeader>
                          <i class="icons font-2xl cui-arrow-bottom"></i> Obligaciones 
                          <small> Resultados de búsqueda</small>
                        </CardHeader>
                        <CardBody>
                          <ListGroup>
                            <ListGroupItem  action>
                              <ListGroupItemHeading className="d-flex justify-content-between">
                                {/* <h5>{this.state.data[0].descripcion}</h5> */}
                                {/* <h6 className="text-muted">{this.state.data[0].articulo}</h6> */}
                              </ListGroupItemHeading>
                              <ListGroupItemText>
                                {/* {this.state.data[0].obligacion} */}
                                <br></br>
                                <br></br>
                                <br></br>
                                {/* <h6 class="font-weight-light">Título Primero Bis - {this.state.data[0].titulo}</h6> */}
                                {/* <h6 class="font-weight-light">Capítulo: - {this.state.data[0].capitulo}</h6> */}
                                {/* <h6 class="font-weight-light">Sección: - {this.state.data[0].seccion}</h6> */}
                                {/* <h6 class="font-weight-light">Apartado: - {this.state.data[0].apartado}</h6> */}
                                {/* <h6 class="font-weight-light">SubApartado: - {this.state.data[0].subApartado}</h6> */}
                              </ListGroupItemText>
                            </ListGroupItem>
                          </ListGroup>
                        </CardBody>
                      </Card>
                    </Col>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

}
 export default ObligationsViewer;