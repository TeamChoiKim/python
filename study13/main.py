import argparse
from method import empty,목록, 입력, 수정, 삭제

DESC = "CLI Program"
commands = [
  {"command":"v", "arguments": [], "method": 목록},
  {"command":"a", "arguments": ["t"], "method": 입력},
  {"command":"u", "arguments": ["k", "t"], "method": 수정},
  {"command":"d", "arguments": ["k"], "method": 삭제}
]

def checkCLI(args):
  for cmd in commands:
    if args.command == cmd["command"]:
      if cmd["method"] == None:
        empty()
      else:
        cmd["method"](args)
      break
  print("종료")

def run():
  parser = argparse.ArgumentParser(description=DESC)
  subparsers = parser.add_subparsers(dest="command")

  for cmd in commands:
    name = cmd["command"]
    arguments = cmd["arguments"]
    add_parser = subparsers.add_parser(name)
    for arg in arguments:
      add_parser.add_argument(arg)

  checkCLI(parser.parse_args())

if __name__ == "__main__":
  run() 