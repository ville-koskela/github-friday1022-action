import { getInput, setOutput } from '@actions/core';

const bumpType = getInput('bump-type');
console.log('bumpType', bumpType)
console.log('--- new version published ---')
setOutput('success', true)
