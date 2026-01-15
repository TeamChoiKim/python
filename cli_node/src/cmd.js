import fs from 'fs';

const getData = () => {
    const f = fs.readFileSync("./data/words.json", 'utf-8');
    return JSON.parse(f);
}

export const list = () => {
    console.log("단어장 호출 실행")
    const arr = getData().list;
    for (const v of arr) {
        console.log(v);
    }
}

export const addWord = a => {
    console.log("단어 추가 실행")
    const addWord = a;      // 추가할 단어 
    const list = getData();
    list.list.push(addWord)
    fs.writeFileSync('./data/words.json', JSON.stringify(list), 'utf-8');
    console.log(`단어 추가 완료 : ${addWord} => 신규추가`)
    console.log(`단어장 : ${list.list}`)
}

export const deleteWord = a => {
    console.log("단어 삭제 실행")
    const deleteWord = a;       // 삭제할 단어
    const list = getData();
    const updateList = list.list.filter(v => v !== deleteWord)
    list.list = updateList;
    fs.writeFileSync('./data/words.json', JSON.stringify(list), 'utf-8');
    console.log(`단어 삭제 완료 : ${deleteWord} => 삭제`)
    console.log(`단어장 : ${list.list}`)
}

export const modifyWord = (a, b) => {
    console.log("단어 수정 실행")
    const findWord = a;         // 변경 전 단어
    const changeWord = b;       // 변경 후 단어
    const list = getData();
    const updateList = list.list.map((v) => {
        if (v === findWord) {
            return changeWord
        }
        else return v
    })
    list.list = updateList;
    fs.writeFileSync('./data/words.json', JSON.stringify(list), 'utf-8');
    console.log(`단어 수정 완료 : ${findWord} => ${changeWord}`)
    console.log(`단어장 : ${list.list}`)
}