import { BumpType, RepositoryInfo } from '../types';
import { readFileSync } from 'fs';
import { error, info } from '@actions/core';

export const getRepositoryInfo = (): RepositoryInfo => {
  const path: string = process.env.GITHUB_EVENT_PATH || '';
  if (path.length < 1) {
    return {
      headMessage: '',
    };
  }
  try {
    const event = JSON.parse(readFileSync(path, { encoding: 'utf-8' }));
    info(event.commits[0])
    return {
      headMessage: event.commits[0].message,
    };
  } catch (err) {
    if (err instanceof Error) {
      error(err);
    } else {
      error('getRepositoryInfo() failed');
    }
  } finally{
    return {
      headMessage: ''
    }
  }
};

export const checkBumpType = (message: string): BumpType => {
  if (message.toLowerCase().includes('#major')) {
    return 'major';
  } else if (message.toLowerCase().includes('#minor')) {
    return 'minor';
  } else {
    return 'patch';
  }
};
