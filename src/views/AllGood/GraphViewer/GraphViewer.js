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

class GraphViewer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      regulation : "Regulación Bancaria"
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  
  loading = () => <div className = "animated fadeIn pt-1 text-center"> Loading... </div>

  render() {
    return ( 
      <div className = "animated fadeIn">
        <Row className="mt-2">
          <Col md={9} xl={9} lg={9} id="graph-container">
          </Col>
          <Col md={3} xl={3} lg={3}>
            <div className="border-top border-left border-right pt-1"><center><h5>{this.state.regulation}</h5></center></div>
            <Card>
              <CardHeader>
                <i class="cui-info"></i>
                Búsqueda de Información
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Col md={12} xl={12} lg={12}>
                      <InputGroup>
                        <Input type="text" id="articulo" name="input-obligacion" placeholder="Artículo"/>
                          <InputGroupAddon addonType="append">
                            <Button type="button" color="primary"><i className="fa fa-search"></i> Buscar</Button>
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
                    <Input type="textarea" name="textarea-input" id="textoNombre" rows="1" placeholder="Nombre del Artículo"/>
                  </Col>
                </FormGroup>
                {/* Descripcion */}
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Descripción :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textoDescripcion" rows="1" placeholder="Descripción del Artículo"/>
                  </Col>
                </FormGroup>
                {/* Contenido */}
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Contenido :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textoContenido" rows="9" placeholder="Contenido del Artículo"/>
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
                          <Input type="text" name="text-input" id="textoTitulo" placeholder="Título de pertenencia"/>
                        </Col>
                      </FormGroup>
                      {/* Capítulo */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Capítulo :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoCapitulo" placeholder="Capítulo de pertenencia"/>
                        </Col>
                      </FormGroup>
                      {/* Sección */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Sección :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoSeccion" placeholder="Sección de pertenencia"/>
                        </Col>
                      </FormGroup>
                      {/* Apartado */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Apartado :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoApartado" placeholder="Apartado de pertenencia"/>
                        </Col>
                      </FormGroup>
                      {/* subApartado */}
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Sub Apartado :</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="text-input" id="textoSubApartado" placeholder="Sub Apartado de pertenencia"/>
                        </Col>
                      </FormGroup>
                    </CardBody>
                  </Collapse>
                </Card>
              </CardBody>
              <CardFooter>
                <Button type="reset" color="danger"><i class="fa fa-ban"></i> Limpiar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default GraphViewer;
