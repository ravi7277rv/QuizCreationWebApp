import Comprehension from "../models/comprehension.js";
import ComprehensionOptions from "../models/comprehensionOption.js";


export const addComprehesionParagraph = async ( req, res ) => {

    try {

        const { paragraph } = req.body;

        if(!paragraph){
            return res.status(400)
                .json({
                    success:false,
                    message:"Paragraph is required for Comprehension",
                });
        };

        const addedParagraph = await Comprehension.create({
            paragraph:paragraph
        });

        res.status(200)
            .json({
                success:true,
                message:"Paragraph is added",
                data:addedParagraph,
            });
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};

export const getAllComprehensionParagrahp = async ( req, res ) => {

    try {

        const allParagraph = await Comprehension.find();

        return res.status(200)
            .json({
                success:true,
                message:"All paragraph are found",
                data:allParagraph,
            });
        
    } catch (error) {
        return res.status({
            success:false,
            message:error.message,
        });
    };
};


export const addQuestionForParagraph = async ( req, res ) => {

    try {

        const { id } = req.params;

        const { question } = req.body; 

        if(!question){
            return res.status(400)
                .json({
                    success:false,
                    message:"Question is required for the paragraph",
                });
        };

        const para = await Comprehension.findById(id);

        let quest = {
            question:question
        }

        para.questions.push(quest);

        await para.save();

        return res. status(200)
            .json({
                success:true,
                message:"paragraph found",
                data:para,
            })
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};


export const addComprehensionOptionForQuestion = async ( req, res ) => {
    try {

        const pId = req.params.pId;
        const qId = req.params.qId;
        const { name } = req.body;

        if(!name){
            return res.status(400)
                .json({
                    success:false,
                    message:"Option for Comprehension question is required",
                });
        };

        const addedOption = await ComprehensionOptions.create({
            name:name,
            questionId:qId
        });

        
        let foundParagraph = await Comprehension.findById(pId);
        const questionIndex = foundParagraph.questions.findIndex((question) =>question._id.equals(qId));
        foundParagraph.questions[questionIndex].option = addedOption._id;
        await foundParagraph.save();

        return res.status(200).json({
            success:true,
            message:"Options added successfully",
            data:addedOption,
        })
        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};


export const getAllQuestionOfAParagraph = async ( req, res ) => {

    try {

    const { pId } = req.params;

    if(!pId){
        return res.status(400)
            .json({
                success:false,
                message:"Id of paragraph did not recived",
            });
    };

    const para = await Comprehension.findById(pId);

        let allQuestions = para.questions;

    return res.status(200)
        .json({
            success:true,
            message:"All question of para are found",
            data:allQuestions,
        })
        
    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:error.message,
        });
    };
};


export const getOptionOfAQuestion = async ( req, res ) => {

    try {

        const pId = req.params.pId;
        const qId = req.params.qId;
        
        const paragraphFound = await Comprehension.findById(pId);

        let questionIndex = paragraphFound.questions.findIndex((question) => question._id.equals(qId));
        let optIdOfQuestion = paragraphFound.questions[questionIndex].option

        let questionOption = await ComprehensionOptions.findById(optIdOfQuestion);

        let optionName = questionOption.name;

        return res.status(200)
            .json({
                success:true,
                message:"option of question index",
                data:optionName,
            });

        
    } catch (error) {
        return res.status(500)
            .json({
                success:false,
                message:error.message,
            });
    };
};
























