#!/usr/bin/env node

const cmd = require('node-cmd');
const yargs = require('yargs')
const ora = require('ora');
const prompts = require('prompts');

const argv = yargs
	.usage("Usage: -dryrun")
	.option("dryrun", { 
		alias: "d", 
		describe: "Show all node_modules folders (and sizes) that would be deleted", 
		type: "boolean"
	})
	.argv;

if (argv.dryrun) {
	const spinner = ora('DRYRUN! NOT nuking... listing might take a while...').start();
	cmd.get('find . -name "node_modules" -type d -prune -print | xargs du -chs', function(err, data, stderr) {
		spinner.stop();
		console.log(data)
	})
} else {

	(async () => {
		const response = await prompts({
			type: 'confirm',
			name: 'confirm',
			message: 'Are you sure? There is no going back',
			initial: false
		});
	
		if (response.confirm) {
			const spinner = ora('In nineteen minutes, this area\'s gonna be a cloud of vapor the size of Nebraska....').start();
			cmd.get("find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \\;", function(err, data, stderr) {
				spinner.stop();
				console.log('Game Over man, Game Over!! Nuked:\n', data)
			})
		} else {
			console.log('Why don\'t we just bug out and call it even? Why are we talking about this')
		}
	})();

}