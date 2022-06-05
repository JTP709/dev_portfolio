import Banner from './Banner';
import { renderComponent } from '../../utils/testUtils';

const renderBanner = renderComponent(Banner);

describe('Banner', () => {
    it('renders Banner', () => {
        const { getByTestId } = renderBanner();

        expect(getByTestId('banner')).toBeInTheDocument();
    });
});
