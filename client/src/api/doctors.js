export async function postNewDoctor(newDoctor) {
  const response = await fetch(`/api/doctors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDoctor),
  });
  return response.ok;
}

export async function updateDoctor(id, content) {
  const response = await fetch(`/api/doctors/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });
  return response.ok;
}

export async function deleteDoctor(id) {
  const response = await fetch(`/api/doctors/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

export async function fetchDoctors(userID) {
  const response = await fetch(`/api/doctors?userID=${userID}&_sort=lastName`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetchDoctor(id) {
  const response = await fetch(`/api/doctors/${id}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
