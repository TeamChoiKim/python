import fs from 'fs'

export const getData = () => {
    const d = fs.readFileSync('./data/memo.json', 'utf-8')
    return JSON.parse(d)
}

export const add = (word) => {
    const data = getData()
    const result = word
    data.list.push(result)
    console.log(data, `추가한 값: ${result}`)
    fs.writeFileSync('./data/memo.json', JSON.stringify(data), 'utf-8')
}

export const list = () => {
    console.log('리스트함수 호출 됨')
    const arr = getData().list
    console.log(arr)
}

export const del = (word) => {
    const data = getData()
    let arr = data.list
    if (arr.includes(word)) {
        arr = arr.filter((_, i) => i !== arr.indexOf(word))
        const newData = { ...data, list: arr }
        fs.writeFileSync('./data/memo.json', JSON.stringify(newData), 'utf-8')
        console.log(newData)
    }
}

export const update = (word, editWord) => {
    const data = getData()
    const arr = data.list
    if(arr.includes(word)) 
        arr[arr.indexOf(word)] = editWord
    const editData = {...data, list: arr}
     fs.writeFileSync('./data/memo.json', JSON.stringify(editData), 'utf-8')
        console.log(editData)
}