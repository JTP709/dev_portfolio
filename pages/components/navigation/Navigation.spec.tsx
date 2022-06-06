import { waitFor } from "@testing-library/react";
import { renderComponent } from "../../../utils/testUtils";
import { NAV_ITEMS } from "./data";
import Navigation from "./Navigation";

const renderNavigation = renderComponent(Navigation);

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
Object.defineProperty(window, 'scrollTo', {
    value: jest.fn()
});

describe('Navigation', () => {
    describe('Mobile view', () => {
        beforeEach(() => {
            global.innerWidth = 767;
        });
        it('renders mobile navigation', () => {
            const { getByLabelText } = renderNavigation();

            expect(getByLabelText('Toggle Navigation')).toBeInTheDocument();
        });
        it.each(NAV_ITEMS)('clicking the mobile menu button renders the menu dropdown', async (item) => {
            const { getByLabelText, getByText, user } = renderNavigation();
            await user.click(getByLabelText('Toggle Navigation'));

            waitFor(() => {
                expect(expect(getByText(item.label))).toBeInTheDocument();
            });
        });
    });
    describe('Desktop view', () => {
        beforeEach(() => {
            global.innerWidth = 1440;
        });
        it.each(NAV_ITEMS)('renders mobile navigation', async (item) => {
            const { queryByText, getByText } = renderNavigation();

            expect(queryByText('Toggle Navigation')).not.toBeInTheDocument();
            waitFor(() => {
                expect(expect(getByText(item.label))).toBeInTheDocument();
            });
        });
    });
});
