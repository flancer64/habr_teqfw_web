export default class Fl64_Habr_Web_Front_Module {
    desc = 'This is sample.';

    constructor(spec) {
        // EXTRACT DEPS
        /** @type {TeqFw_Web_Front_Service_Gate} */
        const gate = spec['TeqFw_Web_Front_Service_Gate$'];
        /** @type {Fl64_Habr_Web_Shared_Service_Route_Load_Plugins.Factory} */
        const route = spec['Fl64_Habr_Web_Shared_Service_Route_Load_Plugins#Factory$'];

        // DEFINE WORKING VARS / PROPS
        /** @type {Fl64_Habr_Web_Shared_Service_Dto_Plugin[]} */
        const plugins = [];

        // DEFINE INSTANCE METHODS
        /**
         * Load plugins data from server.
         * @return {Promise<void>}
         */
        this.loadPlugins = async function () {
            // noinspection JSValidateTypes
            /** @type {Fl64_Habr_Web_Shared_Service_Route_Load_Plugins.Response} */
            const res = await gate.send(route.createReq(), route);
            plugins.push(...res.plugins);
        }

        /**
         * Print plugins data as list
         * @param {string} id ID of the UL/OL element in DOM.
         */
        this.printOut = function (id) {
            const elList = document.getElementById(id);
            if (elList) {
                for (const one of plugins) {
                    const elItem = document.createElement('li');
                    const text = `${one.name}: ${one.namespace} => ${one.path}`;
                    elItem.appendChild(document.createTextNode(text));
                    elList.appendChild(elItem);
                }
            }
        }
    }

}
