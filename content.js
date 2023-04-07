chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let inputTitle = document.querySelector('#titulo');
    let inputTag = document.querySelector('#tag');
    let inputValidity = document.querySelector('#validade');

    if (inputTitle && inputTag && inputValidity) {
        inputTag.value = 'GRAVANDO';
        inputValidity.value = 'URGENTE';

        if (inputTitle.value) {
            inputTitle.value = inputTitle.value
                .toLowerCase()
                .split(' ')
                .map(word => {
                    if (word) {
                        return word[0].toUpperCase() + word.slice(1);
                    }
                    return word;
                })
                .join(' ');
        }
    }
});