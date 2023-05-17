import { NoeudModel } from 'transpilation-ts'

export default class DureeNote extends NoeudModel {
  constructor(public valeur: number) {
    super()
  }
}
