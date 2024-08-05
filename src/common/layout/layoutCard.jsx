import { Col, Row } from "react-grid-system";
import { Outlet } from "react-router-dom";
import { Card } from "../components/Card";
import { RegisterClientProvider } from "../../modules/client/hook";

export const LayoutBaseCard = () => {
  return (
    <RegisterClientProvider>
      <Row justify="center">
        <Col xl={6} lg={6} md={8} sm={12} style={{ margin: "2.1rem 0" }}>
          <Card border color={"gray"}>
            <Outlet />
          </Card>
        </Col>
      </Row>
    </RegisterClientProvider>
  );
};
