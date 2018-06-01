const example = (state = '', action) => {
  switch (action.type) {
    case 'TEST':
      const { text } = action.payload;
      return {
        text,
      };

    default:
      return state;
  }
};

export default example;
