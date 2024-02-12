import { IsThemeProvider } from "./common/ThemeProvider/ThemeProvider";
import { Styles } from "./common/GlobalStyles/Styles";
import { Card } from "./common/components/Card/index.jsx";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </IsThemeProvider>
  );
}

export default App;
