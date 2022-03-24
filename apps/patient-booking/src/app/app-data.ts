import { IRadio, ISelect, ICard, IButton } from '@rosa-patient-booking/ui';
import { IMeetingOptions } from './app-interfaces';

export const url: string = 'https://staging-api.rosa.be/api/availabilities';
export const header: string = 'Find availability';
export const radio: IRadio = {
  label: 'Is this your first appointment with this practitioner?',
  input: [
    {
      type: 'radio',
      label: 'Yes',
      value: 'yes',
      name: 'patientStatus',
      id: 'input-radio__yes',
    },
    {
      type: 'radio',
      label: 'No',
      value: 'no',
      name: 'patientStatus',
      id: 'input-radio__no',
    },
  ],
};
export const select: ISelect = {
  selectLabel: 'What is the reason for your visit?',
  placeholder: 'Select a motive',
  options: [
    {
      value: '61eea367ddf6c500149ae2cc',
      label: 'Cultural fit',
      meetingDuration: 30,
    },
    {
      value: '61eea350ddf6c500149ae2cb',
      label: 'Technical assessment',
      meetingDuration: 75,
    },
    {
      value: '61379ba159d4940022b6c929',
      label: 'Introduction Call',
      meetingDuration: 30,
    },
  ],
};
export const meetingOptions: IMeetingOptions[] = [
  {
    value: '61eea367ddf6c500149ae2cc',
    label: 'Cultural fit',
    meetingDuration: 30,
  },
  {
    value: '61eea350ddf6c500149ae2cb',
    label: 'Technical assessment',
    meetingDuration: 75,
  },
  {
    value: '61379ba159d4940022b6c929',
    label: 'Introduction Call',
    meetingDuration: 30,
  },
];
export const button: IButton = {
  buttonText: 'Book Appointment',
  hasRightArrow: true,
};
export const card: ICard = { header: 'Find availability' };
