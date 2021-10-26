import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row,
  Modal,
} from "reactstrap";

import Header from "../../components/Headers/Header.js";

export default class pacientes extends React.Component {
  state = {
    listaPacientes: [],
    token: "",
    pacientes: {
      id: "",
      cedula: "",
      nombre: "",
      telefono: "",
      correo: "",
    },
  };

  componentDidMount() {
    this.listarPacientes();
    localStorage.setItem("edit", "");
  }

  listarPacientes = () => {
    this.token = localStorage.getItem("token");
    axios
      .get("https://vache-clientes-api.herokuapp.com/clientes")
      .then((response) => {
        console.log(response);
        this.setState({
          listaPacientes: response.data.info,
        });
        console.log("Pacientes");
        console.log(this.state.control);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  cargarInformacion = (paciente) => {
    localStorage.setItem("codigo",paciente.producto);
    localStorage.setItem("nombre", paciente.precio);
    localStorage.setItem("descripcion", paciente.descripcion);
    localStorage.setItem("edit", "si");
  };

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-right">
                    <Button
                      className="btn-info btn-icon mr-4"
                      to="/admin/insertarPedido"
                      tag={Link}
                    >
                      <i className="ni ni-fat-add" />
                      <span className="btn-inner--text">Añadir</span>
                    </Button>
                  </div>
                  <h2>Gestión de Pacientes</h2>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Cedula</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listaPacientes.map((paciente, i) => {
                      return (
                        <tr>
                          <td>{paciente.cedula}</td>
                          <td>{paciente.nombre}</td>
                          <td>{paciente.telefono}</td>
                          <td>{paciente.correo}</td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                key={i}
                                onClick={this.cargarInformacion.bind(
                                  this,
                                  paciente
                                )}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu
                                className="dropdown-menu-arrow"
                                right
                              >
                                <DropdownItem
                                  href="/admin/actualizarBovino/"
                                  key={i}
                                  onClick={this.cargarInformacion.bind(
                                    this,
                                    paciente
                                  )}
                                >
                                  <i className="ni ni-ui-04" />
                                  Actualizar
                                </DropdownItem>
                                <Modal
                                  className="modal-dialog-centered modal-info"
                                  contentClassName="bg-gradient-warning"
                                  isOpen={this.state.notificationModal}
                                >
                                  <div className="modal-header">
                                    <button
                                      aria-label="Close"
                                      className="close"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() =>
                                        this.toggleModal("notificationModal")
                                      }
                                    >
                                      <span aria-hidden={true}>X</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="py-3 text-center">
                                      <i className="ni ni-bell-55 ni-3x" />
                                      <h2 className="heading mt-4">Cuidado!</h2>
                                      <p>
                                        Estas a punto de eliminar un bovino de
                                        tu inventario
                                      </p>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <Button
                                      className="btn-white"
                                      href="/admin/Novillonas/"
                                      color="default"
                                      type="button"
                                      onClick={() =>
                                        this.eliminarNovillonas(
                                          localStorage.getItem("chapeta")
                                        )
                                      }
                                    >
                                      Eliminar
                                    </Button>
                                    <Button
                                      className="text-white ml-auto"
                                      color="link"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() =>
                                        this.toggleModal("notificationModal")
                                      }
                                    >
                                      Cerrar
                                    </Button>
                                  </div>
                                </Modal>
                                <DropdownItem
                                  onClick={() =>
                                    this.toggleModal("notificationModal")
                                  }
                                >
                                  <i className="ni ni-fat-remove" />
                                  Eliminar
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
