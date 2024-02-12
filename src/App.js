import { IsThemeProvider } from "./common/ThemeProvider/ThemeProvider";
import { Styles } from "./common/GlobalStyles/Styles";
import { Card } from "./common/components/Card/index.jsx";
import { Header } from "./common/components/Haeder/index.jsx";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Header>
        <h1>Header</h1>
      </Header>
      <Card>
        <h1>Freelando</h1>
      </Card>
    </IsThemeProvider>
  );
}

export default App;
