function status(request, response) {
  response.status(200).json({ msg: "testando..." });
}

export default status;
