import Contact from "./Contact";
import { renderComponent } from "../../utils/testUtils";

const renderContact = renderComponent(Contact);

describe('Contact', () => {
    it('render Contact component', () => {
        const { getByTestId } = renderContact();

        expect(getByTestId('contact')).toBeInTheDocument();
    });
});
