export const useDatabase = async (username, password, isLoggedIn, price, name) => {
  // console.log(username+','+password+','+isLoggedIn+','+price)
  try {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        isLoggedIn: isLoggedIn,
        price: price,
        name: name
      }),
      headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
    console.log(data);

    // const response = await fetch('http://localhost:3000/')
    // const data = await response.text()
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};
