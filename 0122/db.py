import mariadb
from dotenv import load_dotenv
load_dotenv() # env파일에 있는 내용을 환경변수로 설정한다
import os

def getConn():
    try:
        return mariadb.connect(
        user=os.getenv('USER'),   #환경변수를 가져온다
        password=os.getenv('PASSWORD'),
        host=os.getenv('HOST'),
        port=int(os.getenv('PORT')),
        database=os.getenv('DATABASE')
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


