import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { Card } from "../../../common/components/Card";
import { Typography } from "../../../common/components/Typography";
import { TextField } from "../../../common/components/Form/TextField";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link } from "../../../common/components/Link";
import { Button } from "../../../common/components/Form/Button";
import { useAuthContext } from "../hook";

const FormStyled = styled.form`
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.primary.a};
  padding-bottom: ${props => props.theme.gaps.l};
`;

export const Login = () => {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const { login, isLogged } = useAuthContext();
  const navigate = useNavigate();

  const onSubmitLogin = e => {
    console.log(isLogged);
    e.preventDefault();
    login(isEmail, isPassword);
    setTimeout(() => {
      navigate("/area-logada/home");
    }, 500);
  };
  return (
    <Container>
      <Row justify="center">
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "80px 0" }}
        >
          <Card>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h1" component="h1">
                Login
              </Typography>
            </div>
            <FormStyled onSubmit={onSubmitLogin}>
              <TextField
                title="Email"
                value={isEmail}
                onChange={setIsEmail}
                type="text"
              />
              <TextField
                title="Password"
                value={isPassword}
                onChange={setIsPassword}
                type="password"
              />
              <div style={{ textAlign: "right" }}>
                <RouterLink to="">
                  <Typography component="legend" variant="legend">
                    Esqueceu a sua senha?
                  </Typography>
                </RouterLink>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button>Login</Button>
              </div>
            </FormStyled>
            <div style={{ textAlign: "center" }}>
              <Typography component="legend" variant="legend">
                Ainda não tem a sua conta no Freelando?
              </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link variant="secondary">
                <RouterLink to="/register">
                  Cadastre-se clicando aqui!
                </RouterLink>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
