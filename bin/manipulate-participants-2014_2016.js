const manipulate = require('./manipulate.js');

let data = manipulate.get('./assets/_participants-2014_2016.json');
    data = manipulate.format(data);
    data = manipulate.wrap(data, [2014, 2015, 2016]);

module.exports = data;
