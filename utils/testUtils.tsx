import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../pages/components/theme";

export const renderComponent = (Component: React.ComponentType) => (propsOverride: any = {}) => {
    const component = render(
        <ThemeProvider theme={ theme }>
            <Component {...propsOverride} />
        </ThemeProvider>
    );

    return { ...component };
};
