const { get } = require('https');

exports.get = (url) => {
    return new Promise((resolve, reject) => {
        get(url, (r) => {
            r.setEncoding('utf8');

            let d = '';

            r.on('data', c => d += c);
            r.on('end', () => resolve(d));
        }).on('error', reject);
    });
}