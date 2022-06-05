import Experience, { experience_list } from "./Experience";
import { renderComponent } from "../../utils/testUtils";

const renderExperience = renderComponent(Experience);

describe('Experience', () => {
    it('renders experience component', () => {
        const { getByTestId } = renderExperience();

        expect(getByTestId('experience')).toBeInTheDocument();
    });
    it.each(experience_list)('renders experience list', (experience) => {
        const { getByTestId, getByText } = renderExperience();

        expect(getByTestId(`${experience.title}-exp`)).toBeInTheDocument();
        expect(getByText(experience.description)).toBeInTheDocument();

    });
    describe.each(experience_list)('renders', (experience) => {
        it.each(experience.projects)('', (project) => {
            const { getByTestId } = renderExperience();
    
            expect(getByTestId(`${project}-proj`)).toBeInTheDocument();
        });
    });
});
