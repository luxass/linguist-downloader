const axios = require("axios");
const jsYaml = require("js-yaml");
const fs = require("fs");

const linguistUrl =
    "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml";

module.exports = async function downloader() {
    const response = await axios.get(linguistUrl);
    return jsYaml.load(response.data);
};
