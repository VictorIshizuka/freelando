import { Col, Row } from "react-grid-system";

import styled from "@emotion/styled";
import { Card } from ".././common/components/Card";

import erro404 from "../common/assets/erro-404.png";

import { Link } from "react-router-dom";
import { Typography } from "../common/components/Typography";
import { Button } from "../common/components/Form/Button";

const ImagemEstilizada = styled.img`
  max-width: 100%;
`;

export const Pagina404 = () => {
  return (
    <Row justify="center">
      <Col
        xxx={6}
        xxl={6}
        xl={6}
        lg={6}
        md={8}
        sm={12}
        style={{ marginTop: "48px" }}
      >
        <Card>
          <Typography variant="h1" component="h1">
            Ops... Página não encontrada :(
          </Typography>
          <figure>
            <ImagemEstilizada src={erro404} />
          </figure>
          <Typography variant="body" component="body">
            Não encontramos a página que você está buscando, mas temos muitas
            outras para você navegar!
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Link to="/">
              <Button variant="secundary">Voltar para a home</Button>
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
