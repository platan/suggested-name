import chai from 'chai';
import suggestedName from '../lib/suggested-name.js';

chai.should();

describe('suggested name', () => {
    it('should return words common for all names ignoring last word unique for every name', () => {
        const names = [
            'Fire Tablet 7" Display Wi-Fi 8 GB Black',
            'Fire Tablet 7" Display Wi-Fi 8 GB Magneta',
            'Fire Tablet 7" Display Wi-Fi 8 GB Blue'
        ];

        suggestedName(names).should.equal('Fire Tablet 7" Display Wi-Fi 8 GB');
    });

    it('should return words common for all names ignoring extra words from first name', () => {
        const names = [
            'Fire Kids Edition Tablet 7" Display Wi-Fi 8 GB',
            'Fire Tablet 7" Display Wi-Fi 8 GB',
            'Fire Tablet 7" Display Wi-Fi'
        ];

        suggestedName(names).should.equal('Fire Tablet 7" Display Wi-Fi');
    });

    it('should return words in order occuring in most names', () => {
        var names = [
            'Fire Tablet 7" Display Wi-Fi 8 GB Black',
            'Fire Tablet 7" Display Wi-Fi 8 GB Magneta',
            'Fire Tablet 7" Display 8 GB Wi-Fi Blue'
        ];

        suggestedName(names).should.equal('Fire Tablet 7" Display Wi-Fi 8 GB');
    });

    it('should remove extra spaces in input', () => {
        const names = [
            'Fire Tablet 7" Display Wi-Fi 8 GB Black',
            'Fire  Tablet 7" Display Wi-Fi 8  GB Magneta',
            'Fire   Tablet 7" Display Wi-Fi 8   GB Blue'
        ];

        suggestedName(names).should.equal('Fire Tablet 7" Display Wi-Fi 8 GB');
    });

    it('should remove given characters from names', () => {
        var names = [
            'Fire Tablet (7" Display Wi-Fi 8 GB Black)',
            'Fire Tablet (7" Display Wi-Fi 8 GB Magneta)',
            'Fire Tablet (7" Display Wi-Fi 8 GB Blue)'
        ];

        suggestedName(names, ['(', ')']).should.equal('Fire Tablet 7" Display Wi-Fi 8 GB');
    });

    it('should handle duplicated entries by removing duplicates before computing suggested name', () => {
        var names = [
            'All-New Fire HD 8 Tablet 8" HD Display Wi-Fi 16 GB Black',
            'All-New Fire HD 8 Tablet 8" HD Display Wi-Fi 16 GB Blue',
            'All-New Fire HD 8 Tablet 8" HD Display Wi-Fi 16 GB Tangerine'
        ];

        suggestedName(names).should.equal('All-New Fire HD 8 Tablet 8" Display Wi-Fi 16 GB');
    });

    it('should ignore case and choose most common version', () => {
        const names = [
            'fire tablet 7" display wi-fi 8 gb',
            'Fire Tablet 7" Display Wi-Fi 8 GB',
            'Fire Tablet 7" Display Wi-Fi 8 GB'
        ];

        suggestedName(names).should.equal('Fire Tablet 7" Display Wi-Fi 8 GB');
    });

    it('should handle empty names', () => {
        const names = [
            '',
            ''
        ];

        suggestedName(names).should.equal('');
    });

    it('should handle empty array of names', () => {
        const names = [];

        suggestedName(names).should.equal('');
    });
});
