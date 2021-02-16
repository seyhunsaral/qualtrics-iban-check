# Qualtrics IBAN Checker 
by Ali Seyhun Saral - CC BY-SA 4.0 
This is a JavaScript code for Qualtrics surveys in order to validate an IBAN code using the [checksum](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN) algorithm. 

The validator function is adapted from a [StackOwerflow question](https://stackoverflow.com/a/44657292/1819625), and can be modified if a more advanced check is required.

## Usage
* Create a text entry question

* Click on `Advanced Question Options` (wheel icon) and click on add JavaScripts.

* Copy paste the code in `qualtrics-iban-checker.js` in the relevant field.

* If necessary, modify the messages defined in the `invalidtext` and `validtext` variables.
