import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let photo;
  return uploadPhoto()
    .then((result) => {
      photo = `${result.body}`;
      return createUser();
    })
    .then((result) => console.log(`${photo} ${result.firstName} ${result.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
