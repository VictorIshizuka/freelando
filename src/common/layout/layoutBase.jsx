import { Col, Container, Row } from "react-grid-system";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Logo from "../assets/icons/Logo.png";
import IconInstagram from "../assets/icons/Instragam.png";
import IconTwitch from "../assets/icons/Twitch.png";
import IconTwitter from "../assets/icons/Twiter.png";
import IconWhatsApp from "../assets/icons/Whatsapp.png";
//import { Link } from "../components/Link";
import { Footer, ItemListInline, ListInline } from "../components/Footer";
import { Typography } from "../components/Typography";
import { useAuthContext } from "../../modules/auth/hook";

export function LayoutBase({ children }) {
  const { logout, isLogged } = useAuthContext();
  return (
    <>
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <img src={Logo} alt="Logo" height={40} />
            </Col>
            <Col style={{ textAlign: "right" }}>
              {isLogged && <Link onClick={() => logout()}>Sair</Link>}
            </Col>
          </Row>
        </Container>
      </Header>
      <Container>
        <Outlet />
        {children}
      </Container>
      <Footer>
        <Container>
          <div style={{ marginTop: "-35px", marginBottom: "-35px" }}>
            <Row align="center">
              <Col>
                <img src={Logo} alt="Logo" height={30} width={140} />
                <Typography variant="legend" component="legend">
                  Desenvolvido por Eu. Projeto fictício sem fins comerciais.
                </Typography>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Typography variant="legend" component="legend">
                  Acesse nossas redes:
                </Typography>
                <ListInline>
                  <ItemListInline>
                    <a href="/" aria-label="Link para o WhatsApp">
                      <img src={IconWhatsApp} />
                    </a>
                  </ItemListInline>
                  <ItemListInline>
                    <a href="/" aria-label="Link para a Twitch">
                      <img src={IconTwitter} />
                    </a>
                  </ItemListInline>
                  <ItemListInline>
                    <a href="/" aria-label="Link para a Instagram">
                      <img src={IconInstagram} />
                    </a>
                  </ItemListInline>
                  <ItemListInline>
                    <a href="/" aria-label="Link para a Twitter">
                      <img src={IconTwitch} />
                    </a>
                  </ItemListInline>
                </ListInline>
              </Col>
            </Row>
          </div>
        </Container>
      </Footer>
    </>
  );
}

//export default LayoutBase
