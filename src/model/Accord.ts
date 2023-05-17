import Note from './Note'

export default class Accord {
  public notes: Set<Note>
  constructor(notes: Set<Note> | Array<Note>) {
    if (notes instanceof Set<Note>) {
      this.notes = notes
    } else {
      this.notes = new Set(notes)
    }
  }
}
