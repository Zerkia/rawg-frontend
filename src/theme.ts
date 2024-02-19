import { extendTheme, type ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode("black", "white")(props),
      bg: mode("gray.50", "purple.800")(props)
    },
    header: {
      bg: mode("gray.200", "purple.900")(props)
    },
    aside: {
      bg: mode("gray.200", "purple.900")(props)
    }
  })
}

const theme = extendTheme({ config, styles });

export default theme;
