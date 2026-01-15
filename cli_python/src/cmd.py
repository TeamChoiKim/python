import json


def getData():
    f = open("./data/words.json", "r", encoding="utf-8")
    return json.load(f)


def wordList():
    print("단어장 전체 리스트 출력")
    data = getData()
    for v in data["list"]:
        print(v)


def addWord(a):
    print("단어 추가 실행")
    data = getData()
    addWord = a
    if addWord in data["list"]:
        print(f'{addWord}(이)가 이미 단어장에 존재합니다.')
        print(f'단어 변경 취소 : {addWord} => 단어 중복됨')
        for v in data["list"]:
            print(v)
        return
    data["list"].append(addWord)
    f = open("./data/words.json", "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    print(f'단어 추가 완료 : {addWord} => 신규추가')
    for v in data["list"]:
        print(v)


def deleteWord(a):
    print("단어 삭제 실행")
    data = getData()
    deleteWord = a
    if deleteWord not in data["list"]:
        print(f'{deleteWord}(이)가 단어장에 존재하지 않습니다.')
        print(f'단어 변경 취소 : {deleteWord} => 삭제할 단어 없음')
        for v in data["list"]:
            print(v)
        return
    updateData = filter(lambda v: v != deleteWord, data["list"])
    data["list"] = list(updateData)
    f = open("./data/words.json", "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    print(f'단어 삭제 완료 : {deleteWord} => 삭제')
    for v in data["list"]:
        print(v)


def modifyWord(a, b):
    print("단어 수정 실행")
    data = getData()
    findWord = a
    changeWord = b
    if findWord not in data["list"]:
        print(f'{findWord}(이)가 단어장에 존재하지 않습니다.')
        print(f'단어 변경 취소 : {findWord} => 변경할 단어 없음')
        for v in data["list"]:
            print(v)
        return
    elif changeWord in data["list"]:
        print(f'{changeWord}(이)가 이미 단어장에 존재합니다.')
        print(f'단어 변경 취소 : {changeWord} => 단어 중복됨')
        for v in data["list"]:
            print(v)
        return
    updateData = map(lambda v: changeWord if v == findWord else v, data["list"])
    data["list"] = list(updateData)
    f = open("./data/words.json", "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    print(f'단어 변경 완료 : {findWord} => {changeWord}')
    for v in data["list"]:
        print(v)
    