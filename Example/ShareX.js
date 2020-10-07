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
    "https://test.com",
    "ImageUploader",
    "POST",
    "test",
    "Text",
    "$json:file.url$"
).then((r) => console.log(r));