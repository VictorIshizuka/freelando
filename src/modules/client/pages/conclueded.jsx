import { Col, Row } from "react-grid-system";
import { Typography } from "../../../common/components/Typography";
import { Button } from "../../../common/components/Form/Button";
import { Link } from "react-router-dom";
import concluededClient from "../../../common/assets/imageProfile/conclueded-client.png";

export const Conclueded = () => {
  return (
    <div style={{ marginTop: "-26px" }}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1">
          Seu perfil está completo
        </Typography>
        <Typography variant="h3" component="h2">
          Agora é só começar a se conectar com os melhores freelancers do
          mercado!
        </Typography>
      </div>
      <figure>
        <img
          src={concluededClient}
          alt="conclueded"
          height={350}
          width={"100%"}
          style={{ paddingTop: "20px" }}
        />
      </figure>
      <Row style={{ padding: "20px 16px 0 10px" }} justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
          <Link to="/register">
            <Button variant="secondary">Volte para a home</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
