import axios from 'axios';

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
) => {
  const { data } = await axios.get(url, { params });
  return data;
};
