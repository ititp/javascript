/**
 * Fonctions sur l'objet Proxy
 * https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

/**
 * Fonction permettant de retourné sous forme de string la path vers la propriété de l'objet sélectionné via selectFn :
 * selectPath(o => o.a.b[0].c) // "a.b.0.c"
 * @param {Function} selectFn 
 * @returns {String}
 */
export function selectPath(selectFn) {
    
}

/**
 * Permet d'observer les changements sur l'objet passé en paramètre.
 * A chque fois qu'une propriété va être réasigné, la fonction onPropertyChanged(nomProp, oldVal, newVal) doit être appelée avec :
 * Le nom de la propriété qui a changé, l'ancienne valeur, la nouvelle valeur.
 * @param {Object} obj 
 * @param {Function} onPropertyChanged 
 * @returns {Object}
 */
export function watch(obj, onPropertyChanged) {

}
