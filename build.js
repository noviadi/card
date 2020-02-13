'use strict'

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const data = {
  name: chalk.greenBright.bold('                  Noviadi Hapsoro'),
  work: chalk.white('Software Engineer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('nobitasama'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan('~noviadi'),
  github: chalk.gray('https://github.com/') + chalk.cyan('noviadi'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('noviadihapsoro'),
  web: chalk.cyan('https://noviadi.github.io'),
  npx: chalk.greenBright('npx noviadi'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
};

const newline = '\n'
const heading = `${data.name}`
const working = `                 ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + // data.name
               working + newline + // data.labelWork + data.work
               newline + newline + // Blank line
               webing + newline + // data.labelWeb + data.web
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               npming + newline + newline + // data.labelnpm + data.npm
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))

