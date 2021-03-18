import { chain, nth, sortBy } from 'lodash'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

import { ICar, IMileageEvent } from '../../interfaces/Car'
import { roundToHundredths } from '../mathRound'

const DEFAULT_YEARLY_MILEAGE = 7900

const estimateYearlyMileage = ([previousMileage, currentMileage]: [IMileageEvent, IMileageEvent]): number => {
  const daysDifference = differenceInCalendarDays(currentMileage.date, previousMileage.date)
  const mileageDifference = currentMileage.mileage - previousMileage.mileage

  return mileageDifference / daysDifference * 365
}

export const getYearlyMileage = (car: ICar): number => {
  const { mileageEvents } = car

  if (!mileageEvents.length) return DEFAULT_YEARLY_MILEAGE

  const registrationDateEvent: IMileageEvent = {
    date: new Date(car.firstRegistrationDate),
    mileage: 0,
  }
  const events = sortBy([registrationDateEvent, ...mileageEvents], ['date'])

  const yearlyMileage = chain(events)
    .map((value, index) => [value, nth(events, index + 1 - events.length)])
    .slice(0, events.length - 1)
    // @todo add validation of mileage if it's in ascending order
    .map(estimateYearlyMileage)
    .mean()
    .value()

  return roundToHundredths(yearlyMileage)
}
