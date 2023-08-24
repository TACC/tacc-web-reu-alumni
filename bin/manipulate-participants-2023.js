const manipulate = require('./manipulate.js');

let data = manipulate.get('./assets/_participants-2023.json');
    data = manipulate.format(data);
    data = manipulate.wrap(data, [2023]);

module.exports = data;
