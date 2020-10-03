export async function postNewMedic(newMedic) {
  const response = await fetch(`/api/medics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMedic),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function updateMedic(id, content) {
  const response = await fetch(`/api/medics/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });
  return response.ok;
}

export async function deleteMedic(id) {
  const response = await fetch(`/api/medics/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

export async function fetchMedics(userID) {
  const response = await fetch(`/api/medics?userID=${userID}&_sort=name`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetchMedic(id) {
  const response = await fetch(`/api/medics/${id}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
