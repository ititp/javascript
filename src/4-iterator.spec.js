import { Iterable, Iterator, IteratorResult, toIterable } from './4-iterator';

describe("Iterator Tests", () => {
    it("toIterable test", (done) => {
        let obj = {
            a: 1,
            b: "a",
            c: true,
            d: [1, 2, 3],
            e: () => { }
        };

        toIterable(obj);
        let props = [...obj];

        expect(props.length, `the properties length must be ${Object.keys(obj).length}`).toStrictEqual(Object.keys(obj).length);

        for (let [key, value] of obj) {
            expect(key != undefined && value != undefined, 'The iteration value must be a key/value object').toBeTruthy();

            expect(obj.hasOwnProperty(key), `the property '${key}' does not exists on the object`).toBeTruthy();

            expect(value, `the property '${key}' must have the value ${obj[key]}`).toStrictEqual(obj[key]);
        }

        done();
    });
});