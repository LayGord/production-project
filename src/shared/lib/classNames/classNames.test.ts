import { classNames } from './classNames';

describe('classnames() test', () => {
    test('classnames() with only cls (main classname)', () => {
        expect(classNames('class1')).toBe('class1');
    });
    test('classnames() with only cls and mods', () => {
        expect(classNames('class1', { howered: true, disabled: false }))
            .toBe('class1 howered');
    });
    test('classnames() with only cls and additional', () => {
        expect(classNames('class1', {}, ['ad_class1', 'ad_class2']))
            .toBe('class1 ad_class1 ad_class2');
    });
    test('classnames() with all properties', () => {
        expect(classNames(
            'class1',
            { howered: true, disabled: false },
            ['ad_class1', 'ad_class2'],
        ))
            .toBe('class1 ad_class1 ad_class2 howered');
    });
});
