import { ICar, IMOTEvent, ISaleAdvertisementEvent, IVRMChangeEvent } from '../interfaces/Car'

export const mockedCars: ICar[] = [
  {
    vin: 'vin_number_1',
    vrm: 'vrm_1',
    make: 'Kia',
    model: 'Ceed',
    firstRegistrationDate: new Date('01-06-2018'),
    mileageEvents: [
      {
        date: new Date('01-06-2019'),
        mileage: 12000,
        result: true
      } as IMOTEvent,
      {
        date: new Date('01-12-2019'),
        mileage: 16000,
        price: 25000
      } as ISaleAdvertisementEvent,
      {
        date: new Date('01-06-2020'),
        mileage: 20000,
        result: true
      } as IMOTEvent,
      // {
      //   date: new Date('01-12-2020'),
      //   mileage: 26000,
      //   from_vrm: 'vrm_1',
      //   to_vrm: 'vrm_2'
      // } as IVRMChangeEvent
    ]
  }
]
