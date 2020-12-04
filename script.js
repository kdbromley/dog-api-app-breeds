function getDogImage(requestedBreed) {
    fetch(`https://dog.ceo/api/breed/${requestedBreed}/images/random`)
    .then(response => {
     if (response.status === 200) {
         return response.json();
      } if (response.status === 404) { 
        return Promise.reject('Breed not found.')
      }
    })
    .then(responseJson => displayDogImage(responseJson))
    .catch(error => alert("Sorry, an error occured! " + error));
}

function displayDogImage(responseJson) {
        $('section').removeClass('hidden');
        $('.image-result').replaceWith(`<img src="${responseJson.message}" class="image-result">`);
}


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const requestedBreed = $('input').val();
        $('input').val("");
        console.log(requestedBreed)
        getDogImage(requestedBreed);
    })
}



$(function() {
    handleSubmit();
})