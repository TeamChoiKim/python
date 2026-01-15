import json
import copy

def getData():
    f = open('./data/memo.json', 'r', encoding='utf-8')
    return json.load(f)

def wodrList():
    data = getData()
    arr = data['list']
    print(arr)

def add(word):
    data = getData()
    data['list'].append(word)
    print(data['list'], f'추가단어: {word}')
    f=open('./data/memo.json', 'w', encoding='utf-8')
    json.dump(data, f, ensure_ascii=False)

def dele(word):
    data = getData()
    newData = copy.deepcopy(data)
    arr = newData['list']
    if word in arr:
        arr.remove(word)
        f = open('./data/memo.json','w', encoding='utf-8')
        json.dump(newData, f, ensure_ascii=False)
        print(newData)

def update(word, editWord):
    data=getData()
    newData = copy.deepcopy(data)
    arr = newData['list']
    if word in arr:
        arr[arr.index(word)] = editWord
        f = open('./data/memo.json','w', encoding='utf-8')
        json.dump(newData, f, ensure_ascii=False)
        print(newData)