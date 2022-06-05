import React from "react";
import { render } from "@testing-library/react";

export const renderComponent = (Component: React.ComponentType) => (propsOverride: any = {}) => {
    const component = render(<Component {...propsOverride} />);

    return { ...component };
};
