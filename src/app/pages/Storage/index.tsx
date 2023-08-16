import axios from 'axios';

export function LocalStorage(data: any): void {
  localStorage.setItem('data', JSON.stringify(data));
}

export async function GetUserData(navigate: any): Promise<any> {
  const ID = JSON.parse(localStorage.getItem('data') || '{}');
  console.log(ID);

  // if (ID === null) {
  //   setTimeout(() => {
  //     navigate('/sign-up');
  //   }, 1000);
  // } else {
  //   const res = await axios.get(`https://suwater.onrender.com/auth/admins/${ID}`);
  //   if (res.data) {
  //     return res.data;
  //   } else {
  //     setTimeout(() => {
  //       navigate('/sign-up');
  //     }, 1000);
  //   }
  // }
}
