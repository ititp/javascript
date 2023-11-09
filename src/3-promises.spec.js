import { delay, chain, combine, promisify } from "./3-promises";
import fs from "fs";

describe("Promise Tests", function () {
    const count = 50;

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Test de la fonction delay", function (done) {
        let delayTime = 200;

        let time = new Date().getTime();
        delay(delayTime).then(() => {
            let endtime = new Date().getTime();
            let elapsed = endtime - time;
            let roundedElapsed = Math.round(elapsed / 100) * 100;

            expect(roundedElapsed, `Le délais doit être approximativement de ${roundedElapsed}. Le temps passé est de ${elapsed}`).toStrictEqual(delayTime);

            done();
        }).catch(e => done(e));
    });

    it("Test de la fonction combine", async () => {
        const spy = jest.spyOn(Promise, "all");

        let timeA = Math.floor((Math.random() * 50) + 10);
        let timeB = Math.floor((Math.random() * 50) + 10);
        let resolvedA = false;
        let resolvedB = false;

        const result = await combine(new Promise((resolve) => {
            setTimeout(() => {
                resolvedA = true;
                resolve(1);
            }, timeA);
        }), new Promise((resolve) => {
            setTimeout(() => {
                resolvedB = true;
                resolve(2);
            }, timeB);
        }));

        expect(result, "Le résultat doit être un tableau").toBeInstanceOf(Array);

        expect(result.length, "Le tableau doit contenir 2 éléments").toStrictEqual(2);

        expect(spy, "La fonction Promise.all ne doit pas être appellée").not.toHaveBeenCalled();
    });

    it("Test de la fonction chain", function (done) {
        const fns = [];
        let sum = 0;
        const asserts = [];

        // generate promises
        for (let i = 0; i < count; i++) {
            let time = Math.floor((Math.random() * 50) + 10);
            fns.push(() => new Promise((resolve, reject) => {

                if (asserts.length > 0) {
                    // assert that the previous promise is done
                    expect(asserts[i - 1], "La Promise prépcédente doit être résolue").toStrictEqual(i - 1);
                }

                setTimeout(() => {
                    sum += i;
                    asserts.push(i);
                    resolve(i);
                }, time);

            }));
        }

        // execute all method
        const chainResult = chain(fns);

        expect(chainResult, "La fonction chain doit retourner une Promise").toBeInstanceOf(Promise);

        chainResult
            .then((results) => {
                let sumResult = results.reduce((prev, current) => {
                    return prev + current;
                }, 0);

                // assert that all the results are set
                expect(results.length, `Le nombre de résultats retourné doit être égale à ${fns.length}`).toStrictEqual(fns.length);

                expect(sumResult, `La somme de tous les résultats doit être de ${sum}`).toStrictEqual(sum);

                done();
            })
            .catch(e => done(e));
    });

    it("Test de la fonction promisify", async () => {
        const spy = jest.spyOn(fs, "readdir");

        const fsPromise = promisify(fs.readdir);

        expect(fsPromise, "Le résultat de la fonction promisify doit être une fonction").toBeInstanceOf(Function);

        const promise = fsPromise(__dirname);
        expect(promise, "La fonction retournée par promisify doit elle retourner une Promise").toBeInstanceOf(Promise);

        const files = await promise;

        expect(files.length, "Le résultat de l'appel a readdir doit être un tableau de 11 fichiers").toStrictEqual(16);

        expect(spy, "La fonction readdir doit être appellée ").toHaveBeenCalledTimes(1);
    });
});

