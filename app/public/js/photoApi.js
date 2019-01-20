// var keys = require("../../keys.js")
// require("dotenv").config();

// var filestackKey = keys.filestack
var petImage = document.getElementById('pet-image-url');

    window.addEventListener('DOMContentLoaded', function () {

      const apikey = 'AeIlL0LLISMeCsfFEI96Dz';
      const client = filestack.init(apikey);

      const onProgress = (evt) => {
        document.getElementById('progress').innerHTML = `${evt.totalPercent}%`;
      };

      document.querySelector('input').addEventListener('change', (event) => {
        const files = event.target.files;
        const file = files.item(0);
        const token = {};
        
        client.upload(file, { onProgress }, {}, token)
          .then(res => {
            console.log('success: ', res)
            // petImage.innerHTML += "Copy and paste this URL into the image URL field below -->  " + res.url

            var petImgUrl = res.url
            var petImgDiv = $('<div>')
            
            var petImgField = $('<img>')
            petImgField.attr('src', petImgUrl)
            petImgField.attr('style', 'width: 250px')
            petImgField.attr('style', 'height: 250px')

            petImgDiv.append(petImgField)
            $('#pet-image-url').append(petImgDiv)
            $('#petImgUrl').append(petImgUrl)

          })
          .catch(err => {
            console.log(err)
          });
      });
    });