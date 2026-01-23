from db import findOne, findAll, save

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def userList(args):
  sql = f'''
        SELECT * FROM team2.`user`
        WHERE `delYn` = 0;
        '''
  print(f'번호\t이름\t이멜\t비번\t성별\t가입일\t수정일')
  print('-'*85)
  list = findAll(sql)
  for row in list:
    print(f'{row['no']}\t{row['name']}\t{row['email']}\t{row['gender']}\t{row['regDate']}\t{row['modDate']}')


def boardList(args):
  sql = f'''
SELECT p.`title`, p.`content`, u.`name`, p.`no` FROM team2.`user` AS u
JOIN team2.post AS p
ON(p.user_no = u.`no`)
WHERE p.`delYn` = 0;
'''
  print(f'번호\t제목\t내용\t이름')
  print('-'*50)
  list = findAll(sql)
  for r in list:
    print(f'{r['no']}\t{r['title']}\t{r['content']}\t{r['name']}')

def userAdd(args):
  sql= f'''
INSERT INTO team2.`user` (`name`,`email`,`password`,`gender`)
VALUES('{args.name}','{args.email}','{args.password}','{args.gender}');
'''
  save(sql)
  userList(None)

def boardAdd(args):
    sql= f'''
INSERT INTO team2.`post` (`title`,`content`,`user_no`)
VALUES('{args.title}','{args.content}','{args.user_no}');
'''
    save(sql)
    boardList(None)

def userDetail(args):
  sql=f'''
SELECT * FROM team2.`user`
WHERE `delYn` = 0 AND `user`.no = {args.no};
'''
  print(f'번호\t이름\t이멜\t비번\t성별\t가입일\t수정일')
  print('-'*85)
  list = findAll(sql)
  for row in list:
    print(f'{row['no']}\t{row['name']}\t{row['email']}\t{row['gender']}\t{row['regDate']}\t{row['modDate']}')

def boardDetail(args):
  sql=f'''
SELECT p.`title`, p.`content`, u.`name` FROM team2.`user` AS u
JOIN team2.post AS p
ON(p.user_no = u.`no`)
WHERE p.`delYn` = 0
AND p.no = {args.no};
'''
  print(f'제목\t내용\t이름')
  print('-'*50)
  list = findAll(sql)
  for r in list:
    print(f'{r['title']}\t{r['content']}\t{r['name']}')

def userEdit(args):
  sql=f'''
UPDATE team2.`user` SET `{args.key}` = '{args.value}'
WHERE `user`.no = {args.no};
'''
  save(sql)
  userList(None)

def boardEdit(args):
  sql=f'''
UPDATE team2.post SET `{args.key}` = '{args.value}'
WHERE post.no = {args.no};
'''
  save(sql)
  boardList(None)  

def userDelete(args):
  sql=f'''
UPDATE team2.`user` SET `delYn` = '1'
WHERE `user`.no = {args.no};
'''
  save(sql)
  userList(None)

def boardDelete(args):
  sql=f'''
UPDATE team2.post SET `delYn` = '1'
WHERE `post`.no = {args.no};
'''
  save(sql)
  boardList(None)

