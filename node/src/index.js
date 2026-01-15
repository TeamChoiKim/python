import {Command} from 'commander';
import {add, list, remove, update} from './cmd.js';

const program = new Command();

program
    .name('word-cli')
    .description('단어장 관리 CLI 도구');

// 입력 (Create) 명령어
program
    .command('add')
    .argument('<word>', "추가할 단어")
    .description('단어장에 새 단어를 추가합니다.')
    .action(add);

// 목록 (Read) 명령어
program
    .command('list')
    .description('단어장 목록을 출력합니다.')
    .action(list);

// 삭제 (Delete) 명령어
program
    .command('remove')
    .argument('<word>','삭제할 단어')
    .description('단어장에서 특정 단어를 삭제합니다.')
    .action(remove);

// 수정 (Update) 명령어
program
    .command('update')
    .argument('<old_word>', '기존 단어')
    .argument('<new_word>', '새 단어')
    .description('단어를 수정합니다.')
    .action(update);
    
program.parse();