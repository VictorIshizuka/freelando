import { Col, Row } from "react-grid-system";
import homePage from "../../common/assets/homepage/homePage.png";
import { Typography } from "../../common/components/Typography";
import { Button } from "../../common/components/Form/Button";
import { Card } from "../../common/components/Card";
import { IconCertificate } from "../../common/assets/icons/benefits/icon-certificate";
import { IconCheckout } from "../../common/assets/icons/benefits/icon-checkout";
import { IconClient } from "../../common/assets/icons/benefits/icon-client";
import { IconConnection } from "../../common/assets/icons/benefits/icon-connection";
import { IconProjects } from "../../common/assets/icons/benefits/icon-projects";
import { IconRelationships } from "../../common/assets/icons/benefits/icon-relationships";
import { IconSecurity } from "../../common/assets/icons/benefits/icon-security";
import { IconService } from "../../common/assets/icons/benefits/icon-service";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Row align="center">
        <Col>
          <div
            style={{
              width: "494px",
              color: "#D93114",
              textAlign: "left",
              padding: "82px 0px 82px 40px",
            }}
          >
            <Typography component="h2" variant="h2">
              Uma ponte entre os freelas mais talentos e os projetos mais
              interessantes
            </Typography>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link to={"/register"}>
                <Button variant="primary">Quero me cadastrar</Button>
              </Link>
              <Link to={"/login"}>
                <Button variant="secondary">Login</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col>
          <div style={{ padding: "32px 32px 32px 0px" }}>
            <img src={homePage} alt="imagem homepage" />
          </div>
        </Col>
      </Row>
      <section>
        <Row justify="center">
          <Typography component="h2" variant="h2">
            Vantagens para contratantes
          </Typography>
        </Row>
        <Row>
          <Col>
            <Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconCertificate />
                <Typography component="h3" variant="p">
                  Profissionais qualificados
                </Typography>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconConnection />
                <Typography component="h3" variant="p">
                  Múltiplas especialidades
                </Typography>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconService />
                <Typography component="h3" variant="p">
                  Atendimento e agilidade
                </Typography>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconSecurity />
                <Typography component="h3" variant="p">
                  Simplicidade e Segurança
                </Typography>
              </div>
            </Card>
          </Col>
        </Row>
      </section>
      <section>
        <Row justify="center">
          <Typography component="h2" variant="h2">
            Vantagens para freelas
          </Typography>
        </Row>
        <Row>
          <Col>
            <Card>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <IconClient />
                <Typography component="h3" variant="p">
                  Clientes verificados
                </Typography>
              </div>
            </Card>
            <Card>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <IconRelationships />
                <Typography component="h3" variant="p">
                  Atendimento e agilidade
                </Typography>
              </div>
            </Card>
          </Col>

          <Col>
            <Card>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <IconCheckout />
                <Typography component="h3" variant="p">
                  Remuneração supervisionada
                </Typography>
              </div>
            </Card>
            <Card>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <IconProjects />
                <Typography component="h3" variant="p">
                  Projetos interessantes
                </Typography>
              </div>
            </Card>
          </Col>
        </Row>
      </section>
      <section>
        <Row justify="center">
          <Typography component="h2" variant="h2">
            Remuneração supervisionada
          </Typography>
        </Row>
      </section>
    </>
  );
};
