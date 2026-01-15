import fs from 'fs';
import { json } from 'stream/consumers';

const getData = () => {
    const f = fs.readFileSync('./data/word.json', 'utf-8')
    return JSON.parse(f)

}



export const add = (word) => {
    const data = getData()
    const list = data.wordList
    const key = (list.length === 0 ? 1 : Number(Object.keys(list.at(-1))) + 1)
    list.push({ [key]: word })

    const f = fs.writeFileSync('./data/word.json', JSON.stringify(data), 'utf-8')

}

export const list = () => {
    const data = getData();
    return data.wordList.map((v) => console.log(v))
}

export const del = (key) => {
    const data = getData();
    let list = data.wordList;
    list = list.filter((v) => Number(Object.keys(v)) !== Number(key))
    const delData = { ...data, wordList: list }
    const f = fs.writeFileSync('./data/word.json', JSON.stringify(delData), 'utf-8')
}

export const edt = (key, edtWord) => {
    const data = getData();
    const list = data.wordList;

    const arrList = list.map((v) => Number(Object.keys(v)) === Number(key) ? { [key]: edtWord } : v)

    console.log(arrList)

    const editData = { ...data, wordList: [...arrList] }
    const f = fs.writeFileSync('./data/word.json', JSON.stringify(editData), 'utf-8')
}
