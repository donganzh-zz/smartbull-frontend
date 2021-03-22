/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
import classnames from "classnames";
import ConfluxPortal from '../components/ConfluxPortal.js';
import { NavLink } from "react-router-dom";

import '../../assets/css/agree-to-term.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,

  Container,
  Col,
} from "reactstrap";

const Login = () => {
  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  
  const handleClick = (e) => {
    if(!agree) e.preventDefault()
  }

  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });
  return (
    <>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form">
              <Card className="card-login card-white">
                <CardHeader>
                  <img
                    alt="..."
                    src={require("assets/img/conflux-full.png").default}
                  />
                </CardHeader>
                <CardBody>
                  <div>
                    <input type="checkbox" id="agree" onChange={checkboxHandler} />
                    <label htmlFor="agree">      I agree to <b>terms and conditions</b></label>*
                  </div>
                  
                
                </CardBody>
                <CardFooter>
                <NavLink 
                    onClick={handleClick}
                    to="/admin/dashboard" >
                  <Button
                    block
                    disabled={!agree}
                    className="mb-3"
                    color="primary"
                    size="lg"
                  >
                         TRADE WITH CFX
                  </Button>
                  </NavLink>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;
