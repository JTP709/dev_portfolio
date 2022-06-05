import Experience from "./Experience";
import { renderComponent } from "../../utils/testUtils";

const renderExperience = renderComponent(Experience);

describe('Experience', () => {
    it('renders experience component', () => {
        const { getByTestId } = renderExperience();

        expect(getByTestId('experience')).toBeInTheDocument();
    });
});
