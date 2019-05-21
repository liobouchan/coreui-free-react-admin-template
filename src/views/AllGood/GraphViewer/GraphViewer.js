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
  Collapse,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form, 
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Grapho from './Grapho';

class GraphViewer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      collapse: true,
      regulation : "Regulación Bancaria",
      articleValue : "",
      articleName : "",
      articleDescription : "",
      articleContent: "",
      title: "",
      chapter: "",
      section: "",
      apart: "",
      subApart: "",
      clickedNodeIdFromGraph: null,
      idSearchedArticle: null
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleInputChange(editEvent){
    this.setState({
      articleValue: editEvent.target.value
    })
  }

  handleSubmit(event) {
    console.log('Click en Buscar');
    event.preventDefault(); 
    console.log(this.state.articleValue);
    let articleToSearch = this.state.articleValue
    fetch("http://localhost:8080/articles/"+articleToSearch)
    .then(response => response.json())
    .then(data => {
      if(data.article != null){
        console.log("Dato del articulo: " , data.article);
        if(data.article.nombre == "null"){data.article.nombre = ""}
        if(data.article.descripcion == "null"){data.article.descripcion = ""}
        if(data.article.contenido == "null"){data.article.contenido = ""}
        if(data.article.titulo == "null"){data.article.titulo = ""}
        if(data.article.capitulo == "null"){data.article.capitulo = ""}
        if(data.article.seccion == "null"){data.article.seccion = ""}
        if(data.article.apartado == "null"){data.article.apartado = ""}
        if(data.article.subApartado == "null"){data.article.subApartado = ""}
        this.setState({
          articleName: data.article.nombre,
          articleDescription : data.article.descripcion,
          articleContent: data.article.contenido,
          title: data.article.titulo,
          chapter: data.article.capitulo,
          section: data.article.seccion,
          apart: data.article.apartado,
          subApart: data.article.subApartado,
          idSearchedArticle: data.article.id
        })
      }
    })
  }
  
  loading = () => <div className = "animated fadeIn pt-1 text-center"> Loading... </div>

  render() {

    const getNodeIdFromGraph = (clickedNodeId) => {
      this.setState({ clickedNodeIdFromGraph: clickedNodeId });
      //if(this.state.clickedNodeIdFromGraph != "null"){
        console.log("Buscar información por id(nodo) = ",this.state.clickedNodeIdFromGraph)
        fetch("http://localhost:8080/articles/node/"+this.state.clickedNodeIdFromGraph)
          .then(response => response.json())
          .then(data => {
            if(data.nombre == "null"){data.nombre = ""}
            if(data.descripcion == "null"){data.descripcion = ""}
            if(data.contenido == "null"){data.contenido = ""}
            if(data.titulo == "null"){data.titulo = ""}
            if(data.capitulo == "null"){data.capitulo = ""}
            if(data.seccion == "null"){data.seccion = ""}
            if(data.apartado == "null"){data.apartado = ""}
            if(data.subApartado == "null"){data.subApartado = ""}
            this.setState({
              articleName: data.nombre,
              articleDescription : data.descripcion,
              articleContent: data.contenido,
              title: data.titulo,
              chapter: data.capitulo,
              section: data.seccion,
              apart: data.apartado,
              subApart: data.subApartado,
              //idSearchedArticle: this.state.clickedNodeIdFromGraph
            })
          })
      //}
    }

    


    return ( 
      <div className = "animated fadeIn">
        <Row className="mt-2">
          <Col md={9} xl={9} lg={9} id="graph-container">
            <Grapho sendClickedNodeId={getNodeIdFromGraph} idArticle={this.state.idSearchedArticle}/>
          </Col>
          <Col md={3} xl={3} lg={3}>
            <div className="border-top border-left border-right pt-1"><center><h5>{this.state.regulation}</h5></center></div>
            <Card>
              <CardHeader>
                <i className="cui-info"></i>
                Búsqueda de Información
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col md={12} xl={12} lg={12}>
                      <InputGroup>
                        <Input type="text" id="articulo" name="input-articulo" placeholder="Artículo" value={this.state.articleValue} onChange={this.handleInputChange}/>
                          <InputGroupAddon addonType="append">
                            <Button type="submit" color="primary"><i className="fa fa-search"></i> Buscar</Button>
                          </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
                {/* Nombre */}
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Nombre :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textoNombre" rows="1" placeholder="Nombre del Artículo" value={this.state.articleName}/>
                  </Col>
                </FormGroup>
                {/* Descripcion */}
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Descripción :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textoDescripcion" rows="1" placeholder="Descripción del Artículo" value={this.state.articleDescription}/>
                  </Col>
                </FormGroup>
                {/* Contenido */}
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Contenido :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textoContenido" rows="9" placeholder="Contenido del Artículo" value={this.state.articleContent}/>
                  </Col>
                </FormGroup>
                {/* Card De Pertenencia */}
                <Card className="border-primary">
                  <CardHeader>
                  <div className="card-header-actions">
                    <a className="card-header-action btn btn-minimize" data-toggle="collapse" data-target="#collapseContext" onClick={this.toggle} aria-expanded="true"><i className="icon-arrow-up"></i></a>
                  </div>
                  </CardHeader>
                  <Collapse isOpen={this.state.collapse} id="collapseContext">
                    <CardBody>
                      {/* Titulo */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Título :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoTitulo" placeholder="Título de pertenencia" value={this.state.title}/>
                        </Col>
                      </FormGroup>
                      {/* Capítulo */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Capítulo :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoCapitulo" placeholder="Capítulo de pertenencia" value={this.state.chapter}/>
                        </Col>
                      </FormGroup>
                      {/* Sección */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Sección :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoSeccion" placeholder="Sección de pertenencia" value={this.state.section}/>
                        </Col>
                      </FormGroup>
                      {/* Apartado */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Apartado :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoApartado" placeholder="Apartado de pertenencia" value={this.state.apart}/>
                        </Col>
                      </FormGroup>
                      {/* subApartado */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Sub Apartado :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoSubApartado" placeholder="Sub Apartado de pertenencia" value={this.state.subApart}/>
                        </Col>
                      </FormGroup>
                    </CardBody>
                  </Collapse>
                </Card>
              </CardBody>
              <CardFooter>
                <Button type="reset" color="danger"><i className="fa fa-ban"></i> Limpiar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default GraphViewer;
