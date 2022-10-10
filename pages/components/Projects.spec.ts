import Projects from "./Projects";
import { renderComponent } from "../../utils/testUtils";

const renderProjects = renderComponent(Projects);

describe('Projects', () => {
    it('render Projects component', () => {
        const { getByTestId } = renderProjects();

        expect(getByTestId('projects')).toBeInTheDocument();
    });
});
