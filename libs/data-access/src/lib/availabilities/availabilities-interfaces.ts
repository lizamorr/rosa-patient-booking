export interface IAvailabilities {
  appointmentSlotId: string;
  calendarId: string;
  createdAt: Date;
  day: number;
  dayOfTheWeek: number;
  duration: number;
  endAt: Date;
  eventIds: [];
  id: string;
  meridiem: string;
  month: number;
  motiveIds: [string];
  nextAvailabilityId: null;
  previousAvailabilityId: null;
  startAt: Date;
  state: string;
  updatedAt: Date;
  year: number;
  __v: number;
  _id: string;
}

export interface AvailabilitiesRequest {
  from: Date;
  to: Date;
  motive_id: string;
  is_new_patient: boolean;
  calendar_ids: string;
  state: string;
}
