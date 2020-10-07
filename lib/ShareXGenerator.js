/**
 * @package ShareX Generator Module
 * @version v1.0.0
 * @author CyberCDN
 * @copyright 2020 
 * @license GPL-v3.0 
 * @description Custom module designed for the usage with anything to do with ShareX-Uploaders & Nodejs.
 */

'use strict';

const fs = require("fs");
const path = require("path")

class ShareX {
    constructor(payload) {
        this.config = payload;
    };

    static async generateConfig(dir, name, url, dest, method, auth, type, output) {

        let sxcu = {
            Name: name,
            DestinationType: dest,
            RequestType: method,
            RequestURL: url,
            FileFormName: "file",
            Arguments: {
                "auth_key": auth
            },
            ResponseType: type,
            URL: output
        };

        this.config = JSON.stringify(sxcu, null, 2);

        try {
            fs.writeFileSync(path.join(process.cwd(), dir, `ShareX.${url.replace("https://","").replace("http://","")}.sxcu`), this.config);
            return this.config;
        } catch (err) {
            //console.log(err)
            fs.mkdirSync(dir);
            return `Your chosen directory name ${dir} has been made.\nAll your config files will be stored in ${dir}\nPlease rerun.`
        }
    }
};

module.exports = ShareX;