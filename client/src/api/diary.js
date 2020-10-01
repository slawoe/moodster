export async function postNewDiaryEntry(newDiaryEntry) {
  const response = await fetch(`/api/diary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDiaryEntry),
  });
  return response.ok;
}

export async function fetchDiaryEntries(userID) {
  const response = await fetch(
    `/api/diary?userID=${userID}&_sort=date&_order=desc`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetchLastDiaryEntries(userID) {
  const response = await fetch(
    `/api/diary?userID=${userID}&_sort=date&_order=desc&limit=14`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
