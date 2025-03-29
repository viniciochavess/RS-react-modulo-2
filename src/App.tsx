import { Button } from "./components/Button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

function App() {


  return (
   
    <ThemeProvider theme={defaultTheme}>
      <Button variant="default"/>
      <Button variant="danger"/>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
    </ThemeProvider>
   
  )
}

export default App
