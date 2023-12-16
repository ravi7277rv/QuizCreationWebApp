import express from 'express';
import { 
    addCategories, 
    addOptionsOfCategories, 
    getAllCategories, 
    getAllOptionsOfACategory,
    getAllOptionsOfCategories
} from '../controllers/categoriesController.js';

const router = express.Router();

router.route("/addCategories").post(addCategories);
router.route("/getAllCategories").get(getAllCategories);
router.route("/addOptionsOfCategories/:id").post(addOptionsOfCategories);
router.route("/getAllOptionsOfCategories").get(getAllOptionsOfCategories);
router.route("/getAllOptionsOfACategoryById/:id").get(getAllOptionsOfACategory);


export default router;