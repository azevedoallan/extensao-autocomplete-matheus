document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-autocomplete").addEventListener("click", function() {
        let queryParams = {
            currentWindow: true, 
            active: true
        };

        chrome.tabs.query(queryParams, function (tabs){
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "autocomplete"});
        });
    });
});