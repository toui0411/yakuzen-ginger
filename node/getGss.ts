import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet"
import json from "./conf/netflix-chocolaterie-45d65c9b7e76.json"
const doc = new GoogleSpreadsheet("1MFqn1PxFzdQql438lYKU-otXbdxO7TJivm2i_1Zl-l8"); // ここはスプレッドシートごとに書き換える必要がある
let path = require('path');
let fs = require('fs');

interface stringKey {
  [key: string]: string
}
doc.useServiceAccountAuth(json);

const OUTPUT_DIR = path.join(__dirname, './data/');

const writeJson = async (json: any[]) => {
  fs.writeFile(`${OUTPUT_DIR}data.json`, JSON.stringify(json, null, '    '), () => {
    console.log('123123:', 123123);
  });
}

const printJson = async (rows: GoogleSpreadsheetRow[], props: string[]) => {
  let data = []
  for (const row of rows) {
    let propData = {} as stringKey
    for (const prop of props) {
      propData[prop] = row[prop]
    }
    data.push(propData)
  }
  await writeJson(data)
}

const printSheet = async (sheetTitle:string, props:string[]) => {
  const sheet = doc.sheetsByTitle[sheetTitle];
  const rows = await sheet.getRows();
  await printJson(rows, props)
}

(async () => {
  await doc.loadInfo();

  const questionProps = ["id", "sentence", "answerA", "answerB"]
  await printSheet("question", questionProps)

})();


