import { spreadCoordinates, average, getEvenValues, areItemsEqual } from "./2-array";

describe("Array tests", () => {
    test("Test de la fonction spreadCoordinates", () => {
        const sourceCoordinates = [
            [14, 5.6],
            [13, 6],
            [7, 79.2],
            [92, 12],
            [6.8, 16],
        ];

        const result = spreadCoordinates(sourceCoordinates);
        expect(result.length, `La taille du tableau doit être de ${sourceCoordinates.length * 2}`).toStrictEqual(sourceCoordinates.length * 2);

        for (let i in result) {
            const val = result[i];

            expect(typeof val, "Chaque élément du tableau doit être un nombre").toStrictEqual("number");

            const sourceIdx = Math.floor(i / 2);

            const sourceVal = sourceCoordinates[sourceIdx][i % 2];
            expect(sourceVal, "La valeur contenu dans le tableau initiale doit être présent dans le tableau final").toStrictEqual(val);
        }
    });

    test("Test de la fonction average", () => {
        const source = [
            14,
            13,
            7,
            92,
            16
        ];

        const avg = average(source);

        expect(avg).toStrictEqual(28.4);
    });

    test("Test de la fonction getEvenValues", () => {
        const source = [
            14,
            13,
            7,
            92,
            16
        ];

        const evenValues = getEvenValues(source);

        expect(evenValues).toStrictEqual([14, 92, 16]);
    });


    test("Test de la fonction areItemsEqual", () => {
        const source = new Array(25).fill(42);

        const areEquals1 = areItemsEqual(source);
        expect(areEquals1).toBeTruthy();

        const idx = Math.round(Math.random() * 10);
        source[idx] = 0;

        const areEquals2 = areItemsEqual(source);
        expect(areEquals2).toBeFalsy();

    });
}); 