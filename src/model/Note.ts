import { NoeudModel } from 'transpilation-ts'
import DureeNote from './DureeNote'
import HauteurNote from './HauteurNote'

export default class Note extends NoeudModel {
  constructor(public hauteur: HauteurNote, public duree: DureeNote) {
    super()
  }
}
