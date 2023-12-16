import express from 'express';
import { 
    addClozeOptions,
    addClozeSentence,
    getAllClozeOptions,
    getAllClozeSentences,
    getClozeOptionsBySentenceId,
 } from '../controllers/clozeController.js';

const router = express.Router();

router.route("/addClozeSentence").post(addClozeSentence);
router.route("/addClozeOption/:id").post(addClozeOptions);
router.route("/getAllClozeSentences").get(getAllClozeSentences);
router.route("/getAllClozeOptions").get(getAllClozeOptions);
router.route("/getClozeOptionsBySentenceId/:id").get(getClozeOptionsBySentenceId);


export default router;






























