export const useDatabase = async (username, password, isLoggedIn, price, name) => {

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
    return data;

  } catch (err) {
    console.log(err);
  }
};
