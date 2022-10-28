import { getInput, setOutput } from '@actions/core';

const bumpType = getInput('bump-type');
console.log('bumpType', bumpType)
setOutput('version', '1.1.0')
setOutput('success', true)
