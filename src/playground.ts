import Accord from './model/Accord'
import DureeNote from './model/DureeNote'
import HauteurNote from './model/HauteurNote'
import Note from './model/Note'

const accord = new Accord([
  new Note(new HauteurNote(2), new DureeNote(1)),
  new Note(new HauteurNote(3), new DureeNote(1)),
])

console.log(accord)
