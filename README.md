# Qualtrics IBAN Checker 
by Ali Seyhun Saral - CC BY-SA 4.0 
This is a JavaScript code for Qualtrics surveys in order to validate an IBAN code using the [checksum](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN) algorithm. 

The validator function is adapted from a [StackOverflow question](https://stackoverflow.com/a/44657292/1819625), and can be modified if a more advanced check is required.

## Usage
* Create a text entry question

* Click on `Advanced Question Options` (wheel icon) and click on add JavaScripts.

* Copy paste the code in `qualtrics-iban-checker.js` in the relevant field.

* If necessary, modify the messages defined in the `invalidtext` and `validtext` variables.


## License & Disclaimer
This repository (with the exception of `screenshots` directory) is licensed with [Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material
    for any purpose, even commercially.

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original. k
    
### Notes
- IBAN Checksum Function `validateIbanCheckum(iban)` is adapted from https://stackoverflow.com/a/44657292 by LukStorms CC BY-SA 4.0
- License descriptions are adapted from https://creativecommons.org/licenses/by-sa/4.0/ CC BY 4.0
- Use at your own risk. We are not any liable for any direct or indirect losses, costs, expenses or damages arising out of the use of the code.
- This repository and the owner has is not related to Qualtics LLC.
- Screenshots in the `screenshots` directory to demonstrate the usage of the code contains the interface of Qualtrics. These interfaces are property of Qualtrics LLC and they are not a part of the license. 
