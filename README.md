# Qualtrics IBAN Checker 
by Ali Seyhun Saral - CC BY-SA 4.0 
This is a JavaScript code for Qualtrics surveys in order to validate an IBAN code using the [checksum](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN) algorithm. 

The validator function is adapted from a [StackOverflow question](https://stackoverflow.com/a/44657292/1819625), and can be modified if a more advanced check is required.

## Usage
* Create a text entry question

* Click on `Advanced Question Options` (wheel icon) and click on add JavaScripts.

* Copy paste the code in `qualtrics-iban-checker.js` in the relevant field.

* If necessary, modify the messages defined in the `invalidtext` and `validtext` variables.


## License & Notes
This repository (with the exception of screenshots show Qualtrics Interface) is licensed with [Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material
    for any purpose, even commercially.

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original. k
    
    
### Adaptations
IBAN Checksum Function `validateIbanCheckum(iban)` is adapted from https://stackoverflow.com/a/44657292 by LukStorms CC BY-SA 4.0
License Descriptions is adapted from https://creativecommons.org/licenses/by-sa/4.0/ CC BY 4.0
