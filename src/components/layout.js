import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import GlobalStyle from "./globalStyle"
import Xray from "react-x-ray"

export default function Layout({ children }) {
  return (
    <React.StrictMode>
   <Xray>
      <ThemeProvider theme={theme}>
        
        <Box >
        
                    <Navbar />
          <GlobalStyle />

          <Box paddingTop = '64px'>{children}</Box>

         <Footer /> 
        </Box>
        
        
      </ThemeProvider>
   </Xray>
    </React.StrictMode>
  )
}
