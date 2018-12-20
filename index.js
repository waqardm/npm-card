#!/usr/bin/env node
const {white, cyan, green,bold, blue} = require("colorette")

// Text + chalk definitions
var work = white( '🕵🏻‍ Searching for my first tech role')
var twitter = cyan('https://twitter.com/lawyerscode')
var github = cyan('https://github.com/waqardm')
var site = cyan('https://lawyerscode.co.uk')
var npx = white('npx waqar')

var newline = '\n'
var heading = `${white('  Waqar Mohammad /')} ${cyan('lawyerscode')}`
var working = `${white(bold('     Work:'))}  ${work}`
var twittering = `${white(bold('  Twitter:'))}  ${twitter}`
var githubing = `${white(bold('   GitHub:'))}  ${github}`
var webing = `${white(bold('      Web:'))}  ${site}`
var carding = `${white(bold('     Card:'))}  ${npx}`

let output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + webing  + newline  + newline + carding


console.log(output)
