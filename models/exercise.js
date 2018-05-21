

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Exercise" model that matches up with table (??)
var Exercise = sequelize.define("exercise", {
  movement: {
    type: Sequelize.STRING
  },
  sets: {
    type: Sequelize.INTEGER
  },
  reps: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.INTEGER
  },
  comments: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: true
});

// exercise is an element of a workout--
// exercise belongs to many workout
Exercise.associate = function (models){

  exercise.belongToMany(workouts);
};

workout.create({
  // will sequelize create the appropriate id/key here?
  title: workout.title,
  // may need to use/link with Jquery to pull user input ie title of workout from html form
  exercise: Exercise,
  // adds (multiple) exercises (with attributes) to the table
})
// Syncs with DB
// MAKE SURE TO SYNC WITH THE PROPER DB
fitlife.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Exercise;