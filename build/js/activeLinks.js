const groupchats = document.querySelectorAll('.groupchat');
const chats = document.querySelectorAll('.chat');

if (groupchats.length) {
    groupchats.forEach((groupchat) => {
        groupchat.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove 'active' class from all account links
            groupchats.forEach((groupchat) => {
                groupchat.classList.remove('active-gc');
            });
            // Add 'active' class to the clicked link
            groupchat.classList.add('active-gc');
        });
    });

    document.addEventListener('click', (f) => {
        // Check if the clicked element is not a chat
        if (!f.target.closest('.groupchat')) {
            groupchats.forEach((groupchat) => {
                groupchat.classList.remove('active-gc');
            });
        }
    });
}

if (chats.length) {
    chats.forEach((chat) => {
        chat.addEventListener('click', (f) => {
            f.preventDefault();
            // Remove 'active' class from all account links
            chats.forEach((chat) => {
                chat.classList.remove('active-chat');
            });
            // Add 'active' class to the clicked link
            chat.classList.add('active-chat');
        });
    });
}
