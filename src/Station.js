const { RadioTime } = require('./Constants');
const { get } = require('https');

class Station {
    radioUrl = null

    constructor(data) {
        this.id = data.GuideId;
        this.image = data.Image;
        this.title = data.Title;
        this.url = data.Actions.Share.ShareUrl;
    }

    async getRadioURL() {
        if (!this.radioUrl) {
            const json = await new Promise((resolve, reject) => {
                RadioTime.url.search = new URLSearchParams({ id: this.id }, RadioTime.searchParams);

                get(RadioTime.url, (r) => {
                    r.setEncoding('utf8');

                    let d = '';

                    r.on('data', c => d += c);
                    r.on('end', () => resolve(d));
                }).on('error', reject);
            });

            // console.log(json);

            this.radioUrl = json;
        }

        return this.radioUrl;
    }

    toJSON() {
        return {
            id: this.id,
            image: this.image,
            radioUrl: this.radioUrl,
            title: this.title,
            url: this.url
        };
    }
}
module.exports = Station;