export function renderItems(item) {
    const div = document.createElement('div');
    div.textContent = `${item.qty} ${item.name}`;

    if (item.bought) {
        div.classList.add('complete');
    }
    return div;
}