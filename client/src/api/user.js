export async function postNewUser(newUser) {
  const response = await fetch(`/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return response.ok;
}

export async function updateUser(id, content) {
  const response = await fetch(`/api/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });
  return response.ok;
}

export async function fetchUserWelcome(userName) {
  const response = await fetch(`/api/users/?userName=${userName}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetchUserProfile(id) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
