import { checkAuth, logout, createItem, fetchItems, buyItem, deleteAllItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.item-form');
const error = document.getElementById('error');
const list = document.getElementById('item-list');
const deleteButton = document.getElementById('delete-button');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createItem(itemData.get('name'), itemData.get('qty'));
    if (data) {
        window.location.href = '/list';
    } else {
        error.textContent = 'something went wrong :(';
    }
});

async function displayListItems() {
    list.textContent = ' ';
    const data = await fetchItems();
    if (data) {
        for (let name of data) {
            const listElem = renderItem(name);
            listElem.addEventListener('click', async (e) => {
                e.preventDefault();
                await buyItem(name);
                displayListItems();
            });
            list.append(listElem);
        }
    } else {
        error.textContent = 'something went wrong :(';
    }
}

deleteButton.addEventListener('click', async () => {
    await deleteAllItems();
    displayListItems();
});

displayListItems();