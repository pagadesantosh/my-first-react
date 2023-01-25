export function filterData(searchText, restarunts) {
  return restarunts.filter((restarunt) =>
    restarunt.data.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );
}
