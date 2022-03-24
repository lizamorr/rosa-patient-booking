export interface IRadio {
  label: string;
  input: IRadioInput[];
}

export interface IRadioInput {
  type: string;
  label: string;
  value: string;
  name: string;
  id: string;
  required: boolean;
}
