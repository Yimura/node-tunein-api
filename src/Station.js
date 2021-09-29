const { RadioTime } = require('./Constants');
const { get } = require('./Data');

class Station {
    radioUrl = null;

    constructor(data) {
        this.id = data.GuideId;
        this.image = data.Image;
        this.title = data.Title;
        this.url = data.Actions.Share.ShareUrl;
    }

    async getRadioURL() {
        if (!this.radioUrl) {
            RadioTime.url.search = new URLSearchParams(
                Object.assign({ id: this.id }, RadioTime.searchParams)
            );

            this.radioUrl = JSON.parse(
                await get(RadioTime.url)
            );
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