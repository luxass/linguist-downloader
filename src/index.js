const axios = require("axios");
const jsYaml = require("js-yaml");
const fs = require("fs");

const linguistUrl =
    "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml";

axios.get(linguistUrl).then((response) => {
    const parsedYaml = jsYaml.load(response.data);
    fs.writeFileSync("languages.json", JSON.stringify(parsedYaml, null, 2));
});
