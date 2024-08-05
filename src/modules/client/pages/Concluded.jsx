import { Col, Row } from "react-grid-system";
import { Typography } from "../../../common/components/Typography";
import { Button } from "../../../common/components/Form/Button";
import { Link } from "react-router-dom";
import concludedClient from "../../../common/assets/imageProfile/concluded-client.png";

export const Concluded = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: "-15px",
        marginTop: "-35px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "-30px" }}>
        <Typography variant="h1" component="h1">
          Seu perfil está completo
        </Typography>
      </div>
      <Typography variant="h3" component="h2">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Typography>
      <figure>
        <img
          src={concludedClient}
          alt="conclueded"
          height={250}
          width={"350px"}
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
