import Accord from '../model/Accord'
import NoteBuilder from './NoteBuilder'
import SolfegeBuilder from './SolfegeBuilder'

export default class AccordBuilder extends SolfegeBuilder<Accord> {
  private _notes: Array<NoteBuilder> = []

  addNote(): this {
    return this
  }
  build(): Accord {
    throw new Error('Method not implemented.')
  }
}
