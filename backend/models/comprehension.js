import mongoose from "mongoose";


const comprehensionSchema = mongoose.Schema({

    paragraph: {
        type: String,
    },
    questions: [
        {
            question:{
                type:String,
            },
            option: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comprehensionOption",
            },
        },
    ],
    
});

const Comprehension = mongoose.model("comprehension", comprehensionSchema);

export default Comprehension;



























































