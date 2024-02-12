import { IsThemeProvider } from "./common/ThemeProvider/ThemeProvider";
import { Styles } from "./common/GlobalStyles/Styles";
import { Card } from "./common/components/Card/index.jsx";
import { Header } from "./common/components/Haeder/index.jsx";
import { Typography } from "./common/components/Typography/index.jsx";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Header>
        <Typography variant="h1" component="h1">
          Header
        </Typography>
      </Header>
      <Card>
        <Typography variant="h1" component="h1">
          Freelando
        </Typography>
        <Typography variant="body" component="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Typography>
      </Card>
    </IsThemeProvider>
  );
}

export default App;
