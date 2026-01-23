from fastapi import FastAPI
import mariadb
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

@app.get("/")
def read_root():
  return {"project": "2team"}

def getConn():
    try:
        return mariadb.connect(
        user=os.getenv('USER'),
        password=os.getenv('PASSWORD'),
        host=os.getenv('HOST'),
        port=int(os.getenv('PORT')),
        database=os.getenv('DATABASE'),
        )  
    except mariadb.Error as e:
        print(f'MariaDB Error: {e}')
        return None     

def findOne(sql):
    result = None
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql) 
            row = cur.fetchone()
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            return dict(zip(columns, row))if row else None
    except mariadb.Error as e:
        print(f'MariaDB Error: {e}')
    return result


def findAll(sql):
    result = []
    try:
       conn = getConn()
       if conn:
            cur = conn.cursor()
            cur.execute(sql) 
            rows = cur.fetchall()
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = [dict(zip(columns, row))for row in rows]
    except mariadb.Error as e:
        print(f'MariaDB Error: {e}')
    return result        

def save(sql):
    result = False
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql) 
            conn.commit()
            cur.close()
            conn.close()
            return True
    except mariadb.Error as e:
        print(f'MariaDB Error: {e}')
    return result

# 셀렉
selectSql = f'''
select * from prj.userinfo
    '''

# userinfo 추가
insertSql = f'''
INSERT INTO prj.friendslist (`request_user_no`,`response_user_no`,`accept`)
VALUE ('1','2','1')
'''

# 삭제
table = 'prj.jobs'
condition = '`jobs_no` = 1'
deleteSql =f'''
DELETE FROM {table} WHERE {condition};
'''
# 수정
condition = "`name` = '안녕', `regdate` = '2000-00-00'"
condition2 ='`no`=1'
updateSql =f'''
UPDATE edu.test SET {condition}
WHERE {condition2};
'''

# print(sql)

# print(findOne(selectSql))
print(findAll(selectSql))
# print(save(insertSql))
# print(save(deleteSql))
# print(save(updateSql))

