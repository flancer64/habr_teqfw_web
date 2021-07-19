/**
 * Load data for teq-plugins used in the app.
 *
 * @namespace Fl64_Habr_Web_Back_Service_Load_Plugins
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Web_Back_Service_Load_Plugins';

/**
 * @implements TeqFw_Web_Back_Api_Service_IFactory
 */
export default class Fl64_Habr_Web_Back_Service_Load_Plugins {

    constructor(spec) {
        // EXTRACT DEPS
        /** @type {Fl64_Habr_Web_Back_Defaults} */
        const DEF = spec['Fl64_Habr_Web_Back_Defaults$'];
        /** @type {Fl64_Habr_Web_Shared_Service_Route_Load_Plugins.Factory} */
        const route = spec['Fl64_Habr_Web_Shared_Service_Route_Load_Plugins#Factory$'];
        /** @type {TeqFw_Core_Back_Scan_Plugin_Registry} */
        const registry = spec['TeqFw_Core_Back_Scan_Plugin_Registry$'];
        /** @type {Fl64_Habr_Web_Shared_Service_Dto_Plugin.Factory} */
        const fPlugin = spec['Fl64_Habr_Web_Shared_Service_Dto_Plugin#Factory$'];

        // DEFINE INSTANCE METHODS
        this.getRouteFactory = () => route;

        this.getService = function () {
            // DEFINE INNER FUNCTIONS
            /**
             * @param {TeqFw_Web_Back_Api_Service_Context} context
             * @return Promise<void>
             */
            async function service(context) {
                // noinspection JSValidateTypes
                /** @type {Fl64_Habr_Web_Shared_Service_Route_Load_Plugins.Response} */
                const res = context.getOutData();
                // get plugins data from plugins registry
                for (const item of registry.items()) {
                    const plugin = fPlugin.create();
                    plugin.name = item.name;
                    /** @type {TeqFw_Di_Back_Api_Dto_Plugin_Desc} */
                    const nodeDi = item.teqfw[DEF.MOD_DI.DESC_NODE];
                    plugin.namespace = nodeDi.autoload.ns;
                    plugin.path = nodeDi.autoload.path;
                    res.plugins.push(plugin);
                }
            }

            // MAIN FUNCTIONALITY
            Object.defineProperty(service, 'name', {value: `${NS}.${service.name}`});
            return service;
        }
    }
}
