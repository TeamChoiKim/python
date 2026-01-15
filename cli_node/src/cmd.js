import fs from 'fs'

export const getData = () => {
    const d = fs.readFileSync('./data/memo.json', 'utf-8')
    return JSON.parse(d)
}

export const list = () => {
    console.log('리스트함수 호출 됨')
    const arr = getData().list
    console.log(arr)
}

export const add = (word) => {
    const data = getData()
    const id = Date.now()
    const result = { id, word }
    data.list.push(result)
    console.log(data, `추가한 값: ${result}`)
    fs.writeFileSync('./data/memo.json', JSON.stringify(data), 'utf-8')
}

export const del = (id) => {
    const data = getData()
    let arr = data.list
    arr = arr.filter(v => v.id !== Number(id))
    data.list = arr
    fs.writeFileSync('./data/memo.json', JSON.stringify(data), 'utf-8')
    console.log(data, `지운 id: ${id}`)
}


export const update = (word, editWord) => {
    const data = getData()
    const arr = data.list
    if (arr.includes(word))
        arr[arr.indexOf(word)] = editWord
    const editData = { ...data, list: arr }
    fs.writeFileSync('./data/memo.json', JSON.stringify(editData), 'utf-8')
    console.log(editData)
}