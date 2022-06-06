import React from "react";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../pages/components/theme";

export const renderComponent = (Component: React.ComponentType) => (propsOverride: any = {}) => {
    const component = render(
        <ThemeProvider theme={ theme }>
            <Component {...propsOverride} />
        </ThemeProvider>
    );

    const user = userEvent.setup();

    return { ...component, user };
};
