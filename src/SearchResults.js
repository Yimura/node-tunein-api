const Station = require('./Station');

class SearchResults {
    // episodes = [];
    // podcasts = [];
    /**
     * @type {Station[]}
     */
    stations = [];

    constructor(body) {
        for (const item of body.Items) {
            switch (item.ContainerType) {
                case 'Stations':
                    item.Children.forEach(element => this.stations.push(new Station(element)));
                    
                    break;
            }
        }
    }
}
module.exports = SearchResults;