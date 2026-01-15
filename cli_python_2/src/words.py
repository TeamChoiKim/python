import json


def getData():
    f = open("./data/words.json", "r", encoding="utf-8")
    result = json.load(f)
    f.close()
    return result


def list():
    data = getData()
    if len(data["words"]) > 0:
        line1 = "=" * 100
        line2 = "-" * 100
        print(line1)
        print(f'번호\t내용')
        for i in range(len(data["words"])):
            if i < len(data["words"]):
                print(line2)
            print(f'{data["words"][i]["id"]}\t{data["words"][i]["word"]}')
        print(line1)
    else:
        print("데이터가 없습니다.")