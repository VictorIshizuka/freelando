import { IsThemeProvider } from "./common/ThemeProvider/ThemeProvider";
import { Styles } from "./common/GlobalStyles/Styles";
import { Card } from "./common/components/Card/index.jsx";
import { Header } from "./common/components/Header/index.jsx";
import { Typography } from "./common/components/Typography/index.jsx";
import { TextField } from "./common/components/Form/TextField/index.jsx";
import {
  Footer,
  ItemListInline,
  ListInline,
} from "./common/components/Footer/index.jsx";
import { Col, Container, Row } from "react-grid-system";
import { Button } from "./common/components/Form/Button/index.jsx";
import logo from "./common/assets/Logo-02 1.png";
import it from "./common/assets/Instragam 1.png";
import tt from "./common/assets/Twiter 1.png";
import th from "./common/assets/Twitch.png";
import wa from "./common/assets/Whatsapp 1.png";
import { Link } from "./common/components/Link/index.jsx";
import { DropDown } from "./common/components/Form/DropDown/index.jsx";
function App() {
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

  return (
    <IsThemeProvider>
      <Styles />
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <img src={logo} alt="logo" />
              {/* criar component de logo */}
            </Col>
            <Col>
              <div style={{ textAlign: "right" }}>
                <Link>Login</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container style={{ margin: "50px 0" }}>
        <Row justify="center" style={{ paddingLeft: "200px" }}>
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h1" component="h1">
                Freelando
              </Typography>
              <Typography variant="body" component="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Typography>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <TextField title="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <DropDown title="Estado" options={brasilianStates} />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <TextField title="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <TextField title="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variant="secondary">anterior</Button>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Button variant="primary">proximo</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <Container>
          <Row align="center">
            <Col justify="center">
              <img
                src={logo}
                alt="logo"
                style={{ height: "40px", marginTop: "10px" }}
              />
              {/* <FreelandoLogo height={40} width={176} /> */}
              <Typography variant="subtitle1" component="body">
                <div style={{ marginLeft: "8px" }}>Desenvolvido por eu.</div>
              </Typography>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Typography variant="subtitle1" component="body">
                Acesse nossas redes:
              </Typography>

              <ListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <img src={wa} />

                    {/* <IconeWhatsApp /> */}
                  </a>
                </ItemListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <img src={th} /> {/* <IconeTwitch /> */}
                  </a>
                </ItemListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <img src={it} /> {/* <IconeInstagram /> */}
                  </a>
                </ItemListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <img src={tt} />
                    {/* <IconeTwitter /> */}
                  </a>
                </ItemListInline>
              </ListInline>
            </Col>
          </Row>
        </Container>
      </Footer>
    </IsThemeProvider>
  );
}

export default App;
