import json
import os

FILE_PATH = "./data/storage.json"

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def getData():
  if not os.path.exists(FILE_PATH):
    result = { "love": [] }
  else :
    f = open(FILE_PATH, "r", encoding="utf-8")
    result = json.load(f)
    f.close()
  return result

def setData(data):
  if not os.path.exists(FILE_PATH):
    pass
  else :  
    f = open(FILE_PATH, "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    f.close()
  list(None)

# 시작
def list(args):
	data=getData()
	if len(data["love1"]) > 0:
		row1 = "="*50
		row2 = "-" *50
		print(row1)
		print(f'ID\t단어')
		for i in range(len(data["love1"])):
			print(row2)
			print(f'{data["love1"][i]["id"]}\t{data["love1"][i]["word"]}')
		print(row2)

	else : empty()

def add(args):
	data=getData()
	id = ( max( (word["id"] for word in data["love1"]), default = 0 ) + 1)
	row = { "id" : id, "word" : args.txt }
	data["love1"].append(row)
	setData(data)

def update(args):
	data=getData()
	for i in range(len(data['love1'])):
		if data['love1'][i]['id'] == int(args.num):
			data['love1'][i]['word'] = args.txt
			break
	setData(data)
def remove(args):
	data=getData()
	for i in range(len(data["love"])):
		if data["love1"][i]["id"] == int(args.num):
			del data["love1"][i]
			break
	setData(data)