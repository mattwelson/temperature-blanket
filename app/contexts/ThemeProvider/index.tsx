import { defaultTheme } from "@/lib/theme";
import { ReactNode, createContext, useContext } from "react";

/**
 * Note file is not currently used
 */

export const ThemeContext = createContext({ theme: defaultTheme });

export const ThemeProvider = ThemeContext.Provider;

export default function useThemeContext() {
  return useContext(ThemeContext) ?? defaultTheme;
}
