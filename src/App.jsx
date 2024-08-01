import { RouterProvider } from "react-router-dom";
import { router } from "./common/routes";
import { IsThemeProvider } from "./common/ThemeProvider/ThemeProvider";
import { Styles } from "./common/globalStyles/Styles";
import { AuthProvider } from "./modules/auth/hook";

function App() {
  return (
    <IsThemeProvider>
      <Styles />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </IsThemeProvider>
  );
}

export default App;
