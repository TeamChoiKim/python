import fs from 'fs';

const getData = () => {
    const f = fs.readFileSync("./data/words.json", "utf-8");
    return JSON.parse(f);
}

export const wordList = () => {
    console.log("단어장 출력");
    
}
