const selectWilder = (wilders, idSelected) => {
  for(let i=0 ; i < wilders.length ; i++ ){
    if(wilders[i].id === idSelected){
      wilders[i].selected = true
    }
  }
  return wilders
};

const groupBySchoolWilders = () => null;

module.exports = {
  selectWilder,
  groupBySchoolWilders,
};
