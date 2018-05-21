// workout consists of exercise elements
// associate workouts with exercise
Workout.associate = function (models){
    workout.hasMany(exercises);
    // creates a workout containing many exercise 
    // this may be repetive check/coordinate with exercise.js
    workout.create({
        // will sequelize create the appropriate id/key here?
        title: workout.title,
        // may need to use/link with Jquery to pull user input ie title of workout from html form
        exercise: Exercise,
        // adds (multiple) exercises (with attributes) to the table
      })
}