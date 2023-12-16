import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({

    name: {
        type: String,
    },
    options: [
        {
            optionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "categoriesOptions"
            }
        }
    ]

});

const Category = mongoose.model("Category", categoriesSchema);

export default Category;



















































