# Qualtrics IBAN Checker 
by Ali Seyhun Saral - CC BY-SA 4.0 
This is a JavaScript code for Qualtrics surveys in order to validate an IBAN code using the [checksum](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN) algorithm. 

![Survey screen demo](https://raw.githubusercontent.com/seyhunsaral/qualtrics-iban-check/main/screenshots/demo.gif)

## Usage
* Create a text entry question
![Demo text entry question](https://github.com/seyhunsaral/qualtrics-iban-check/blob/main/screenshots/setting1.png)
* Click on `Advanced Question Options` (wheel icon) and click on add JavaScripts.
![Demo text add JavaScript](https://github.com/seyhunsaral/qualtrics-iban-check/blob/main/screenshots/setting2.png)
* Copy paste the code in `qualtrics-iban-checker.js` in the relevant field.
![Demo text add JavaScript](https://github.com/seyhunsaral/qualtrics-iban-check/blob/main/screenshots/setting3.png)
* The rest should work out of the box. Click on `Preview` to test.
* If necessary, modify the messages defined in the `invalidtext` and `validtext` variables.

* The validator function is adapted from a [StackOverflow question](https://stackoverflow.com/a/44657292/1819625), and can be modified if a more advanced check is required.

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
