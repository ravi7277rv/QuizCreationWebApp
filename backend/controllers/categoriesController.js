import Category from "../models/categories.js";
import CategoriesOptions from '../models/categoriesOptions.js';


export const addCategories = async (req, res) => {

    try {

        const { name } = req.body;

        if (!name) {
            return res.status(400)
                .json({
                    success: false,
                    message: "Name of Categories is required"
                });
        };

        const category = await Category.create({
            name: name
        });

        res.status(200).json({
            success: true,
            message: "Category is created successfully",
            data: category,
        });

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: error.message,
            });
    };
};


export const getAllCategories = async (req, res) => {

    try {

        const categories = await Category.find();

        res.status(200)
            .json({
                success: true,
                message: "All Categories are found",
                categories,
            });

    } catch (error) {
        res.status(500)
            .json({
                success: false,
                message: error.message,
            });
    };
};


export const addOptionsOfCategories = async (req, res) => {

    try {

        const { id } = req.params;

        const { name } = req.body;

        if (!name) {
            return res.status(400)
                .json({
                    success: false,
                    message: "Option Name is required",
                });
        };

        const addedOption = await CategoriesOptions.create({
            name: name,
            categoryId: id
        });

        let optId = addedOption._id;

        let category = await Category.findById(id);

        let optioId = {
            optionId: optId
        };

        category.options.push(optioId);

        await category.save();


        res.status(200)
            .json({
                success: true,
                message: "Option is added Successfully",
                data: addedOption,
            });

    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message,
            });
    };
};

export const getAllOptionsOfCategories = async (req, res) => {

    try {

        const allOptions = await CategoriesOptions.find();

        res.status(200)
            .json({
                success: true,
                message: "All Options are found",
                data: allOptions,
            });

    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message,
            });
    };
};


export const getAllOptionsOfACategory = async (req, res) => {

    try {

        const { id } = req.params;

        let allOptions = await CategoriesOptions.find();

        let filteredOptionOfACategory = allOptions.filter((item) => item.categoryId == id)

        res.status(200)
            .json({
                success: true,
                message: "All Optins of a category are found",
                data: filteredOptionOfACategory,
            });

    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: error.message,
            });
    };
};



































