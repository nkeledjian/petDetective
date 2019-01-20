// var keys = require("../../keys.js")
// require("dotenv").config();

// var filestackKey = keys.filestack

    window.addEventListener('DOMContentLoaded', function () {

      // const apikey = filestackKey;
      const apikey = '';
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

            // store image url data in petImgUrl
            var petImgUrl = res.url
            // render div tag for img tag
            var petImgDiv = $('<div>')
            // render img tag with attributes
            var petImgField = $('<img>')
            petImgField.attr('src', petImgUrl)
            petImgField.attr('value', petImgUrl)
            petImgField.attr('style', 'width: 250px')
            petImgField.attr('style', 'height: 250px')

            // append img tag to div
            petImgDiv.append(petImgField)
            // append img populated div to div with id pet-image-url 
            $('#pet-image-url').append(petImgDiv)
            // populate the input field with the image URL to submit to sql database
            $('#petImgUrl').val(petImgUrl)
                       
          })
          .catch(err => {
            console.log(err)
          });
      });
    });