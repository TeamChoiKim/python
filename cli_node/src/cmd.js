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
    if (list.list.includes(addWord)) {
        console.log(`${addWord}(이)가 이미 단어장에 존재합니다.`)
        console.log(`단어 추가 취소 : ${addWord} => 단어 중복됨`)
        console.log(`단어장 : ${list.list}`)
        return
    }
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
    if (!list.list.includes(findWord)) {
        console.log(`${findWord}(이)가 단어장에 존재하지 않습니다.`)
        console.log(`단어 변경 취소 : ${findWord} => 변경할 단어 없음`)
        console.log(`단어장 : ${list.list}`)
        return
    }
    else if (list.list.includes(changeWord)) {
        console.log(`${changeWord}(이)가 이미 단어장에 존재합니다.`)
        console.log(`단어 변경 취소 : ${changeWord} => 단어 중복됨`)
        console.log(`단어장 : ${list.list}`)
        return
    }
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