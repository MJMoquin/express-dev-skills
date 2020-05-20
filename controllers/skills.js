const Skills = require('../models/skills');

function index(req, res, next) {
    res.render('skills/index', {
      skills: Skills.getAll()
    })
}

function show(req, res, next) {
  res.render('skills/show', {
    skill: Skills.getOne(req.params.idx)
  })
}

module.exports = {
    index,
    show
}