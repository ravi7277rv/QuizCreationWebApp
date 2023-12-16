import Cloze from "../models/cloze.js";
import ClozeOptions from "../models/clozeOptions.js";


export const addClozeSentence = async( req, res ) => {

    try {

        const { sentence } = req.body;

        if(!sentence){
            return res.status(400)
                .json({
                    success:false,
                    message:"Sentence is required",
                });
        };

        let clozeSentence = await Cloze.create({
            sentence:sentence
        });

        res.status(200)
        .json({
            success:true,
            message:"Sentence is added",
            data:clozeSentence,
        });
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};

export const addClozeOptions = async( req, res) => {

    try {

        const { id } = req.params;
        const { name } = req.body;

        if(!name){
            return res.status(400)
            .json({
                success:false,
                message:"Cloze option is required",
            });
        };

        const addedClozeOption = await ClozeOptions.create({
            name:name,
            sentenceId:id,
        });

        let getClozeSentence = await Cloze.findById(id);

        let addedClozeOptionId = {
            optionId:addedClozeOption._id
        }

        getClozeSentence.options.push(addedClozeOptionId);

        await getClozeSentence.save();

        res.status(200)
        .json({
            success:true,
            message:"Option is saved with sentence Id",
            data:addedClozeOption,
        })
        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
}

export const getAllClozeSentences = async( req, res) => {

    try {

        const sentences = await Cloze.find();

        res.status(200)
            .json({
                success:true,
                message:"All Cloze Sentences are found",
                data:sentences,
            });
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};

export const getAllClozeOptions = async( req, res ) => {

    try {

        const allClozeOptions = await ClozeOptions.find();

        res.status(200)
            .json({
                success:true,
                message:"All Options are found",
                data:allClozeOptions,
            })
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};


export const getClozeOptionsBySentenceId = async( req, res ) => {
    
    try {

        const { id } = req.params;
        
        const allOptions = await ClozeOptions.find();

        let filteredOptionById = allOptions.filter((opt) => opt.sentenceId == id);

        res.status(200)
            .json({
                success:true,
                message:"Options are found",
                data:filteredOptionById,
            });
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};

















































