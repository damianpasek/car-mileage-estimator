export class EstimateDateError extends Error {
  constructor (...args: any[]) {
    super(...args)
    this.name = 'EstimateDateError'
  }
}

export class OdometerError extends Error {
  constructor (...args: any[]) {
    super(...args)
    this.name = 'OdometerError'
  }
}
