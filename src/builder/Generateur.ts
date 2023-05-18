import SolfegeBuilder from './SolfegeBuilder'

export default class Generateur<T> extends SolfegeBuilder<T> {
  build(): T {
    throw new Error('Method not implemented.')
  }
}
