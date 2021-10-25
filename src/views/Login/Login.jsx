import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {

  const [usuario, guardarUsuario] = useState({
    user_email: "",
    user_password: "",
    role_name: "",
  });

  const { user_email, user_password, role_name } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log(usuario);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const history = useHistory();
  const manejadorLogin = async () => {
    /* console.log("correcto");
    const res = await axios.post(
      "https://onni-bus-server-test.herokuapp.com/login",
      usuario
    );
    console.log(res);
    if (res.data.ok) {
      localStorage.setItem("token", res.data.info);
      history.push("/admin/index");
    }*/
    history.push("/admin/index");
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={onSubmit} className="text-center">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="user_email"
                    onChange={onChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="user_password"
                    onChange={onChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Rol"
                    type="text"
                    name="role_name"
                    onChange={onChange}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="info"
                  type="button"
                  onClick={manejadorLogin}
                >
                  Ingresar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
