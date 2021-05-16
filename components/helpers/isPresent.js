

export const isPresent = (users, user) => {
   return users?.some(item => item.id === user.id);
}