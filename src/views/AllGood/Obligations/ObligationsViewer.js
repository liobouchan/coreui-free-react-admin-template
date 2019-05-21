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
  ListGroupItemText,
  Pagination, PaginationItem, PaginationLink 
} from 'reactstrap';

const getObligationsURL = (page) =>
  `http://localhost:8080/obligations?start=${page}&size=10`;

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
      obligations : [],
      actualPage: '0',
      totalPages: '0',
      items: '0'
    }
  }
  
  renderTableData() {
    return this.state.obligations.map((obligation, index) => {
      //  const { id, name, age, email } = student //destructuring
      //  return (
      //     <tr key={id}>
      //        <td>{id}</td>
      //        <td>{name}</td>
      //        <td>{age}</td>
      //        <td>{email}</td>
      //     </tr>
      //  )
      let {nombre, descripcion, contenido, titulo, seccion, capitulo, apartado, subApartado } = obligation
      if(titulo != 'null'){titulo = titulo}else{titulo = " "};
      if(seccion != 'null'){seccion = seccion}else{seccion = " "};
      if(capitulo != 'null'){capitulo = capitulo}else{capitulo = " "};
      if(apartado != 'null'){apartado = apartado}else{apartado = " "};
      if(subApartado != 'null'){subApartado = subApartado}else{subApartado = " "};
      // console.log("nombre: ", nombre)
      // console.log("descripcion: ", descripcion)
      // console.log("contenido: ", contenido)
      // console.log("titulo: ", titulo)
      // console.log("seccion: ", seccion)
      // console.log("capitulo: ", capitulo)
      // console.log("apartado: ", apartado)
      // console.log("subApartado: ", subApartado)
      
      return(
        <ListGroupItem  action>
        <ListGroupItemHeading className="d-flex justify-content-between">
        <h5>{descripcion}</h5>
        <h6 className="text-muted">{nombre}</h6>
        </ListGroupItemHeading>
        <ListGroupItemText>
        <h6 className="font-weight-light">{titulo}</h6>
        <h6 className="font-weight-light">{capitulo}</h6>
        <h6 className="font-weight-light">{seccion}</h6>
        <h6 className="font-weight-light">{apartado}</h6>
        <h6 className="font-weight-light">{subApartado}</h6>
        <br></br>
        {contenido}
        <br></br>
        <br></br>
        </ListGroupItemText>
        </ListGroupItem>
        )
      })
    }
    
    renderPagination(){
      let actualPage = this.state.actualPage;
      let totalPages = this.state.totalPages;
      console.log(actualPage)
      console.log(totalPages)
      return(
        <Pagination>
          <PaginationItem>
            <PaginationLink previous tag="button" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink tag="button"> {actualPage+1} </PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationLink next tag="button" />
          </PaginationItem>
        </Pagination>
      )
    }
      
      loading = () => <div className = "animated fadeIn pt-1 text-center" > Loading... </div>
      
      componentWillMount(){
        fetch('http://localhost:8080/obligations?start=0&size=10')
        .then( results => {
          return results.json();
        }).then( data => {
          console.log("Obtained REST data: " , data)
          console.log("Obtained Obligations: " , data.data)
          this.setState({actualPage: data.actualPage})
          this.setState({totalPages: data.totalPages})
          this.setState({items: data.items})
          this.setState({obligations: data.data})
          console.log("Estado Actual de State: " , this.state);
          
          // let obligations = data.data.map( (obligation) => {
          //   console.log("obligation: " , obligation)
          //   console.log("obligation.nombre: " , obligation.nombre)
          //   return(
          //     obligation
          //   )
          // })
          //console.log("obligations: ", obligations);
          
          //this.setState({obligations:obligations})
          // console.log("state", this.state.obligations);
          // console.log("state.items", this.state.totalPages);
        })
      }
      
      render() {
        return ( 
          <div className = "animated fadeIn" >
          {/* {(this.state.obligations).map(item => (
            console.log("ITEM: " , item.nombre)
          ))} */}
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
          <i className="icons font-2xl cui-arrow-bottom"></i> Obligaciones 
          <small> Resultados de búsqueda</small>
          </CardHeader>
          <CardBody>
          <ListGroup>
          {this.renderTableData()}
          </ListGroup>
          </CardBody>
          <CardFooter>
          
            {this.renderPagination()}
          
          </CardFooter>
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