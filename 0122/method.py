from db import findOne, findAll, save

def empty(args):
    print('함수 정의가 되어있지 않습니다.')
    
def select(args):
    sql = '''SELECT `id`, `word`, `nickname`,
      DATE_FORMAT(`regDate`,'%Y-%m-%d %H:%i:%s') AS regDate
      FROM edu.study
      '''
    list = findAll(sql)
    print(f'번호\t이름\t글자\t생성일자')
    print("-"*50)
    for row in list:
         print(f'{row["id"]:<3} {row["nickname"]:<15} {row["word"]:<28} {row["regDate"]}')
         #print(f'{row["id"]}\t{row["word"]}\t\t{row["regDate"]}')

def insert(args):
    print(args.word)
    sql = f"INSERT INTO edu.study (`nickname`,`word`) VALUES('{args.name}','{args.word}');"
    save(sql)
    select(None)


def update(args):
    sql =f"UPDATE edu.study SET `word` = '{args.word}' WHERE `id` = {args.id}"
    save(sql)
    select(None)

def delete(args):
    sql = f"DELETE FROM edu.study WHERE `id` IN ({args.id})"
    save(sql)
    select(None)