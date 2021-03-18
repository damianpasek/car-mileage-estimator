import { mockedCars } from '../../../__mocks__/car.mocks'
import { getYearlyMileage } from '../yearlyMileage'

describe('Yearly Mileage', () => {
  const [kiaCeed, fordFiesta, mazda3] = mockedCars

  describe('getYearlyMileage', () => {
    it('should calculate yearly mileage for given car', () => {
      expect(getYearlyMileage(kiaCeed)).toBe(10000)
      expect(getYearlyMileage(fordFiesta)).toBe(17500)
    })

    it('should return 7900 mileage when there are no events', () => {
      expect(getYearlyMileage(mazda3)).toBe(7900)
    })
  })
})
