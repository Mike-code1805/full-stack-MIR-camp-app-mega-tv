export const createService = async (args, callback) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: args.name,
      lastname: args.lastname,
      address: args.address,
      nroApart: args.nroApart,
      plan: args.plan,
      email: args.email,
      phone: args.phone
    })
  };
  console.log(requestOptions.body);
  try {
    const response = await fetch(
      `http://localhost:8080/api/users/`,
      requestOptions
    );
    if (response.status === 201) {
      callback({
        status: "success",
        data: await response.json(),
        error: null
      });
    } else {
      const error = await response.json();
      callback({
        status: "error",
        data: null,
        error: error.message || "Datos incorrectos"
      });
    }
  } catch (error) {
    callback({
      status: "error",
      data: null,
      error: "Algún dato es importante para crear el usuario"
    });
  }
};
