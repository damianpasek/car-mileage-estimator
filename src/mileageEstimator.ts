import { ICar, IMileageEvent } from './interfaces/Car'
import {
  getMostRecentMileage,
  getNumberOfDaysToEstimate,
} from './utils/mileageEstimator/mileageEvents'
import { getYearlyMileage } from './utils/mileageEstimator/yearlyMileage'

export const estimateMileage = (car: ICar, estimationDate: Date): number => {
  const yearlyMileage: number = getYearlyMileage(car)
  const mostRecentMileage: IMileageEvent = getMostRecentMileage(car, estimationDate)

  const numberOfDaysToEstimate: number = getNumberOfDaysToEstimate(mostRecentMileage.date, estimationDate)

  return mostRecentMileage.mileage + yearlyMileage / 365 * numberOfDaysToEstimate
}
