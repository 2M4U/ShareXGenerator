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
const path = require("path");

class ShareX {
    constructor(payload) {
        this.config = payload;
        this.error = payload;
    };

    static async generate(dir, name, url, dest, method, auth, type, output) {

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
                switch (fs.existsSync(path.join(process.cwd(), dir, `ShareX.${name}.sxcu`))) {
                    case true:
                        this.error = {
                                error_code: 1337,
                                error_result: {
                                    reason: "File Exists",
                                    directory: `${path.join(dir, `ShareX.${name}.sxcu`)}`
                                }
                            };
                        return this.error;
                case false: 
                    fs.writeFileSync(path.join(process.cwd(), dir, `ShareX.${name}.sxcu`).replace("\\",""), this.config);
                    return this.config;
                default:
                    fs.writeFileSync(path.join(process.cwd(), dir, `ShareX.${name}.sxcu`), this.config);
                    return this.config;
            }
        } catch (err) {
            fs.mkdirSync(dir);
            switch (fs.existsSync(path.join(process.cwd(), dir, `ShareX.${name}.sxcu`))){
                case true: 
                    this.error = {
                        error_code: 1337,
                        error_result: {
                            reason: "File Exists",
                            directory: `${path.join(dir, `ShareX.${name}.sxcu`)}`
                        }
                    };
                    return this.error;
                case false: 
                    fs.writeFileSync(path.join(process.cwd(), dir, `ShareX.${name}.sxcu`), this.config);
                    return this.config;
                default:
                    fs.writeFileSync(path.join(process.cwd(), dir, `ShareX.${name}.sxcu`), this.config);
                    return this.config;
            }
        }
    }
};

module.exports = ShareX;