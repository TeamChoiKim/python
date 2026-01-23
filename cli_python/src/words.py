import json

FILE_PATH = "./data/memo.json"

def getData():
  f = open(FILE_PATH, "r", encoding="utf-8")
  result = json.load(f)
  f.close()
  return result

def setData(data):
  f = open(FILE_PATH, "w", encoding="utf-8")
  json.dump(data, f, ensure_ascii=False)
  f.close()
  list(data)


def list(a):
  data=getData()
  if len(data['words']) > 0:
    line1 = "="*50
    line2 = "-"*50
    print(line1)
    print("번호\t내용")
    for i in range(len(data['words'])):
        if i < len(data['words']): print(line2)
        print(f'{data['words'][i]['id']}\t{data['words'][i]['word']}')
    print(line1)
  else: print('No data')

def insert(word):
  data = getData()
  id = (max((word["id"] for word in data["words"]), default=0) + 1)
  row = {"id": id, "word": word.word}
  data["words"].append(row)
  setData(data)

def remove(args):
  data = getData()
  for i in range(len(data["words"])):
    if data["words"][i]["id"] == int(args.id):
      del data["words"][i]
      break
  setData(data)

def update(args):
  data = getData()
  for i in range(len(data['words'])):
    if data['words'][i]['id'] == int(args.id):
      data['words'][i]['word'] = args.word
      break
  setData(data)
