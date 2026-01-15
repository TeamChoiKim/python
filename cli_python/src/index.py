import argparse
from cmd import list, add

print("단어장")

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("list", help="목록 보기")
add_parser = subparsers.add_parser("add", help="단어 추가")
add_parser.add_argument("a", help="추가할 단어")


args = parser.parse_args()

if args.command == "list":
    list()
elif args.command == "add":
    add(args.a)
    