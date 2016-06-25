const DOORS = [];

module.exports = () => {
  const doors = [];
  const selected = Math.floor(Math.random() * 3);

  for (var i = 0; i < 3; ++i) {
    if (i === selected) {
      doors.push({
        "prize": 'car',
        "opened": false,
        "selected": false
      });
    } else {
      doors.push({
        "prize": 'goat',
        "opened": false,
        "selected": false
      });
    }
  }

  return doors;

}