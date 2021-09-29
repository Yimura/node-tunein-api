const { TuneIn } = require('./Constants');
const { get } = require('./Data')
const SearchResults = require('./SearchResults');

class TuneInWrapper {
    constructor() {}

     /**
      * @private
      * @param {string} query 
      * @returns {string}
      */
    _search(query) {
        TuneIn.url.search = new URLSearchParams(
            Object.assign({ query }, TuneIn.searchParams)
        );

        return get(TuneIn.url);
    }

    /**
     * 
     * @param {string} query 
     * @returns {SearchResults}
     */
    async search(query) {
        const data = JSON.parse(
            await this._search(query)
        );

        return new SearchResults(data);
    }
}
module.exports = TuneInWrapper;