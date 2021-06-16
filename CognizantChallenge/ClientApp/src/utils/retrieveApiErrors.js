export default (errors) => {
  if (typeof errors !== 'object') {
    return [errors];
  }

  const apiErros = [];
  for (var key of Object.keys(errors)) {
    errors[key].forEach((error) => {
      apiErros.push(error);
    });
  }

  return apiErros;
};
