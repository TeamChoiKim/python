import json

def getData():
    f = open("./data/words.json", "r", encoding="utf-8")
    return json.load(f)

def list():
    print("단어장 리스트 출력")
    data = getData()
    for v in data["list"]:
        print(v)
        
def add(a):
    print("단어 추가 실행")
    list = getData()
    addWord = a
    list["list"].append(addWord)
    f = open("./data/words.json", "w", encoding="utf-8")
    json.dump(list, f, ensure_ascii=False)
    print(f'단어 추가 완료 : {addWord} => 신규추가')
    
def delete(a):
    print("단어 삭제 실행")
    list = getData()
    deleteWord = a
    