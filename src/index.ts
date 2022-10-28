import { getInput, setOutput } from '@actions/core';

const bumpType = getInput('bump-type');
console.log('bumpType', bumpType)
setOutput('success', true)
