export default async function getData() {
  const response = await fetch("./data.json");
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return await response.json();
}
