/**
 * Fonctions sur l'API des Promises
 * https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */


/**
 * Permet de combiner 2 Promise pour retourner leurs résultats dans un tableau
 * @param {*} promiseA 
 * @param {*} promiseB 
 * @returns Un tableau contenant le résultat de A et B sans utiliser Promise.all
 */
export function combine(promiseA, promiseB) {

}

/**
 * Retourne une Promise qui est résolue après le laps de temps spécifié
 * @param {*} millisecond 
 * @returns {@link Promise}
 */
export function delay(millisecond) {

}

/**
 * Exécute de manière séquentielle de promises
 * 
 * @param funcs tableau de fonctions retournant une promise
 * @return Une promise contenant tous les resultats de promises exécutées
 */
export function chain(fns) {

}

/**
 * Prend en paramètre une fonction 
 * @param {*} callbackFn 
 * @returns Une fonction asynchronequi utilise une Promise pour exécuter callbackFn
 */
export function promisify(callbackFn) {

}