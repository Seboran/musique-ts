import DureeNote from '../model/DureeNote'
import HauteurNote from '../model/HauteurNote'
import Note from '../model/Note'
import SolfegeBuilder from './SolfegeBuilder'

export default class NoteBuilder extends SolfegeBuilder<Note> {
  private _hauteur!: HauteurNote
  private _duree!: DureeNote

  public hauteur(value: HauteurNote): this {
    this._hauteur = value
    return this
  }
  public duree(value: DureeNote): this {
    this._duree = value
    return this
  }
  build(): Note {
    this.checkParameters()
    return new Note(this._hauteur, this._duree)
  }

  private checkParameters() {
    if (!this._duree) {
      throw new Error('Durée de la note non configurée')
    }
    if (!this._hauteur) {
      throw new Error('Hauteur de la note non configurée')
    }
  }
}
