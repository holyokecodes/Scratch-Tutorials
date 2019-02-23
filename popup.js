const tutorials = document.querySelector('.tutorial');
tutorials.addEventListener('click', (event) => {
    const tutorial = event.target.closest('.tutorial');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: 'loadTutorial("'+tutorial.id+'", "' +tutorial.dataset.title+'");'
            }
        );
    });
    window.close();
});

