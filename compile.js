const path = require("path");
const fs = require("fs");
const solc = require("solc");

const pathDir = path.join(__dirname, "smart-contract", "map.sol");
const MapSourceName = "map.sol";
const readMapFile = fs.readFileSync(pathDir, "utf-8");

let input = {
  language: "Solidity",
  sources: { [MapSourceName]: { content: readMapFile } },
  settings: { outputSelection: { "*": { "*": ["*"] } } },
};

let compiledFile;

try {
  const compiledFiles = JSON.parse(solc.compile(JSON.stringify(input)));
  compiledFile = compiledFiles.contracts[MapSourceName]?.Map;

  if (!compiledFile) {
    console.error("Compilation failed or structure is not as expected.");
  }
} catch (error) {
  console.error("Error during compilation:", error);
}

module.exports = { compiledFile };
