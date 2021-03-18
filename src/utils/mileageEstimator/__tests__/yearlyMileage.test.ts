import { mockedCars } from '../../../__mocks__/car.mocks'
import { ICar } from '../../../interfaces/Car'
import { roundToHundredths } from '../../mathRound'
import { getYearlyMileage } from '../yearlyMileage'

describe('Yearly Mileage', () => {
  const [kiaCeed, fordFiesta, mazda3] = mockedCars

  describe('getYearlyMileage', () => {
    it.each([
      [10000, kiaCeed],
      [17500, fordFiesta],
    ] as [number, ICar][])(
      'should calculate yearly mileage (%i) for given car',
      (expectedMileage: number, car: ICar) => {
        const yearlyMileage = getYearlyMileage(car)
        expect(roundToHundredths(yearlyMileage)).toBe(expectedMileage)
      },
    )

    it('should return 7900 mileage when there are no events', () => {
      expect(getYearlyMileage(mazda3)).toBe(7900)
    })
  })
})
