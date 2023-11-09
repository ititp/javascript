import * as modules from './module';

describe("Map Tests", () => {
    it("Module test", () => {
        let keys = Object.keys(modules);
        expect(keys.length, `There must be 5 variables. Found ${keys.length}`).toStrictEqual(5);
        expect(modules.val, `There must be a 'val' property set to 50`).toStrictEqual(50);
        expect(modules.str, `There must be a 'str' property set to 'hello'`).toStrictEqual("hello");
        expect(
            typeof modules.doSomethingElse,
            `There must be a 'str' property set to 'hello'`
        ).toStrictEqual("function");
    })
});
