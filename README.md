# _Custom ShareX Configuration Generator_

[![ShareXGenerator](https://img.shields.io/badge/ShareXGenerator-NodeJS-red?&maxAge=3600&style=plastic)](https://github.com/CyberCDN/ShareXGenerator)

## __Very Easy To Use.__

Add this module to your project and run it.
It will create a folder with your desired chosen name,
Then generate the configuration file in the `.sxcu` format in said folder.

### Example Usage

```js
/**
 * @package ShareX Generator Module Test Script
 * @version v1.1.1
 * @author CyberCDN
 * @copyright 2020
 * @license GPL-v3.0
 * @description Test script to ensure the ShareXGenerator works as intended.
 */

'use strict';
const ShareX = require("../index")
ShareX.generate(
    "ShareX-Configs",
    "FileTest",
    "https://test.com",
    "ImageUploader, FileUploader",
    "POST",
    "test",
    "Text",
    "$json:file.url$"
).then((result) => console.log(result));
```
