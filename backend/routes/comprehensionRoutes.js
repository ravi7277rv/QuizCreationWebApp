import express from 'express'; 
import { 
    addComprehensionOptionForQuestion,
    addComprehesionParagraph, 
    addQuestionForParagraph, 
    getAllComprehensionParagrahp, 
    getAllQuestionOfAParagraph, 
    getOptionOfAQuestion
} from '../controllers/comprehensionController.js';

const router = express.Router();

router.route('/addComprehensionParagraph').post(addComprehesionParagraph);
router.route("/getAllComprehensionParagraph").get(getAllComprehensionParagrahp);
router.route("/addQuestionForParagraph/:id").post(addQuestionForParagraph);
router.route("/addComprehensionOptionForQuestion/:pId/:qId").post(addComprehensionOptionForQuestion);
router.route("/getAllQuesitonsOfAParagraph/:pId").get(getAllQuestionOfAParagraph);
router.route("/getOptionOfAQuestion/:pId/:qId").get(getOptionOfAQuestion)


export default router;











































 