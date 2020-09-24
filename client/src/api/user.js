export async function postNewUser(newUser) {
  const response = await fetch(`/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return response.ok;
}

export async function fetchUsers() {
  const response = await fetch(`/api/users`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetchUser({ userName }) {
  const response = await fetch(`/api/users/?userName=${userName}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
