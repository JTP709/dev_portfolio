import Skills, { skills_list } from "./Skills";
import { renderComponent } from "../../utils/testUtils";

const renderSkills = renderComponent(Skills);

describe('Skills', () => {
    it('render Skills component', () => {
        const { getByTestId } = renderSkills();

        expect(getByTestId('skills')).toBeInTheDocument();
    });
    it.each(skills_list)('renders %p category', (skill) => {
        const { getByText } = renderSkills();

        expect(getByText(skill.type)).toBeInTheDocument();
    });
    describe.each(skills_list)('renders', (category) => {
        it.each(category.list)('%p skill', (skill) => {
            const { getByText } = renderSkills();
    
            expect(getByText(skill)).toBeInTheDocument();
        });
    });
});
