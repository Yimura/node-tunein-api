const { TuneIn } = require('./Constants');
const { get } = require('https');
const SearchResults = require('./SearchResults');

class TuneInWrapper {
    constructor() {

    }

    _search(query) {
        TuneIn.url.search = new URLSearchParams(
            Object.assign({ query }, TuneIn.searchParams)
        );

        return new Promise((resolve, reject) => {
            get(TuneIn.url, (r) => {
                r.setEncoding('utf8');

                let d = '';

                r.on('data', c => d += c);
                r.on('end', () => resolve(d));
            }).on('error', reject);
        });
    }

    /**
     * @param {string} query 
     */
    async search(query) {
        const data = JSON.parse(
            await this._search(query)
        );

        return new SearchResults(data);
    }
}
module.exports = TuneInWrapper;