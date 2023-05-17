import { NoeudModel } from 'transpilation-ts'
import Accord from './Accord'

export default class ProgressionAccords extends NoeudModel {
  constructor(public accords: Accord[] = []) {
    super()
  }

  push(accord: Accord): number {
    return this.accords.push(accord)
  }
}
