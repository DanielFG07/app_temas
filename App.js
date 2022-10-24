import React from "react";
import { useColorScheme } from "react-native"; // detecta qual o tema do celular do usuário
import Home from './src/Home';

import {ThemeProvider} from 'styled-components';
import themes from "./src/themes";

export default function App() {
  // ao ver o tema do usuário ele pode devolver (dark, light, null, undefined)
  const deviceTheme = useColorScheme();

  // console.log(); usado para devolver (mostrar) o que for colocado dentro do parenteses
  
  const theme = themes[deviceTheme] || theme.dark
  
  return (
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
  );
}

