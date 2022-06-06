import About from "./About";
import { renderComponent } from "../../utils/testUtils";

const renderAbout = renderComponent(About);

describe('About', () => {
    it('renders About section', () => {
        const { getByTestId } = renderAbout();

        expect(getByTestId('about')).toBeInTheDocument();
    });
});
