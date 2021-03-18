import { mockedCars } from '../__mocks__/car.mocks'
import { estimateMileage } from '../estimateMileage'
import { ICar } from '../interfaces/Car'
import * as yearlyMileage from '../utils/mileageEstimator/yearlyMileage'
import * as mileageEvents from '../utils/mileageEstimator/mileageEvents'

describe('Estimate Mileage', () => {
  const [kiaCeed, fordFiesta, mazda3] = mockedCars

  const estimatedDate = new Date('2021-06-01')
  const mostRecentEvent = { date: new Date('2021-03-01'), mileage: 3000 }

  describe('Unit tests', () => {
    beforeEach(() => {
      jest.spyOn(yearlyMileage, 'getYearlyMileage').mockReturnValue(1000)
      jest.spyOn(mileageEvents, 'getMostRecentMileage').mockReturnValue(mostRecentEvent)
      jest.spyOn(mileageEvents, 'getNumberOfDaysToEstimate').mockReturnValue(365)
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should invoke particular methods with proper arguments', () => {
      estimateMileage(kiaCeed, estimatedDate)

      expect(yearlyMileage.getYearlyMileage).toHaveBeenCalledWith(kiaCeed)
      expect(mileageEvents.getMostRecentMileage).toHaveBeenCalledWith(kiaCeed, estimatedDate)
      expect(mileageEvents.getNumberOfDaysToEstimate).toHaveBeenCalledWith(mostRecentEvent.date, estimatedDate)
    })

    it('should return estimated value for given date', () => {
      const estimatedMileage = estimateMileage(kiaCeed, estimatedDate)

      expect(estimatedMileage).toBe(4000)
    })
  })

  describe('Integration test', () => {
    it.each([
      ['2021-06-01', 31000, kiaCeed],
      ['2022-06-01', 54200, fordFiesta],
      ['2022-01-01', 7900, mazda3],
      ['2023-01-01', 15800, mazda3],
    ] as [string, number, ICar][])(
      'on %s date car should have %i mileage',
      (date, expectedMileage, car) => {
        expect(estimateMileage(car, new Date(date))).toBe(expectedMileage)
      },
    )
  })
})
