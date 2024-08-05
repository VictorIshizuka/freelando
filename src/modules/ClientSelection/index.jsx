import { Col, Row } from "react-grid-system";
import { Typography } from "../../common/components/Typography";
import cliente from "../../common/assets/imageProfile/client.png";
import freela from "../../common/assets/imageProfile/freela.png";
import { Link } from "../../common/components/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useRegisterClientContext } from "../client/hook";

const ClientSelection = () => {
  const navigate = useNavigate();
  const { setProfile } = useRegisterClientContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: "-25px",
        marginTop: "-35px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "-30px" }}>
        <Typography variant="h1" component="h1">
          Bem Vindo!
        </Typography>
      </div>
      <Typography variant="h3" component="h2">
        Como podemos te ajudar?
      </Typography>
      <Row>
        <Col md={6} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RouterLink
              to="interests"
              onClick={() => {
                setProfile("client");
              }}
            >
              <img src={cliente} width={"150px"} alt="freela" />
            </RouterLink>
          </div>
          <Typography variant="body" component="body">
            Sou cliente e preciso de um freela!
          </Typography>
        </Col>
        <Col md={6} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RouterLink>
              <img src={freela} width={"150px"} alt="cliente" />
            </RouterLink>
          </div>
          <Typography variant="body" component="body">
            Sou um freela e preciso de clientes!
          </Typography>
        </Col>
      </Row>
      <div>
        <Typography variant="body2" component="body2">
          Já tem uma conta?
        </Typography>
        <p>
          <Link
            onClick={() => {
              navigate("/login");
            }}
            variant="secondary"
          >
            Faça Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ClientSelection;
