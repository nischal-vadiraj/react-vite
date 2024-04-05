//axious - JavaScript library used for making HTTP requests.

//Benefits of choosing Axios over Fetch

// Ability to intercept and/or cancel requests
// Better error handling
// Automatic JSON parsing
// Built-in XSRF protection
// Better compatibility across different browsers

//Performing a GET request

const response = await axios.get("https://example.com/sample");

//Performing a POST request

const payload = {
  title: "My New Post",
  body: "This is the content of the post.",
};

const response = await axios.post("https://example.com/posts", payload);

//Performing a PUT request

const payload = {
  title: "My updated Post",
  body: "This is the updated content of the post.",
};

const response = await axios.put("https://example.com/posts/1", payload);

//Performing a DELETE request

const response = await axios.delete("https://example.com/posts/1");


//Using Query Parameters - pass additional information to a server when making an HTTP request

//Query parameters are added to the end of a URL and are separated from the base URL by a question mark ? followed by key-value pairs, each pair is separated by an ampersand & symbol.

https://example.com/search?key1=value1&key2=value2



