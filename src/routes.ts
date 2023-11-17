import { Router } from "express";
import UserController from "./controller/UserController";
import EventController from "./controller/EventController";

const routes = Router();

routes.post("/user", UserController.create);
routes.get("/users", UserController.getUsers);
routes.get("/user/:id", UserController.getUser);
routes.delete("/user/:id", UserController.deleteUser);
routes.put("/user/:id", UserController.updateUser);
routes.post("/user/login", UserController.loginUser);

routes.post("/event", EventController.create);
routes.get("/event/:id", EventController.getEventById);
routes.get("/event/user/:id", EventController.getAllEventsByUserId);
routes.get("/events", EventController.getAllEvents);
routes.get("/event/organizer/:id", EventController.getEventByOrganizerId);
routes.delete("/event/:id", EventController.deleteEvent);
routes.put("/event/:id", EventController.updateEvent);
routes.put("/event/:eventId/user/:userId", EventController.addUserToEvent);
routes.put("/event/:eventId/user/:userId/remove", EventController.removeUserFromEvent);

export default routes;