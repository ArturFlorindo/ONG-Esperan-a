const STORAGE_KEY = "ong-esperanca-voluntarios";

export function saveVolunteer(volunteer) {
  const current = getVolunteers();
  current.push({ ...volunteer, createdAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function getVolunteers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
