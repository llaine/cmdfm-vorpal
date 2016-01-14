'use strict';

import Vorpal from 'vorpal';
import Menu from './menu';

let vorpal = new Vorpal();
vorpal.find('exit').remove();

let menu = new Menu();

// This command display the specific musical styles available.
vorpal
    .command('styles', 'Display the musical style availables')
    .action(function(args, callback) {
      this.log('toto')
      callback();
    });

// This command launch a playlist
vorpal
    .command('play <style>', 'Launch a playlist with a specific style')
    .action(function(args, callback) {
      this.log(args);
      callback();
    });

// The exit command, that basically quit the app.
vorpal.command('exit').action(() => console.log('Ciao !'));
vorpal
    .delimiter('cmdfm$')
    .show();

