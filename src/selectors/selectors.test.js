import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Selectors Tests', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'josue-garcia', firstName: 'Josue', lastName: 'Garcia'}
            ];

            const expected = [
                {value: 'josue-garcia', text: 'Josue Garcia'}
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});