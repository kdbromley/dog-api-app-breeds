function getDogImage(requestedBreed) {
    fetch(`https://dog.ceo/api/breed/${requestedBreed}/images/random`)
    .then(response => {
     if (response.status === 200) {
         return response.json();
      } if (response.status === 404) {
        response.json().then(responseJson => console.log(responseJson));
        return Promise.reject('Breed not found.');
      }
    })
    .then(responseJson => {
        displayDogImage(responseJson);
        console.log(responseJson);
    })
    .catch(error => {
      alert("Sorry, an error occured! " + error);
    })
}

function displayDogImage(responseJson) {
        $('.display-result').removeClass('hidden');
        $('.dog-pic').replaceWith(`<img src="${responseJson.message}" class="dog-pic">`);
}


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const requestedBreed = $('input').val();
        $('input').val("");
        getDogImage(requestedBreed);
    })
}



$(function() {
    handleSubmit();
})