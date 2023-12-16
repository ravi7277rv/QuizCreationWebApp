import mongoose, { Schema } from "mongoose";


const clozeOptionsSchema = mongoose.Schema({

    name : {
        type: String,
    },
    sentenceId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"cloze",
    },
});

const ClozeOptions = mongoose.model("clozeOption",clozeOptionsSchema);

export default ClozeOptions;










































