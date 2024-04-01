import { Col, Row } from "react-grid-system";
import React from "react";
import { Typography } from "../../common/components/Typography";
import cliente from "../../common/assets/imageProfile/client.png";
import freela from "../../common/assets/imageProfile/freela.png";
import { Link } from "../../common/components/Link";
import { Link as RouterLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ marginTop: "-26px", textAlign: "center" }}>
      <Typography variant="h1" component="h1">
        Bem Vindo!
      </Typography>
      <Typography variant="h3" component="h2">
        Com podemos te ajudar?
      </Typography>
      <Row>
        <Col md={6} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RouterLink to="interests">
              <img src={cliente} alt="moça" />
            </RouterLink>
          </div>
          <Typography variant="body" component="body">
            Sou cliente e preciso de um freela!
          </Typography>
        </Col>
        <Col md={6} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RouterLink>
              <img src={freela} alt="moça" />
            </RouterLink>
          </div>
          <Typography variant="body" component="body">
            Sou um freela e preciso de clientes!
          </Typography>
        </Col>
      </Row>
      <div>
        <Typography variant="body2" component="body2">
          Já tem uma conta?
        </Typography>
        <p>
          <Link variant="secondary">Faça Login!</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
