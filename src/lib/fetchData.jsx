export const getProperty = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/properties`);

  if (!res.ok) {
    console.log("something went wrong");
  }
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`);

  if (!res.ok) console.log('Something went wrong when fetching from api')
  
  return res.json();
}

export const getPropertyByID = async (id) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/properties/${id}`);

  if (!res.ok) {
    console.log("something went wrong");
  } else {
    return res.json();
  }
};