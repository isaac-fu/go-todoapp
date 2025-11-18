import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const theme = createSystem(
  defaultConfig,
  defineConfig({
    // Global styles (use semantic tokens so light/dark adapts automatically)
    globalCss: {
      body: {
        bg: "bg.subtle",
      },
    },
  })
);

export default theme;