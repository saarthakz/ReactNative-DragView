function boundaryCheck(coordinates, left, top, range) {
  if (range.x > 0) {
    if (left < 0) coordinates.x.setValue(0);
    if (left > range.x) coordinates.x.setValue(range.x);
  } else {
    if (left > 0) coordinates.x.setValue(0);
    if (left < range.x) coordinates.x.setValue(range.x);
  };

  if (range.y > 0) {
    if (top < 0) coordinates.y.setValue(0);
    if (top > range.y) coordinates.y.setValue(range.y);
  } else {
    if (top > 0) coordinates.y.setValue(0);
    if (top < range.y) coordinates.y.setValue(range.y);
  };
};

export default boundaryCheck;