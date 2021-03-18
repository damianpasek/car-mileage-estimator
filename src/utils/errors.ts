export class EstimateDateError extends Error {
  constructor(...args: any[]) {
    super(...args)
    this.name = 'EstimateDateError'
  }
}
