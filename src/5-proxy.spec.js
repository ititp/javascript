import { selectPath, watch } from "./5-proxy";

describe("Proxy Tests", () => {

    test("Test de la fonction selectPath", () => {
        expect(selectPath(o => o.a.b[0].c)).toStrictEqual("a.b.0.c");

        expect(selectPath(o => o.B)).toStrictEqual("B");
    });

    test("Test de la fonction watch", (done) => {
        const obj = {
            a: "A",
            b: {
                a: "a",
                b: "b",
                c: {
                    a: 1
                }
            },
            d: "D"
        }

        const observable = watch(obj, (prop, oldVal, newVal) => {
            expect(oldVal).toStrictEqual(1);
            expect(newVal).toStrictEqual(2);
            done();
        });

        expect(observable.b.a).toStrictEqual("a");

        observable.b.c.a = 2;
    });

});