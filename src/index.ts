import { getInput, setOutput, info } from '@actions/core';
import { exec } from '@actions/exec';
import { checkBumpType, getRepositoryInfo } from './utils/checkBumpType';

const run = async (): Promise<void> => {
  const repoInfo = getRepositoryInfo();
  const bumpType = checkBumpType(repoInfo.headMessage);
  const username = getInput('username');
  info(`username: ${username}`)
  await exec('git config', ['--global', 'user.name', 'Ville Koskela']);
  await exec('git config', ['--global', 'user.email', 'noreply@example.com']);
  info(`bumping with ${bumpType}`)
  await exec('npm version', [bumpType]);
  await exec('git push');
  await exec('git push', ['--follow-tags']);
  setOutput('success', true);
};

run();

/*
const bumpType = getInput('bump-type');
console.log('bumpType', bumpType);
setOutput('success', true);
setOutput('newversion', '1.1.0');
*/
