import { checkAuth, logout, createListItem } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.item-form');
const error = document.getElementById('error');

logoutButton.addEventListener('click', () => {
    logout();
});

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const itemData = new FormData(form);
//     const data = await createListItem(itemData.get('name'), itemData.get('qty'));
//     id (data) {

//     }
// });