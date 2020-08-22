import React from 'react';
import { render } from '@testing-library/react';
import Experience from './Experience';

describe('Experience component', () => {

    test('renders the list of companies', () => {

        // given
        const { getAllByTestId } = render(<Experience />);
        const companies = [
            'Post Office', 'HealthUnlocked', 'SEGA', 'Dreamhack', 'Manpower', 'ABB Robotics'
        ];

        // when
        const titleElements = getAllByTestId('ExperienceCompany-title');

        // then
        expect(titleElements).toHaveLength(8);

        // and
        titleElements.forEach((titleElement, index) => {
            expect(titleElement.textContent).toBe(companies[index]);
        });
    });
});