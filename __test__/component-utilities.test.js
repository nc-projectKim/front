import alterValues from '../src/components/component-utilities/alterValues';
import alterValuesExpenses from '../src/components/component-utilities/alterValuesExpenses';

const testNotes = require('./notes.json');
const testExpenses = require('./expenses.json');

describe('alterValues', () => {
    it('exists', () => {
        expect(typeof alterValues).toBe('function');
    });

    it('returns an array', () => {
        expect(alterValues(testNotes)).toBeInstanceOf(Array);
    });

    it('correctly sorts the object', () => {
        const first = alterValues(testNotes)[0][1];
        const second = alterValues(testNotes)[1][1];
        const third = alterValues(testNotes)[2][1];
        expect(first.lastEditTime > second.lastEditTime).toBe(true);
        expect(second.lastEditTime > third.lastEditTime).toBe(true);
    });
});

describe('alterValuesExpenses', () => {
    it('exists', () => {
        expect(typeof alterValuesExpenses).toBe('function');
    });

    it('returns an array', () => {
        expect(alterValuesExpenses(testExpenses)).toBeInstanceOf(Array);
    });

    it('correctly sorts the object', () => {
        const first = alterValuesExpenses(testExpenses)[0][1];
        const second = alterValuesExpenses(testExpenses)[1][1];
        const third = alterValuesExpenses(testExpenses)[2][1];
        expect(first.lastEditTime > second.lastEditTime).toBe(true);
        expect(second.lastEditTime > third.lastEditTime).toBe(true);
    });
});