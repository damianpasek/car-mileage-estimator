import { mockedCars } from '../../../__mocks__/car.mocks'
import {
  getFirstRegistrationEvent,
  getMostRecentMileage,
  getNumberOfDaysToEstimate,
} from '../mileageEvents'

describe('Mileage events', () => {
  const [kiaCeed, _, mazda3] = mockedCars

  describe('getFirstRegistrationEvent', () => {
    it('should return IMileageEvent object containing initial mileage', () => {
      expect(getFirstRegistrationEvent(kiaCeed)).toEqual({
        date: new Date('2018-06-01'),
        mileage: 0,
      })

      expect(getFirstRegistrationEvent(mazda3)).toEqual({
        date: new Date('2021-01-01'),
        mileage: 0,
      })
    })
  })

  describe('getMostRecentMileage', () => {
    it('should return last event', () => {
      expect(getMostRecentMileage(kiaCeed, new Date('2021-03-18'))).toEqual(kiaCeed.mileageEvents[3])
    })

    it('should return latest event before given date', () => {
      expect(getMostRecentMileage(kiaCeed, new Date('2020-05-10'))).toEqual(kiaCeed.mileageEvents[1])
    })

    it('should return event from given day', () => {
      expect(getMostRecentMileage(kiaCeed, new Date('2020-06-01'))).toEqual(kiaCeed.mileageEvents[2])
    })

    it('should return first registration event when mileage events is empty', () => {
      expect(getMostRecentMileage(mazda3, new Date('2021-03-18'))).toEqual(getFirstRegistrationEvent(mazda3))
    })
  })

  describe('getNumberOfDaysToEstimate', () => {
    it.each([
      ['2021-03-18', '2021-03-10', 8],
      ['2021-03-10', '2021-03-10', 0],
    ] as [string, string, number][])(
      'for given dates %s, %s it should return %i',
      (mostRecentDate, estimatedDate, expected) => {
        expect(getNumberOfDaysToEstimate(new Date(mostRecentDate), new Date(estimatedDate))).toBe(expected)
      },
    )

    it('should throw an error when difference is less than 0', () => {
      expect(() => getNumberOfDaysToEstimate(new Date('2021-03-10'), new Date('2021-03-17')))
        .toThrow('Days to estimate cannot be below zero')
    })
  })
})
