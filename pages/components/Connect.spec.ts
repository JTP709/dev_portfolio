import Connect from "./Connect";
import { renderComponent } from "../../utils/testUtils";

const renderConnect = renderComponent(Connect);

describe('Connect', () => {
    it('render Connect component', () => {
        const { getByTestId } = renderConnect();

        expect(getByTestId('connect')).toBeInTheDocument();
    });
});
