import mongoose from "mongoose";


const comprehensionOptionSchema = mongoose.Schema({
    
    name : {
        type: String,
    },
    questionId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"comprehension"
    }
});

const ComprehensionOptions = mongoose.model("comprehensionOption",comprehensionOptionSchema);

export default ComprehensionOptions;















































