const TuneIn = new (require('./index'))();

TuneIn.search('Radio 2').then(async results => {
    const url = await results.stations[0].getRadioURL();

    console.log(url);
});