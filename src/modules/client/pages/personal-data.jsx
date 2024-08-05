import { Typography } from "../../../common/components/Typography/index.jsx";
import { TextField } from "../../../common/components/Form/TextField/index.jsx";
import { Button } from "../../../common/components/Form/Button/index.jsx";
import { DropDown } from "../../../common/components/Form/DropDown/index.jsx";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Col, Row } from "react-grid-system";
import { useRegisterClientContext } from "../hook";
import { useEffect } from "react";

const brasilianStates = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];
export const DataPersonal = () => {
  const {
    client,
    setCity,
    setEmail,
    setNameComplete,
    setPassword,
    setPasswordForgot,
    setUf,
    submitClient,
    verifyValueRegister,
  } = useRegisterClientContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!verifyValueRegister()) {
      navigate("/register");
    }
  }, [navigate, verifyValueRegister]);

  function saveRegister(e) {
    e.preventDefault();
    submitClient();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "-15px",
        marginTop: "-35px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "-25px" }}>
          <Typography variant="h1" component="h1">
            Freelando
          </Typography>
        </div>
        <Typography variant="body" component="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Typography>
      </div>
      <form onSubmit={saveRegister}>
        <Row>
          <Col>
            <TextField
              title="Nome Completo"
              value={client.nameComplete}
              onChange={setNameComplete}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4}>
            <DropDown
              title="Estado"
              options={brasilianStates}
              value={client.uf}
              onChange={setUf}
            />
          </Col>
          <Col lg={8} md={8} sm={8}>
            <TextField title="Cidade" value={client.city} onChange={setCity} />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <TextField title="Email" value={client.email} onChange={setEmail} />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <TextField
              title="Senha"
              value={client.password}
              onChange={setPassword}
            />
          </Col>
          <Col lg={6} md={6} sm={6}>
            <TextField
              title="Repita a senha"
              value={client.passwordForgot}
              onChange={setPasswordForgot}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <RouterLink to="/register/interests">
              <Button variant="secondary">anterior</Button>
            </RouterLink>
          </Col>

          <Col lg={6} md={6} sm={6}>
            <div style={{ textAlign: "right" }}>
              <Button variant="primary">proximo</Button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};
