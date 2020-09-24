export async function postNewDiaryEntry(newDiaryEntry) {
  const response = await fetch(`/api/diary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDiaryEntry),
  });
  return response.ok;
}

export async function fetchDiaryEntries(userName, date) {
  const response = await fetch(
    `/api/diary?userName=${userName}&_sort=${date}&_order=desc`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
