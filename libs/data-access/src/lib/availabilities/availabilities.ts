import axios from 'axios';
import { IAvailabilities } from './availabilities-interfaces';

export const getAvailabilities = async (
  url: string,
  params: {
    from: Date;
    to: Date;
    motive_id: string;
    is_new_patient: boolean;
    calendar_ids: string;
    state: string;
  }
): Promise<IAvailabilities[]> => {
  const { data } = await axios.get(url, { params });
  return data;
};
