function shortenURL() {
    const inputURL = document.querySelector('#url-Input').value;
    const outputDiv = document.querySelector('#url-Output');

    if (inputURL === '') 
    {
        alert('Enter the URL');
    }
    else
    {
    const input = {
        long_url:inputURL
    };
    // console.log(input);
    // const url = new URL('http://localhost:3000/api/urls');
    const promise = fetch('./api/urls/',{
        headers: {
            'Content-Type': 'application/json'
          },
        method: "POST",
        body:JSON.stringify(input)

    });
    promise
    .then((response)=>response.json())
    .then((json)=>{
        //console.log(json);
        // const keys = Object.keys(json);
        // console.log(keys);
        outputDiv.innerHTML = `${document.location.origin}/u/${json.id}`;
        //   Object.keys(json).forEach((id) =>{ //create an all urlList obj and store all short/long URL as key-value in urlList 
        //       outputDiv.innerHTML = `${document.location.origin}/u/${id.id}`;
        //   });
    
    })
    }
    }

const shortenButton = document.querySelector('#shorten-button');
shortenButton.addEventListener('click', () => {
    
    
    shortenURL();

});

const getAllLinkButton = document.querySelector('#get-all-button');
getAllLinkButton.addEventListener('click', () => {
    
    // const url = new URL('./api/urls/');
    const promise = fetch('./api/urls/',{
        method: "GET"
    });
    promise
    .then((response)=>response.json())
    .then((url)=>{

        url.forEach(element => {

            const output = document.querySelector("#display-all-url");
            const longurl = `${element.long_url}\n\n`
            const shorturl = `${document.location.origin}/u/${element.id}\n`

            const short = document.createTextNode(shorturl);
            const long = document.createTextNode(longurl);

            output.appendChild(short)
            output.appendChild(long)

        });
         
        // const keys = Object.keys(url);
        // console.log(keys.id)
        // for (const [key, value] of Object.entries(url)) {
        //     console.log(`${document.location.origin}/u/${value.id}`);
        //     console.log(value.long_url);
        // }
        // Object.keys(url).forEach((element) =>{ 
        //         console.log(element.key.id)
        //         outputDiv.innerHTML = `${document.location.origin}/u/${id.id}`;
        //        });
        
    });

});