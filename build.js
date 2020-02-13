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

const primaryChalk = chalk.rgb(172, 20, 90);
const secondaryChalk = chalk.cyan;

const data = {
  name: primaryChalk.bold('                  Noviadi Hapsoro'),
  work: chalk.white('Software Engineer'),
  twitter: chalk.gray('https://twitter.com/') + secondaryChalk('nobitasama'),
  npm: chalk.gray('https://npmjs.com/') + secondaryChalk('~noviadi'),
  github: chalk.gray('https://github.com/') + secondaryChalk('noviadi'),
  linkedin: chalk.gray('https://linkedin.com/in/') + secondaryChalk('noviadihapsoro'),
  web: secondaryChalk('https://noviadi.github.io'),
  npx: chalk.gray('npx ') + secondaryChalk('noviadi'),
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

fs.writeFileSync(path.join(__dirname, 'bin/output'), primaryChalk(boxen(output, options)))

