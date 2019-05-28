const selectWilder = (wilders, idSelected) => {
  for (let i = 0; i < wilders.length; i++) {
    if (wilders[i].id === idSelected) {
      wilders[i].selected = true;
    }
  }
};

/* With map
const selectWilder = (wilders, idSelected) => {
  wilders.map((wilder) => {
    if (wilder.id === idSelected) {
      wilder.selected = true;
    }
  });
  return wilders;
}; */

const groupBySchoolWilders = () => null;

module.exports = {
  selectWilder,
  groupBySchoolWilders,
};
