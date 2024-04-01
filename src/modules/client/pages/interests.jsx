import { Col, Row } from "react-grid-system";
import React from "react";
import { Typography } from "../../../common/components/Typography";
import { Button } from "../../../common/components/Form/Button";
import Radio from "../../../common/components/Form/Radio";
import { Link as RouterLink } from "react-router-dom";

// export const GroupRadio = ({ options, value, onChange }) => {
//   return (
//     <div>
//       {options.map((option) => (
//         <Radio
//           key={option.value}
//           valor={option.value}
//           label={option.label}
//           checked={option.value === value}
//           onClick={() => onChange(option.value)}
//         />
//       ))}
//     </div>
//   );
// };

const RegisterClient = () => {
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
          <Radio label="TI e Programação" />
          <Radio label="Design e Multimídia" />
          <Radio label="Revisão" />
          <Radio label="Tradução" />
          <Radio label="Transcrição" />
          <Radio label="Marketing" />
        </Col>
      </Row>
      <Row justify="between" style={{ padding: "20px 16px 0 10px" }}>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "left" }}>
            <RouterLink to="/cadastro">
              <Button variant="secondary">anterior</Button>
            </RouterLink>
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <RouterLink to="/cadastro/dados-pessoais">
              <Button variant="primary">proximo</Button>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterClient;
