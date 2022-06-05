import Banner from './Banner';
import { render } from '@testing-library/react';

const renderBanner = (propsOverride: any = {}) => {
    const component = render(<Banner {...propsOverride} />);

    return { ...component };
}

describe('Banner', () => {
    it('renders Banner', () => {
        const { getByTestId } = renderBanner();

        expect(getByTestId('banner')).toBeInTheDocument();
    });
});
