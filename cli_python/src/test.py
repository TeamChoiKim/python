import argparse
from words import update, list, insert, remove

DESC = "CLI Program"
commands = [
  {"command":"list", "arguments": [], "method": list},
  {"command":"add", "arguments": ["word"], "method": insert},
  {"command":"update", "arguments": ["id", "word"], "method": update},
  {"command":"delete", "arguments": ["id"], "method": remove}
]

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparser = parser.add_subparsers(dest="command")

for cmd in commands:
    add_parser = subparser.add_parser(cmd['command'])
    for arg in cmd['arguments']:
        add_parser.add_argument(arg)

args = parser.parse_args()

for cmd in commands:
    if args.command == cmd['command']:
        cmd['method'](args)
        break
