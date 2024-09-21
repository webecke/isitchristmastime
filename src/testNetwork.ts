import { BASE_URL } from '@/networkTools'

export const potatoGet = async () => {
  const url = BASE_URL + "/helloChristmas"
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include'
  });

  if (!response.ok) {
    console.error(response);
    return "something didn't work";
  }

  const data = await response.json();
  return data.message;
};