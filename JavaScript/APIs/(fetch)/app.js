//using FETCH api
//The fetch function returns a promise. If it's resolved and it works (as in status code 200), then we do whatever is in our .then and capture the response with the res variable. If it doesn't work, same thing with .catch. On the response variable, res, we have to do res.json in order for our actual data to be there, otherwise we get some caca. BUT res.json will also return a promise (smh). We therefore need to chain on a .then and capture the data from that promise upon its resolution.
//............................................
// fetch("https://swapi.dev//api/people/1")
//   .then((res) => {
//     console.log("resolved", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json done", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
//..............................................
//walking through in another way:
//Fetch is going send a request to this url and it will return a promise, which will then be resolved or rejected. Hopefully, we make it to the .then's via a resolved promise. We can then capture response in a varialbe, and then return res.json on that shit, which returns another promise, which we then capture the data from, and boom we've got our fuckin data.

//version of above code just using await keyword and adding another person to fetch
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev//api/people/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev//api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log(e);
  }
};
loadStarWarsPeople();
