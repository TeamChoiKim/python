import json

DB = "db.json"

def load():
    try:
        with open(DB, "r", encoding="utf-8") as f: return json.load(f)
    except: return []

def save(data):
    with open(DB, "w", encoding="utf-8") as f: json.dump(data, f, ensure_ascii=False)

def add(w):
    data = load()
    data.append(w)
    save(data)
    print(f"추가 완료: {w}")

def list():
    print(load())

def remove(w):
    data = load()
    if w in data: data.remove(w); save(data); print(f"삭제 완료: {w}")

def update(w):
    data = load()
    if w in data:
        data[data.index(w)] = input("새 단어: ")
        save(data)
        print("수정 완료")
