var filestackKey = keys.filestack
var petImage = document.getElementById('pet-image-url');

    window.addEventListener('DOMContentLoaded', function () {

      const apikey = filestackKey;
      const client = filestack.init(apikey);

      const onProgress = (evt) => {
        document.getElementById('progress').innerHTML = `${evt.totalPercent}%`;
      };

      document.querySelector('input').addEventListener('change', (event) => {
        const files = event.target.files;
        const file = files.item(0);
        const token = {};
        // const cancel = document.getElementById('cancel');

        // [cancel].forEach((btn) => {
        //   const id = btn.id;
        //   btn.addEventListener('click', () => {
        //     token[id]();
        //   });
        // });

        client.upload(file, { onProgress }, {}, token)
          .then(res => {
            console.log('success: ', res)
            petImage.innerHTML += "Copy and paste this URL into the image URL field below -->  " + res.url
          })
          .catch(err => {
            console.log(err)
          });
      });
    });