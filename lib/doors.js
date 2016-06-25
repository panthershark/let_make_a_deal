const DOORS = [];

module.exports = (dc) => {
  const door_count = isNaN(dc) ? 3 : Number(dc);
  const doors = [];
  const selected = Math.floor(Math.random() * door_count);

  for (var i = 0; i < door_count; ++i) {
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