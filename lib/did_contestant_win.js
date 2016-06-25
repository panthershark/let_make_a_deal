module.exports = (doors) => {
  let i_selected = doors.findIndex(d => d.selected);
  return doors[i_selected].prize === 'car';
};