import Skills, { skills_list } from "./Skills";
import { renderComponent } from "../../utils/testUtils";

const renderSkills = renderComponent(Skills);

describe('Skills', () => {
    it('render Skills component', () => {
        const { getByTestId } = renderSkills();

        expect(getByTestId('skills')).toBeInTheDocument();
    });
    it.each(skills_list)('renders %p skill', (skill: string) => {
        const { getByText } = renderSkills();

        expect(getByText(skill)).toBeInTheDocument();
    });
});
