const skills = [
    {name: 'HTML', learned: true},
    {name: 'CSS', learned: true},
    {name: 'Javascript', learned: true},
    {name: 'Node.js', learned: false},
    {name: 'Express', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(idx) {
    return skills[idx];
  }