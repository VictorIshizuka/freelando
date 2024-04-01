import { Col, Row } from "react-grid-system";
import React, { useState } from "react";
import { Typography } from "../../../common/components/Typography";
import { Button } from "../../../common/components/Form/Button";
import { Link as RouterLink } from "react-router-dom";
import { GroupRadio } from "../../../common/components/Form/Radio/groupRadio";

const RegisterClient = () => {
  const [isOption, setIsOption] = useState("");
  const options = [
    {
      valor: 1,
      label: "TI e Programação",
    },
    {
      valor: 2,
      label: "Design e Multimídia",
    },
    {
      valor: 3,
      label: "Revisão",
    },
    {
      valor: 4,
      label: "Tradução",
    },
    {
      valor: 5,
      label: "Transcrição",
    },
    {
      valor: 6,
      label: "Marketing",
    },
  ];

  return (
    <div style={{ marginTop: "-26px" }}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1">
          Crie Cadastro
        </Typography>
        <Typography variant="h3" component="h2">
          Qual a área de interesse
        </Typography>
      </div>
      <Row>
        <Col>
          <GroupRadio
            options={options}
            value={isOption}
            onChange={setIsOption}
          />
        </Col>
      </Row>
      <Row justify="between" style={{ padding: "20px 16px 0 10px" }}>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "left" }}>
            <RouterLink to="/register">
              <Button variant="secondary">anterior</Button>
            </RouterLink>
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <RouterLink to="/register/personal-data">
              <Button variant="primary">proximo</Button>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterClient;
