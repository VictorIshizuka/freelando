import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { Typography } from "../../common/components/Typography";
import { TextField } from "../../common/components/Form/TextField";
import { Button } from "../../common/components/Form/Button";
import background from "../../common/assets/imageProfile/perfil-bg.png";
import avatar from "../../common/assets/imageProfile/avatar.png";
import { Card } from "../../common/components/Card";
import { useEffect } from "react";
import http from "../../common/http";

const TitleStyled = styled.h1`
  background: url(${background}) no-repeat;
  margin-top: 0;
  font-weight: 600;
  font-size: 40px;
  background-position: center;
  line-height: 246px;
  text-align: center;
`;

const ImgStyled = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;

export const Profile = () => {
  useEffect(() => {
    http
      .get("profile")
      .then(res => res.data)
      .catch(erro => console.error(erro));
  }, []);

  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <TitleStyled>Perfil</TitleStyled>
      <Container>
        <form onSubmit={onSubmit}>
          <Row>
            <Col sm={12} md={5}>
              <Card>
                <div style={{ textAlign: "center" }}>
                  <Typography component="h3" variant="h3">
                    Nome Completo
                  </Typography>
                  <ImgStyled src={avatar} />
                </div>
              </Card>
            </Col>
            <Col sm={12} md={7}>
              <Typography component="h3" variant="h3">
                Revise seus dados
              </Typography>
              <TextField title="Nome" />
              <TextField title="Sobrenome" />
              <Row>
                <Col sm={12} md={6}>
                  <TextField title="Celular" />
                </Col>
                <Col sm={12} md={6}>
                  <TextField title="E-mail" type="email" />
                </Col>
                <Col sm={12} md={6}>
                  <TextField title="Código postal" />
                </Col>
                <Col sm={12} md={6}>
                  <TextField title="País" />
                </Col>
                <Col sm={12} md={6}>
                  <Button>Salvar</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};
