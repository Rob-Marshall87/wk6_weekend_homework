document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#dog-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('dog-list-item');

  const breed = document.createElement('h2');
  breed.textContent = form.breed.value;
  readingListItem.appendChild(breed);

  const countryOfOrigin = document.createElement('h3');
  countryOfOrigin.textContent = form.country.value;
  readingListItem.appendChild(countryOfOrigin);

  const type = document.createElement('p');
  type.textContent = form.type.value;
  readingListItem.appendChild(type);

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#dog-list');
  readingList.innerHTML = '';
}
