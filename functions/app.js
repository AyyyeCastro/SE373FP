const path = require("path");
const express = require(`express`);
const serverless = require("serverless-http");
const app = express();
const fs = require(`fs`);
const hbs = require(`hbs`);
const bodyParser = require("body-parser");
app.set(`view engine`, `hbs`);
/// app.set('views', path.join(__dirname, 'views'));
app.set("views", __dirname + "/views"); // Set the views directory
hbs.registerPartials(__dirname + `/views/partials`, (err) => {});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongo DB -- Week 6
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://acastro:acastro@empl.0o9xly3.mongodb.net/Empl";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5s for timeout, aise tiimer if needed.
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// import scheme for the mongoDb atlas
const taskSchema = new mongoose.Schema({
  taskName: String,
  taskDetails: String,
  taskDueDate: Date,
  taskComplete: String,
  taskFavorite: String,
});
const Task = mongoose.model("Task", taskSchema);

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Routes (was quite confusing and gave me headaches, but it works now and I wont question how!)
app.get("/", (req, res) => {
  res.render("index");
});
app.get('/howTo', (req, res) => {
  res.render('howTo'); // Render the howTo.hbs page
});
app.get('/aboutTraket', (req, res) => {
  res.render('aboutTraket'); // Render the howTo.hbs page
});



app.get("/taskView", async (req, res) => {
  try {
    const incompleteTasks = await Task.find({
      $and: [{ taskComplete: "no" }, { taskFavorite: "no" }],
    });
    const completedTasks = await Task.find({ taskComplete: "yes" });
    const favoritedTasks = await Task.find({
      $and: [{ taskFavorite: "yes" }, { taskComplete: "no" }],
    });
    res.render("taskView", { incompleteTasks, completedTasks, favoritedTasks });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server didn't respond.");
  }
});

app.post("/taskView", (req, res) => {
  const newTaskToDo = req.body;
  Task.create(newTaskToDo)
    .then(() => {
      res.redirect("/taskView");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error inserting task: " + err.message); // Send detailed error message to client
    });
});


app.get("/taskView/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render("edit", { task });
  } catch (err) {
    console.error(err);
    res.status(500).send("Serverr didnt respond.");
  }
});
app.post("/taskView/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTask = req.body;
    await Task.findByIdAndUpdate(id, updateTask, { new: true });
    res.redirect("/taskView");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erroor updating task: " + err.message);
  }
});
app.post("/taskView/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/taskView");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting task: " + err.message);
  }
});
app.post("/taskView/:id/complete", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTask = { taskComplete: "yes" }; // Update taskComplete to true
    await Task.findByIdAndUpdate(id, updateTask, { new: "yes" });
    res.redirect("/taskView");
  } catch (err) {
    console.error(err);
    // Handle errors appropriately (e.g., display error message to user)
  }
});
app.post("/taskView/:id/favorite", async (req, res) => {
  try {
    const { id } = req.params;

    // Get current favorite status
    const currentTask = await Task.findById(id);
    const isCurrentlyFavorite = currentTask.taskFavorite === "yes";

    // Update taskFavorite based on current status
    const updateTask = {
      taskFavorite: isCurrentlyFavorite ? "no" : "yes",
    };

    await Task.findByIdAndUpdate(id, updateTask, { new: "yes" });
    res.redirect("/taskView");
  } catch (err) {
    console.error(err);
    // Handle errors appropriately (e.g., display error message to user)
  }
});

//////////////////////////////

// Default local port for local testing
const localPort = 86;

// env var for netlify port
// port = process.env.PORT // || localPort;

// run the server on netlify or locally (node app.js)
app.listen(localPort, () => {
  console.log(`Server Running at http://localhost:${localPort}`);
});

// Export the Express app as a serverless function
module.exports.handler = serverless(app);
