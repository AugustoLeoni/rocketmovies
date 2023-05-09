const { Router } = require("express")

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();
notesRoutes.use(ensureAuthenticated);

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.put("/:id", notesController.update);

module.exports = notesRoutes;