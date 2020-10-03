export async function postNewDiaryEntry(newDiaryEntry) {
  const response = await fetch(`/api/diary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDiaryEntry),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}

export async function fetchDiaryEntries(userID, limit) {
  const response = await fetch(
    `/api/diary?userID=${userID}&_sort=date&_order=desc&_limit=${limit}
  `
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
