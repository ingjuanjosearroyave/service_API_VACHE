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

export default class pedidos extends React.Component {
  state = {
    listaPedidos: [],
    token: "",
    pedidos: {
      id: "",
      producto: "",
      precio: "",
      descripcion: "",
    },
  };

  componentDidMount() {
    this.listarPedidos();
    localStorage.setItem("edit", "");
  }

  listarPedidos = () => {
    this.token = localStorage.getItem("token");
    axios
      .get("https://vache-pedidos-api.herokuapp.com/pedidos")
      .then((response) => {
        console.log(response);
        this.setState({
          listaPedidos: response.data.info,
        });
        console.log("Pedidos");
        console.log(this.state.control);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  cargarInformacion = (pedido) => {
    localStorage.setItem("codigo", pedido.producto);
    localStorage.setItem("nombre", pedido.precio);
    localStorage.setItem("descripcion", pedido.descripcion);
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
                  <h2>Gestión de Pedidos</h2>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listaPedidos.map((pedido, i) => {
                      return (
                        <tr>
                          <td>{pedido.producto}</td>
                          <td>{pedido.precio}</td>
                          <td>{pedido.descripcion}</td>
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
                                  pedido
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
                                    pedido
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
