function shortenURL() {
    const inputURL = document.querySelector('#url-Input').value;
    

    const input = {
        long_url:inputURL
    };
    console.log(input);

    const url = new URL('https://short--url.herokuapp.com/api/urls');

    const promise = fetch(url,{
        method: "POST",
        body:JSON.stringify(input)

    });
    
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