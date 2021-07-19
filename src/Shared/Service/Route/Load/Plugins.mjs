/**
 * Route data for service to load data for teq-plugins used in the app.
 * @namespace Fl64_Habr_Web_Shared_Service_Route_Load_Plugins
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Web_Shared_Service_Route_Load_Plugins';

// MODULE'S CLASSES
/**
 * @memberOf Fl64_Habr_Web_Shared_Service_Route_Load_Plugins
 */
class Request {}

/**
 * @memberOf Fl64_Habr_Web_Shared_Service_Route_Load_Plugins
 */
class Response {
    /** @type {Fl64_Habr_Web_Shared_Service_Dto_Plugin[]} */
    plugins;
}

/**
 * Factory to create new DTOs and get route address.
 * @implements TeqFw_Web_Back_Api_Service_IRoute
 * @memberOf Fl64_Habr_Web_Shared_Service_Route_Load_Plugins
 */
class Factory {
    constructor(spec) {
        // EXTRACT DEPS
        /** @type {Fl64_Habr_Web_Shared_Defaults} */
        const DEF = spec['Fl64_Habr_Web_Shared_Defaults$'];
        // EXTRACT DEPS
        /** @type {typeof Fl64_Habr_Web_Shared_Service_Dto_Plugin} */
        const DPlugin = spec['Fl64_Habr_Web_Shared_Service_Dto_Plugin#'];
        /** @type {Fl64_Habr_Web_Shared_Service_Dto_Plugin.Factory} */
        const fPlugin = spec['Fl64_Habr_Web_Shared_Service_Dto_Plugin#Factory$'];

        // DEFINE INSTANCE METHODS
        this.getRoute = () => `/${DEF.NAME}${DEF.WEB_LOAD_PLUGINS}`;

        /**
         * There is no data in response.
         * @param {Request|null} data
         * @return {Fl64_Habr_Web_Shared_Service_Route_Load_Plugins.Request}
         */
        this.createReq = function (data = null) {
            return new Request();
        }

        /**
         * @param {Response|null} data
         * @return {Fl64_Habr_Web_Shared_Service_Route_Load_Plugins.Response}
         */
        this.createRes = function (data = null) {
            const res = new Response();
            res.plugins = Array.isArray(data?.plugins)
                ? data.plugins.map((one) => (one instanceof DPlugin) ? one : fPlugin.create(one))
                : [];
            return res;
        }
    }
}

// MODULE'S EXPORT
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.constructor.name}`});
Object.defineProperty(Request, 'name', {value: `${NS}.${Request.constructor.name}`});
Object.defineProperty(Response, 'name', {value: `${NS}.${Response.constructor.name}`});
export {
    Factory,
    Request,
    Response,
};
