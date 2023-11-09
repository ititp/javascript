import { ClassWithPrivateProperty } from './6-symbol';

describe("Symbol Tests", () => {
    it("ClassWithPrivateProperty test", () => {
        let instance1 = new ClassWithPrivateProperty();
        let instance2 = new ClassWithPrivateProperty();


        expect(instance1.value, "The value should be undefined").toBeUndefined();

        instance1.value = 3712;
        expect(instance1.value, "The value should be 3712").toStrictEqual(3712);
        expect(instance2.value, "The value should be undefined").toBeUndefined();

        instance2.value = "Hello World!";
        expect(instance2.value, "The value should be 'Hello World!'").toStrictEqual("Hello World!");

        let props = Object.getOwnPropertyNames(instance1);
        let symProps = Object.getOwnPropertySymbols(instance1);

        expect(props.length, "The instance should have public properties").toStrictEqual(0);
        expect(symProps.length, "The instance should have one symbol property").toStrictEqual(1);
    })
});
