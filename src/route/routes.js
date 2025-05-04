import { Router } from "express";
import { addEvent,registerForEvent,getAllEvents,getAllUsers,getAllAdmins,addAdmin,checkRegistration,deleteEvent,deleteUser } from "../controller/controller.js";
const router=Router();
router.post('/addEvent',addEvent);
router.post('/registerForEvent',registerForEvent);
router.get('/getAllEvents',getAllEvents);
router.get('/getAllUsers/:eventId',getAllUsers);
router.get('/getAllAdmins',getAllAdmins);
router.post('/addAdmin',addAdmin);
router.post('/checkRegistration',checkRegistration);
router.delete('/deleteEvent/:eventId',deleteEvent);
router.delete('/deleteUser/:userId',deleteUser);


export default router;