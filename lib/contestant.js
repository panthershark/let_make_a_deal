module.exports = () => {

  return {
    select: (doors) => {
      let selected_door = Math.floor(Math.random() * 3);
      doors[selected_door].selected = true;
    },
    switch: (doors) => {
      let i_selected = doors.findIndex(d => d.selected);
      let i_switch = doors.findIndex(d => {
        return d.opened === false && d.selected === false;
      });

      doors[i_selected].selected = false;
      doors[i_switch].selected = true;
    }
  };
}