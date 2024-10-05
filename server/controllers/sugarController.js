
const mongoose = require("mongoose");

const Sugar = require("../models/sugarModel");

const getSugars = async (req, res) => {
    try{
        
        let data = await Sugar.find().sort({ createdAt: -1 });

        if (data) {
            res.status(200).json(data); 
            return;
        }

    }
    catch(err) {
        console.log(err)
    }

}

const getSugarById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such sugar" })
    }

    const sugar = await Sugar.findById(id);

    if (!sugar) {
        return res.status(404).json({ error: "No such sugar" });
    }

    res.status(200).json(sugar);
}

const createSugar = async (req, res) => {
    try {
        const {sugar, date, year, time} = req.body;
        const sugarProfile = await Sugar.create({ sugar, date, year, time });
        res.status(200).json(sugarProfile);
    }
    catch( error ) {
        res.status(400).json({ error: error.message });
    }

}


module.exports = {getSugars, getSugarById, createSugar }