export interface IMileageEvent {
  date: Date
  mileage: number
}

export interface ISaleAdvertisementEvent extends IMileageEvent {
  price: number
}

export interface IMOTEvent extends IMileageEvent {
  result: boolean
}

export interface IVRMChangeEvent extends IMileageEvent {
  from_vrm: string
  to_vrm: string
}

export interface ICar {
  vin: string
  vrm: string
  make: string
  model: string
  firstRegistrationDate: Date
  mileageEvents: IMileageEvent[]
}
