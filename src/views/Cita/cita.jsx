import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";

const cita = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <div className="text-right">
                <br/>
                <Button
                  className="btn-info btn-icon mr-4"
                  to="/admin/addBuses"
                  tag={Link}
                >
                  <i className="ni ni-fat-add" />
                  <span className="btn-inner--text">Añadir</span>
                </Button>
              </div>
              <CardHeader className="border-0">
                <h3 className="mb-0">Gestión de Citas</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">cita</th>
                    <th scope="col">cita</th>
                    <th scope="col">cita</th>
                    <th scope="col">cita</th>
                    <th scope="col">Acciones</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem href="/admin/actualizarBovino/">
                            <i className="ni ni-ui-04" />
                            Actualizar
                          </DropdownItem>
                          <DropdownItem href="#pablo">
                            <i className="ni ni-fat-remove" />
                            Eliminar
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>  
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default cita;