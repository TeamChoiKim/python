console.log('자바스크립트')

import { Command } from 'commander'
import { add, list, del, update } from './cmd.js'

const program = new Command();

program
    .command('add')
    .argument('<word>')
    .description('단어')
    .action(add);

program
    .command('del')
    .argument('<id>')
    .description('지우기')
    .action(del);

program
    .command('update')
    .argument('<word>')
    .argument('<editWord>')
    .description('수정하기')
    .action(update);

program
    .command('list')
    .description('목록 보기')
    .action(list)


program.parse(process.argv)