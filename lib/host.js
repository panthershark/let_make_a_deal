const select_door_knows_answer = (doors) => {
  return doors.findIndex(d => {
    return d.prize !== 'car' && !d.selected;
  });
};

const get_available_indices = (doors) => {
  return doors.map((d, i) => {
    return {
      door: d,
      index: i
    }
  }).filter(dmod => {
    return !dmod.door.opened && !dmod.door.selected;
  }).map(dmod => dmod.index);
};

const select_door_blind = (doors) => {
  const i_available = get_available_indices(doors);

  // randomly pick an unopened door, then open it.
  return i_available[Math.floor(Math.random() * (i_available.length - 1))];
};

module.exports = (knows_answer) => {
  let select = knows_answer ? select_door_knows_answer : select_door_blind;

  return {
    open: (doors) => {
      let i_open = select(doors);
      doors[i_open].opened = true;
    }
  };
}