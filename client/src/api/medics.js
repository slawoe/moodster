export async function postNewMedic(newMedic) {
  const response = await fetch(`/api/medic`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMedic),
  });
  return response.ok;
}

export async function updateMedic({ id }) {
  const response = await fetch(`/api/medic/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id),
  });
  return response.ok;
}

export async function deleteMedic({ id }) {
  const response = await fetch(`/api/medic/${id}`, {
    method: "DELETE",
  });
  return response.ok;
}

export async function fetchMedics({ userName, name }) {
  const response = await fetch(
    `/api/medics?userName=${userName}&_sort=${name}&_order=desc`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetcMedic({ id }) {
  const response = await fetch(`/api/medics/${id}`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
