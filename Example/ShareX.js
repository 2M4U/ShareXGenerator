/**
 * @package ShareX Generator Module Test Script
 * @version v1.0.0
 * @author CyberCDN
 * @copyright 2020 
 * @license GPL-v3.0 
 * @description Test script to ensure the ShareXGenerator works as intended.
 */

'use strict';
const ShareX = require("sharexgenerator");
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
