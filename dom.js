document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friends-containr');
    container.style.border = '3px solid yellow';
})
function chengeBackgroundColor() {
    const friends = document.getElementsByClassName('friends');
    for (const friend of friends) {
        friend.style.backgroundColor = 'aqua';
    }
}


document.getElementById('add-friend').addEventListener('click', function () {
    const friendDiv = document.createElement('div');
    const friendsContainer = document.getElementById('friends-containr');
    friendDiv.classList.add('friends');
    friendDiv.innerHTML =
        ` <h3 class="friends-name">Friends 3</h3>
            <p>Voluptas, voluptate.</p>
        `;
    friendsContainer.appendChild(friendDiv);
})