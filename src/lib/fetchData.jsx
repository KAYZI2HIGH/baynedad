export const getProperty = async () => {
  const res = await fetch(`/api/properties`);

  if (!res.ok) {
    console.log("something went wrong");
  }
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`/api/users`);

  if (!res.ok) console.log('Something went wrong when fetching from api')
  
  return res.json();
}