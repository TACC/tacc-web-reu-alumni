// Include dependencies
const fs = require('fs');

/** Get all data as JSON */
function get(path) {
  const json = fs.readFileSync(path, 'utf8');
  let data = JSON.parse(json);

  return data;
}

/** Format certain data to render values in a manner suitable to render */
function format(entries) {
  entries.forEach( entry => {
    entry.study_1 = convertToTitleCase(
      entry.study_1
    );
    entry.study_2 = convertToTitleCase(
      getStudy(entry.study_2, entry.study_2_other)
    );
    entry.study_3 = convertToTitleCase(
      getStudy(entry.study_3, entry.study_3_other)
    );
  });

  return entries;
}

/** Return whichever field of a study has content for display */
function getStudy(standard, other) {
  let study;

  if (other && standard === 'Other Fields (Not Listed)') {
    study = other;
  } else if (standard && other) {
    study = standard + '&amp;' + other;
  } else if (standard) {
    study = standard;
  } else {
    study = '';
  }

  return study;
}

/** Covert string to Title Case */
/* https://dev.to/ypdev19/ways-to-title-case-strings-with-javascript-1dpe */
function convertToTitleCase(oldText) {
  if (!oldText) return '';

  return oldText.toLowerCase()
                .replace(/\b\w/g, s => s.toUpperCase())
                .replace('And', 'and');
}

/** Wrap all data in a manner that mustache templates expect */
function wrap(data) {
  const newData = { entries: data };

  return newData;
}

module.exports = {
  get, format, wrap
};
