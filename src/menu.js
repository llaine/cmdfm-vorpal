'use strict';

import FONTS from 'cfonts';
import chalk from 'chalk';
import Player from './player';

const fonts_attributes = {
  'text': 'CMD.FM',
  'font': 'block',
  'colors': '',
  'background': 'Black',
  'letterSpacing': 1.4,
  'space': true,
  'maxLength': '10'
};

class Menu {
  constructor() {
    this.clearConsole();
    this.displayHeader();

    this.player = new Player();
  }

  displayBanner() {
    new FONTS(fonts_attributes);
    console.log(`The jukebox application made
                 by ${chalk.green(chalk.underline('darksioul'))} with ${chalk.red('<3')} \n\n`)
  }

  clearConsole() {
    console.log('\u001B[2J\u001B[0;0f');
  }
  displayHeader() {
    this.displayBanner();
  }

  displayCurrentSong(songName) {

  }
}


export default Menu