import { ICar, IMOTEvent, ISaleAdvertisementEvent, IVRMChangeEvent } from '../interfaces/Car'

export const mockedCars: ICar[] = [
  {
    vin: 'vin_number_1',
    vrm: 'vrm_1',
    make: 'Kia',
    model: 'Ceed',
    firstRegistrationDate: new Date('2018-06-01'),
    mileageEvents: [
      {
        date: new Date('2019-06-01'),
        mileage: 12000,
        result: true,
      } as IMOTEvent,
      {
        date: new Date('2019-12-01'),
        mileage: 16000,
        price: 25000,
      } as ISaleAdvertisementEvent,
      {
        date: new Date('2020-06-01'),
        mileage: 20000,
        result: true,
      } as IMOTEvent,
      {
        date: new Date('2020-12-01'),
        mileage: 26000,
        from_vrm: 'vrm_1',
        to_vrm: 'vrm_2',
      } as IVRMChangeEvent,
    ],
  },
  {
    vin: 'vin_number_2',
    vrm: 'vrm_3',
    make: 'Ford',
    model: 'Fiesta',
    firstRegistrationDate: new Date('2019-04-01'),
    mileageEvents: [
      {
        date: new Date('2020-04-01'),
        mileage: 15000,
        result: true,
      } as IMOTEvent,
      {
        date: new Date('2020-10-01'),
        mileage: 25000,
        price: 25000,
      } as ISaleAdvertisementEvent,
    ],
  },
  {
    vin: 'vin_number_3',
    vrm: 'vrm_4',
    make: 'Mazda',
    model: '3',
    firstRegistrationDate: new Date('2021-01-01'),
    mileageEvents: [],
  },
]
