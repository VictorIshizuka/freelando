import { Col, Row } from "react-grid-system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../../common/components/Typography";
import { Button } from "../../../common/components/Form/Button";
import { Link as RouterLink } from "react-router-dom";
import { GroupRadio } from "../../../common/components/Form/Radio/groupRadio";
import { useRegisterClientContext } from "../hook";

const options = [
  {
    value: 1,
    label: "TI e Programação",
  },
  {
    value: 2,
    label: "Design e Multimídia",
  },
  {
    value: 3,
    label: "Revisão",
  },
  {
    value: 4,
    label: "Tradução",
  },
  {
    value: 5,
    label: "Transcrição",
  },
  {
    value: 6,
    label: "Marketing",
  },
];
export const InterestsClient = () => {
  const navigate = useNavigate();
  const { client, setInterest, verifyValueRegister } =
    useRegisterClientContext();
  useEffect(() => {
    if (client.profile === "") {
      verifyValueRegister();
    }
  }, [navigate, verifyValueRegister]);
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
            value={client.interest}
            onChange={setInterest}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ padding: "10px 0px" }}>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "center", padding: "5px" }}>
            <RouterLink to="/register">
              <Button variant="secondary">anterior</Button>
            </RouterLink>
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "center", padding: "5px" }}>
            <RouterLink to="/register/personal-data">
              <Button variant="primary">proximo</Button>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};
