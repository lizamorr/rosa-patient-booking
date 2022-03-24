export interface ISelect {
  selectLabel: string;
  placeholder: string;
  options: ISelectOptions[];
}

interface ISelectOptions {
  value: string;
  label: string;
  meetingDuration: number;
}
