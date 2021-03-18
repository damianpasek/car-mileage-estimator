import { chain, nth, sortBy } from 'lodash'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

import { DEFAULT_YEARLY_MILEAGE } from '../../constants/yearlyMileage'
import { ICar, IMileageEvent } from '../../interfaces/Car'
import { OdometerError } from '../errors'
import { getFirstRegistrationEvent } from './mileageEvents'

const estimateYearlyMileage = ([previousMileage, currentMileage]: [IMileageEvent, IMileageEvent]): number => {
  const daysDifference = differenceInCalendarDays(currentMileage.date, previousMileage.date)
  const mileageDifference = currentMileage.mileage - previousMileage.mileage

  return mileageDifference / daysDifference * 365
}

const validateOdometer = ([previousMileage, currentMileage]: [IMileageEvent, IMileageEvent]): boolean => {
  if (previousMileage.mileage > currentMileage.mileage) throw new OdometerError()
  return true
}

export const getYearlyMileage = (car: ICar): number => {
  const { mileageEvents } = car

  if (!mileageEvents.length) return DEFAULT_YEARLY_MILEAGE

  const registrationDateEvent = getFirstRegistrationEvent(car)
  const events = sortBy([registrationDateEvent, ...mileageEvents], ['date'])

  return chain(events)
    .map((value, index) => [value, nth(events, index + 1 - events.length)] as [IMileageEvent, IMileageEvent])
    .slice(0, events.length - 1)
    .filter(validateOdometer)
    .map(estimateYearlyMileage)
    .mean()
    .value()
}
