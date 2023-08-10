import axios from 'axios';

export async function GetUser() {
  const res = await axios.get('https://suwater.onrender.com/auth/admins');
  return res.data;
}
