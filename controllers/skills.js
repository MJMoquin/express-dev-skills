const Skills = require('../models/skills');

module.exports = {
  index,
  show,
  new: newPage,
  create,
  delete: deleteOne
}

function deleteOne(req, res) {
  Skills.deleteOne(req.params.idx);
  res.redirect('/skills')
}

function create(req, res) {
  req.body.learned = false;
  Skills.create(req.body);
  res.redirect('skills')
}

function newPage(req, res){
res.render('skills/new')
}

function index(req, res, next) {
    res.render('skills/index', {
      skills: Skills.getAll()
    })
}

function show(req, res, next) {
  res.render('skills/show', {
    skill: Skills.getOne(req.params.idx),
    idx: req.params.idx
  })
}

