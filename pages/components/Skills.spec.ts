import Skills from "./Skills";
import { renderComponent } from "../../utils/testUtils";

const renderSkills = renderComponent(Skills);

describe('Skills', () => {
    it('render Skills component', () => {
        const { getByTestId} = renderSkills();

        expect(getByTestId('skills')).toBeInTheDocument();
    });
});
