exports.RadioTime = {
    searchParams: {
        render: 'json',
        formats: 'mp3,aac,ogg,flash,html,hls,wma',
        partnerId: 'RadioTime',
        version: '4.4601',
        itemUrlScheme: 'secure',
        reqAttempt: 1
    },
    url: new URL('https://opml.radiotime.com/Tune.ashx')
};
exports.TuneIn = {
    searchParams: {
        fullTextSearch: true,
        formats: 'mp3,aac,ogg,flash,html,hls,wma',
        partnerId: 'RadioTime',
        itemUrlScheme: 'secure',
        reqAttempt: 1
    },
    url: new URL('https://api.tunein.com/profiles')
};