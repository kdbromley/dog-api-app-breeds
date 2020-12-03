function getDogImage(requestedBreed) {
    fetch(`https://dog.ceo/api/breed/${requestedBreed}/images/random`)
    .then(response => {
     if (response.status == 404) {
        alert('Sorry, an error occured! Breed not found')
      } else { 
        return response.json()
      } 
    })
        //.then(responseJson => displayDogImage(responseJson))
    .then(responseJson => displayDogImage(responseJson))
    .catch(error => alert("Sorry, an error occured!"));
}

function displayDogImage(responseJson) {
        $('section').removeClass('hidden');
        $('.image-result').replaceWith(`<img src="${responseJson.message}">`);
}


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const requestedBreed = $('input').val();
        console.log(requestedBreed)
        getDogImage(requestedBreed);
    })
}



$(function() {
    handleSubmit();
})