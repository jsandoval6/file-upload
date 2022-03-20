const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
 
  const formData = new FormData();
  const imagefile = document.querySelector('#file');
  const name = document.querySelector('#name').value;

  formData.append("name", name);

  for (let file of imagefile.files) {
    formData.append(file.name, file);
  }
  // formData.append(imagefile.files[0].name, imagefile.files[0]);

  axios.post('http://127.0.0.1:3000/', formData);
});