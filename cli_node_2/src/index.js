import { Command } from 'commander';
import { wordList, addWord } from './cmd.js';

console.log("-단어장-")

const program = new Command();

program
    .command('list')
    .description('단어 목록')
    .action(wordList);

// program
//     .command('add')
//     .argument('<a>')
//     .description('단어 추가')
//     .action(addWord);

// program
//     .command('delete')
//     .argument('<a>')
//     .description('단어 삭제')
//     .action(deleteWord);

// program
//     .command('modify')
//     .argument('<a>')
//     .argument('<b>')
//     .description('단어 수정')
//     .action(modifyWord);

program.parse(process.argv);