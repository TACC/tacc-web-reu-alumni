# TACC Website REU Alumni

This project compiles data into templates to create markup for content blocks in the [REU Alumni Page][reu-alumni].

[reu-alumni]: https://www.tacc.utexas.edu/education/undergraduates-graduates/reu/alumni/ "TACC: Education: Undergraduates & Graduates: Research Experience for Undergraduates: Alumni"

## Usage

1. Edit templates and data in:
    - `templates/`
    - `assets/`
2. (If not already done) Install dependencies:
    - `npm ci` (a.k.a. `rm -rf node_modules && npm install`)
3. Run build script:
    - `npm run build`
4. Confirm output in:
    - `dist/`
5. Use output.

## Frequently Asked Questions

### Where do I put the CSV file?

Replace the appropriate CSV file in `/assets` with the new one. Use the existing names.

### Where is the mapping from CSV to JSON?

Two build commands within `/package-scripts.yml`.

### How do I manipulate the data from the CSV?

With functions in `/bin/manipulate-___.js`.

## Reference

- [How To - Legacy TACC - Markup Generation Utility](https://confluence.tacc.utexas.edu/x/AYGDC)
