//Create a variable to capture the form, add an event listener upon submit, and prevent default so that the form doesn't load up anything new on us. Then capture whatever's in the input using the input object.
//then do axios.get to get perform the get request, await it and make sure we've declared this whole overarching function async. Capture the response of get request in the response variable.
const formVar = document.querySelector("#searchForm");
const inputVar = document.querySelector("#input");
formVar.addEventListener("submit", async function (event) {
  event.preventDefault();
  const searchValue = inputVar.value;
  const responseVar = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchValue}`
  );
  //use this to look at what comes back and to decide what properties you want to access. in this case, we got back an array of shows, which we iterate over in the makeImages function
  console.log(responseVar.data);
  makeImages(responseVar.data);
  //empty input after we click search
  inputVar.value = "";
});

//This function creates an image, sets it's source, and append it to body so it shows up
const makeImages = function (shows) {
  for (let result of shows) {
    //below this is just saying if there is an image, because not all results have images and it was erroring out
    if (result.show.image) {
      const imgVar = document.createElement("img");
      //result is the above responseVar.data and the rest is coming from the properties in the api itself. got them from console.log or console.dir can't remember
      imgVar.src = result.show.image.medium;
      document.body.append(imgVar);
    }
  }
};
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.

// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }
