import { ICar, IMileageEvent } from '../../interfaces/Car'

export const getFirstRegistrationEvent = (car: ICar): IMileageEvent => ({
  date: new Date(car.firstRegistrationDate),
  mileage: 0,
})

export const getMostRecentMileage = (car: ICar, estimationDate: Date): IMileageEvent => {
}

export const getNumberOfDaysToEstimate = (mostRecentDate: Date, estimatedDate: Date): number => {

}
