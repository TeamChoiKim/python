print("파이썬")

import argparse
from cmd import add, wodrList, dele, update

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparser = parser.add_subparsers(dest="command")

list_parser = subparser.add_parser('list', help="단어장")

add_parser = subparser.add_parser('add', help="단어 추가")
add_parser.add_argument('word', help='단어')

dele_parser = subparser.add_parser('dele', help="단어 삭제")
dele_parser.add_argument('word', help='단어')

update_parser = subparser.add_parser('update', help="단어 수정")
update_parser.add_argument('word', help='단어')
update_parser.add_argument('editWord', help='수정단어')

args = parser.parse_args()

if args.command == 'add':
    add(args.word)
elif args.command == 'list':
    wodrList()
elif args.command == 'dele':
    dele(args.word)
elif args.command == 'update':
    update(args.word, args.editWord)