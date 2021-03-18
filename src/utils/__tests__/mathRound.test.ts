import { roundToHundredths } from '../mathRound'

describe('Utils: Math round', () => {
  describe('roundToHundredths', () => {
    it.each([
      [0, 0],
      [10, 0],
      [49, 0],
      [50, 100],
      [51, 100],
      [100, 100],
      [190, 200],
      [999, 1000],
      [-55, -100],
    ] as [number, number][])('for %i it should round to %i', (input, expected) => {
      expect(roundToHundredths(input)).toBe(expected)
    })
  })
})
