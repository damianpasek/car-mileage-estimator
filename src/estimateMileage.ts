import { ICar } from './interfaces/Car'
import { roundToHundredths } from './utils/mathRound'
import {
  getMostRecentMileageEvent,
  getNumberOfDaysToEstimate,
} from './utils/mileageEstimator/mileageEvents'
import { getYearlyMileage } from './utils/mileageEstimator/yearlyMileage'

export const estimateMileage = (car: ICar, estimationDate: Date): number => {
  const yearlyMileage = getYearlyMileage(car)
  const mostRecentMileage = getMostRecentMileageEvent(car, estimationDate)
  const numberOfDaysToEstimate = getNumberOfDaysToEstimate(mostRecentMileage.date, estimationDate)

  return roundToHundredths(mostRecentMileage.mileage + yearlyMileage / 365 * numberOfDaysToEstimate)
}
