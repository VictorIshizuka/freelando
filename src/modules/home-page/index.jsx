/* eslint-disable react/jsx-key */
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";

import homePageImage from "../../common/assets/homepage/homePage.png";
import { Typography } from "../../common/components/Typography";
import { Button } from "../../common/components/Form/Button";
import { Card } from "../../common/components/Card";
import { IconCertificate } from "../../common/assets/icons/benefits/icon-certificate";
import { IconCheckout } from "../../common/assets/icons/benefits/icon-checkout";
import { IconClient } from "../../common/assets/icons/benefits/icon-client";
import { IconService } from "../../common/assets/icons/benefits/icon-service";
import { IconSecurity } from "../../common/assets/icons/benefits/icon-security";
import { IconConnection } from "../../common/assets/icons/benefits/icon-connection";
import { IconProjects } from "../../common/assets/icons/benefits/icon-projects";
import { IconRelationships } from "../../common/assets/icons/benefits/icon-relationships";
import { section1, section2, section3, section4, section5 } from "./constants";

const icons = [
  <IconCertificate />,
  <IconConnection />,
  <IconService />,
  <IconSecurity />,
];
const icons2 = [
  <IconClient />,
  <IconRelationships />,
  <IconProjects />,
  <IconCheckout />,
];
export const HomePage = () => {
  return (
    <>
      <Row align="center">
        <Col>
          <div
            style={{
              width: "500px",
              color: "#D93114",
              textAlign: "left",
            }}
          >
            <Typography component="h1" variant="h1">
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
          <div style={{ margin: "10px" }}>
            <img
              src={homePageImage}
              width={"500px"}
              style={{ marginTop: "20px" }}
              alt="imagem home-page"
            />
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
          {section1.map((card, index) => {
            return (
              <Col key={index}>
                <Card>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    {icons[index]}
                    <Typography component="h3" variant="p">
                      {card.title}
                    </Typography>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
      <section>
        <Row justify="center">
          <Typography component="h2" variant="h2">
            Vantagens para freelas
          </Typography>
        </Row>
        <Row justify="center">
          {section2.map((card, index) => {
            return (
              <div style={{ width: "550px", margin: "10px" }}>
                <Card key={index} background={"green"} color={"green"}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>{icons2[index]}</div>
                    <Typography component="h3" variant="p">
                      {card.title}
                    </Typography>
                  </div>
                </Card>
              </div>
            );
          })}
        </Row>
      </section>
      <section>
        <div style={{ marginBottom: "20px" }}>
          <Row justify="center">
            <Typography component="h2" variant="h2">
              Quais habilidades você encontra por aqui?
            </Typography>
          </Row>
          <Row justify="center">
            {section3.map((chip, index) => {
              return (
                <div style={{ margin: "10px" }}>
                  <Card
                    key={index}
                    border
                    color={"gray"}
                    background={"gray"}
                    chip
                  >
                    {chip.title}
                  </Card>
                </div>
              );
            })}
          </Row>
          <Row justify="center">
            {section4.map((chip, index) => {
              return (
                <div style={{ margin: "10px" }}>
                  <Card
                    key={index}
                    border
                    color={"gray"}
                    background={"gray"}
                    chip
                  >
                    {chip.title}
                  </Card>
                </div>
              );
            })}
          </Row>
          <Row justify="center">
            {section5.map((chip, index) => {
              return (
                <div style={{ margin: "10px" }}>
                  <Card
                    key={index}
                    border
                    color={"gray"}
                    background={"gray"}
                    chip
                  >
                    {chip.title}
                  </Card>
                </div>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};
