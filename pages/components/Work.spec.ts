import Work from "./Work";
import { renderComponent } from "../../utils/testUtils";

const renderWork = renderComponent(Work);

describe('Work', () => {
    it('render Work component', () => {
        const { getByTestId } = renderWork();

        expect(getByTestId('work')).toBeInTheDocument();
    });
});
