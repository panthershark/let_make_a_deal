module.exports = (doors) => {
  let i_selected = doors.findIndex(d => d.selected);
  console.log(`CONTESTANT WON A ${doors[i_selected].prize}`)
  return doors[i_selected].prize === 'car';
};