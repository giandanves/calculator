const testObject = (id, date, content) => {
  if (id == undefined || date == undefined || content == undefined) {
    throw new Error('Insufficient parameters');
  } else {
    return { id, date, content };
  }
};

export default testObject;
