import argparse
from cmd import wordList, addWord, deleteWord, modifyWord

print("단어장")

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("list", help="목록 보기")
add_parser = subparsers.add_parser("add", help="단어 추가")
add_parser.add_argument("a", help="추가할 단어")
add_parser = subparsers.add_parser("delete", help="단어 삭제")
add_parser.add_argument("a", help="삭제할 단어")
add_parser = subparsers.add_parser("modify", help="단어 삭제")
add_parser.add_argument("a", help="변경 전 단어")
add_parser.add_argument("b", help="변경 후 단어")


args = parser.parse_args()

if args.command == "list":
    wordList()
elif args.command == "add":
    addWord(args.a)
elif args.command == "delete":
    deleteWord(args.a)
elif args.command == "modify":
    modifyWord(args.a, args.b)