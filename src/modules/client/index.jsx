import { Col, Row } from "react-grid-system";
import React, { useState } from "react";
import { Typography } from "../../common/components/Typography";
import { Button } from "../../common/components/Form/Button";
import Radio from "../../common/components/Form/Radio";
import { Link as RouterLink } from "react-router-dom";

export const GroupRadio = ({ options, value, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          valor={option.value}
          label={option.label}
          checked={option.value === value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};

const RegisterClient = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1" component="h1">
        Crie Cadastro
      </Typography>
      <Typography variant="h3" component="h2">
        Qual a área de interesse
      </Typography>
      <Row>
        <Col>conteudo</Col>
      </Row>
      <Row justify="between">
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "left" }}>
            <RouterLink to="/cadastro">
              <Button variant="secondary">anterior</Button>
            </RouterLink>
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Button variant="primary">proximo</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterClient;
