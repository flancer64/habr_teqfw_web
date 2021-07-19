/**
 * Plugin DTO in Service API.
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Web_Shared_Service_Dto_Plugin';

// MODULE'S CLASSES
export default class Fl64_Habr_Web_Shared_Service_Dto_Plugin {
    /** @type {string} */
    name;
    /** @type {string} */
    namespace;
    /** @type {string} */
    path;
}

// attributes names to use as aliases in queries to object props
Fl64_Habr_Web_Shared_Service_Dto_Plugin.NAME = 'name';
Fl64_Habr_Web_Shared_Service_Dto_Plugin.NAMESPACE = 'namespace';
Fl64_Habr_Web_Shared_Service_Dto_Plugin.PATH = 'path';

/**
 * Factory to create new DTO instances.
 * @memberOf Fl64_Habr_Web_Shared_Service_Dto_Plugin
 */
export class Factory {
    constructor() {
        /**
         * @param {Fl64_Habr_Web_Shared_Service_Dto_Plugin|null} data
         * @return {Fl64_Habr_Web_Shared_Service_Dto_Plugin}
         */
        this.create = function (data = null) {
            const res = new Fl64_Habr_Web_Shared_Service_Dto_Plugin();
            res.name = data?.name;
            res.namespace = data?.namespace;
            res.path = data?.path;
            return res;
        }
    }
}

// finalize code components for this es6-module
Object.freeze(Fl64_Habr_Web_Shared_Service_Dto_Plugin);
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.constructor.name}`});

