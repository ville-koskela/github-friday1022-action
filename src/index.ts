import { getInput, setOutput } from '@actions/core';

const bumpType = getInput('bump-type');
console.log('bumpType', bumpType)
console.log('--- new version published ---')
setOutput('version', '1.0.0')
setOutput('success', true)
