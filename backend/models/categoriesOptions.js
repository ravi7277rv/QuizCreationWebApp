import mongoose from "mongoose";

const categoriesOptionSchema = mongoose.Schema({

    name: {
        type: String,
    },
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"categories"
    }
});

const CategoriesOption = mongoose.model("categoriesoption",categoriesOptionSchema);

export default CategoriesOption;


































