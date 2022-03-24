export interface IAvailabilities {
  appointmentSlotId: string;
  calendarId: string;
  createdAt: string;
  day: number;
  dayOfTheWeek: number;
  duration: number;
  endAt: string;
  eventIds: string[];
  id: string;
  meridiem: string;
  month: number;
  motiveIds: string[];
  nextAvailabilityId?: string;
  previousAvailabilityId?: string;
  startAt: string;
  state: string;
  updatedAt: string;
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
