import mongoose from "mongoose";

const clozeSchema = mongoose.Schema({

    sentence : {
        type:String,
    },
    options : [
        {
            optionId : {
                type : mongoose.Schema.Types.ObjectId,
                ref:"clozeOptions"
            },
        },
    ],
});

const Cloze = mongoose.model("cloze",clozeSchema);

export default Cloze;











































