function shortenURL() {
    const inputURL = document.querySelector('#url-Input');
    

    const input = {
        long_url:inputURL
    };
    console.log(input);

    const url = new URL('./api/urls');
    url.searchParams.append(url,input);
    

    const promise = fetch(url);
    
    promise
    .then((response)=>response.json())
    .then((json)=>{
        console.log(json);
        // outputText.value = json.responseData.translatedText;
    
    })
    }

const shortenButton = document.querySelector('#shorten-button');
shortenButton.addEventListener('click', () => {
    
    shortenURL();

});