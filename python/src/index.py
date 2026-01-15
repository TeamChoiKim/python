import argparse
from cmd import add, list, remove, update

parser = argparse.ArgumentParser(description="단어장 관리 CLI 도구")
subparsers = parser.add_subparsers(dest="command")
#----------------
add_parser = subparsers.add_parser("add", help="단어장에 새 단어를 추가합니다.")
add_parser.add_argument("word", help="추가할 단어")
#----------------
add_parser = subparsers.add_parser("list", help="단어장 목록을 출력합니다.")
#----------------
add_parser = subparsers.add_parser("remove", help="단어를 삭제합니다.")
add_parser.add_argument("word", help="삭제할 단어")
#----------------
add_parser = subparsers.add_parser("update", help="단어를 수정합니다.")
add_parser.add_argument("word", help="수정할 단어")

args = parser.parse_args()

if args.command == "add":
  add(args.word)
elif args.command == "list":
  list()
elif args.command == "remove":
  remove(args.word)
elif args.command == "update":  # else 대신 elif 사용
  update(args.word)
else:
  parser.print_help()
