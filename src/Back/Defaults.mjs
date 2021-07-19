/**
 * Plugin constants (hardcoded configuration) for backend code.
 */
export default class Fl64_Habr_Web_Back_Defaults {

    /** @type {TeqFw_Di_Back_Defaults} */
    MOD_DI;

    /** @type {Fl64_Habr_Web_Shared_Defaults} */
    SHARED;

    constructor(spec) {
        // EXTRACT DEPS
        this.MOD_DI = spec['TeqFw_Di_Back_Defaults$'];
        this.SHARED = spec['Fl64_Habr_Web_Shared_Defaults$'];

        // MAIN FUNCTIONALITY
        Object.freeze(this);
    }
}
