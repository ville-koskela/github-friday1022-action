import { getInput, setOutput } from '@actions/core';

const bumpType = getInput('bump-type');
console.log('bumpType', bumpType)
setOutput('success', true)
setOutput('newversion', '1.1.0')

console.log('done!')
