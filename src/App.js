import { RouterProvider } from "react-router-dom"
import React from "react"
import { router } from "./common/routes"
import { IsThemeProvider } from "./common/ThemeProvider/ThemeProvider"
import { Styles } from "./common/GlobalStyles/Styles"

function App() {
	return (
		<IsThemeProvider>
			<Styles />
			<RouterProvider router={router} />
		</IsThemeProvider>
	)
}

export default App
