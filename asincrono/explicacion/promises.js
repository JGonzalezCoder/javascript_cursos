function requestHandler(req, res) {
	User.findById(req.userId)
		.then(function (user) {
			return tasks.findById(user.tasksId);
		})
		.then(function (task) {
			tasks.completed = true;
			return tasks.save();
		})
		.then(function()) {
			res.send("tasks completed");
		}
		.catch(function (errors) {
			res.send(errors);
		})
}
