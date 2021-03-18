import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import { chain } from 'lodash'
import { ICar, IMileageEvent } from '../../interfaces/Car'
import { EstimateDateError } from '../errors'

export const getFirstRegistrationEvent = (car: ICar): IMileageEvent => ({
  date: new Date(car.firstRegistrationDate),
  mileage: 0,
})

export const getMostRecentMileage = (car: ICar, estimationDate: Date): IMileageEvent => {
  const { mileageEvents } = car

  if (!mileageEvents.length) return getFirstRegistrationEvent(car)

  return chain(mileageEvents)
    .sortBy(['date'])
    .filter(event => event.date <= estimationDate)
    .last()
    .value()
}

export const getNumberOfDaysToEstimate = (mostRecentDate: Date, estimatedDate: Date): number => {
  const daysDifference = differenceInCalendarDays(estimatedDate, mostRecentDate)

  if (daysDifference < 0) throw new EstimateDateError('Provided estimation date is incorrect')

  return daysDifference
}
