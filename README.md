[![ShareXGenerator](https://img.shields.io/badge/ShareXGenerator-NodeJS-red?&maxAge=3600&style=plastic)](https://github.com/CyberCDN/ShareXGenerator) [![ShareXGenerator](https://img.shields.io/badge/Code%20Quality-B-green?&maxAge=3600&style=plastic)](https://www.codacy.com/gh/CyberCDN/ShareXGenerator/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=CyberCDN/ShareXGenerator&amp;utm_campaign=Badge_Grade) 

###### _Custom ShareX Configuration Generator_

###### Example Usage

```js
/**
 * @package ShareX Generator Module Test Script
 * @version v1.0.0
 * @author CyberCDN
 * @copyright 2020
 * @license GPL-v3.0
 * @description Test script to ensure the ShareXGenerator works as intended.
 */

'use strict';
const ShareX = require("../index")
ShareX.generateConfig(
    "ShareX-Configs",
    "test",
    "https://test.com/sharex/upload",
    "ImageUploader",
    "POST",
    "test",
    "Text",
    "$json:file.url$"
).then((r) => console.log(r));
```
