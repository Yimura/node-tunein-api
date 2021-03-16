# TuneIn API (WIP)

This a very small **Unofficial** TuneIn API wrapper, it aims at providing bare minimum data and includes fetching the HTTP stream URL.

## How To Use

```js
const TuneIn = new (require('node-tunein-api'))();

const results = await TuneIn.search('QMusic');

// assuming the first result is the radio station of which we want to fetch the stream URL
const streamUrl = await results.stations[0].getRadioURL();

console.log(streamUrl);
// https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live_96.mp3
```

## Object Structures

```js
SearchResults {
    stations: [
        Station {
            radioUrl: null,
            id: 's2398',
            image: 'https://cdn-radiotime-logos.tunein.com/s2398q.png',
            title: 'QMusic Belgium',
            url: 'http://tun.in/sejIK'
        }
    ]
}
```