import Note from './Note'

export default class Accord {
  public notes: Set<Note>
  constructor(notes: Set<Note> | Array<Note>) {
    this.notes = this.mapToSet(notes)
  }

  private mapToSet(notes: Set<Note> | Note[]): Set<Note> {
    if (notes instanceof Set<Note>) {
      return notes
    }
    return new Set(notes)
  }
}
