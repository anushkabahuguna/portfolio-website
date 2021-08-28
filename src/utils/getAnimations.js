const getAnimationType = (index, length) => {
  if (index == 1) return "t";
  else if (index % 3 == 0) return "l";
  else if ((index + 1) % 3 == 0) return "r";
  else if (index == length - 1 || index == length - 2 || index == length - 3)
    return "b";
  else return "m";
};
export const getAnimationStyle = (index, length) => {
  const type = getAnimationType(index, length);
  if (type == "l") {
    //left animation
    return {
      from: {
        transform: `translate(-50%,0%)`,
        opacity: 0,
      },
      to: {
        transform: `translate(0%,0%)`,
        opacity: 1,
      },
    };
  } else if (type == "r") {
    //right animation
    return {
      from: {
        transform: `translate(50%,0%)`,
        opacity: 0,
      },
      to: {
        transform: `translate(0%,0%)`,
        opacity: 1,
      },
    };
  } else if (type == "t") {
    //right animation
    return {
      from: {
        transform: `translate(0%,-50%)`,
        opacity: 0,
      },
      to: {
        transform: `translate(0%,0%)`,
        opacity: 1,
      },
    };
  } else if (type == "b") {
    //right animation
    return {
      from: {
        transform: `translate(0%,50%)`,
        opacity: 0,
      },
      to: {
        transform: `translate(0%,0%)`,
        opacity: 1,
      },
    };
  } else {
    return {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    };
  }
};
export const getAnimationDelay = (index, delay) => {
  let row;
  if ((index - 1) % 3 == 0) row = index - 1;
  else if ((index - 2) % 3 == 0) row = index - 2;
  else row = index;
  return {
    delay: delay * row + 100,
  };
};
