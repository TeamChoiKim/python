import argparse
from words import list

print("단어장")

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("list")


args = parser.parse_args()

if args.command == "list": list()