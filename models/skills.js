const skills = [
  {name: 'HTML', learned: true},
  {name: 'CSS', learned: true},
  {name: 'Javascript', learned: true},
  {name: 'Node.js', learned: false},
  {name: 'Express', learned: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(idx) {
  return skills[idx];
}

function create(skill) {
  skills.push(skill)
}

function deleteOne(idx) {
  skills.splice(idx, 1)
}