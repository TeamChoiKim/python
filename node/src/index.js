import { Command } from 'commander'
import { add, list, del, edt } from './cmd.js'

const program = new Command();

program.command('add')
    .argument('<word>')
    .description('단어 추가')
    .action((word) => {
        add(word)
    });

program.command('list')
    .description('단어 목록')
    .action(list);

program.command('del')
    .argument('<key>')
    .description('단어 삭제')
    .action((key) => {
        del(key)
    });

program.command('edit')
    .argument('<key>')
    .argument('<edtWord>')
    .description('단어 수정')
    .action((key, edtWord) => {
        edt(key, edtWord)
    });

program.parse(process.argv);

