const authorModel = require('../models/authorModel');

const createAuhthor = async function (req, res) {

    try {

        const authorData = req.body
        const { fname, lname, title, email, password } = authorData

        if (Object.keys(authorData).length === 0) {
            return res.status(400).send({ status: false, message: "author data is requried" })
        }

        if (!fname || fname == "") {
            return res.status(400).send({ status: false, message: "author first name is required" })
        }

        if (!lname || lname == "") {
            return res.status(400).send({ status: false, message: "author last name is required" })
        }

        if (!title || title == "") {
            return res.status(400).send({ status: false, message: "author title is required" })
        }

        if (!email || email == "") {
            return res.status(400).send({ status: false, message: "author email is required" })
        }

        if (!password || password == "") {
            return res.status(400).send({ status: false, message: "author password is required" })
        }

        let createdAuthor = await authorModel.create(authorData);
        return res.status(201).send({ status: true, message: "Success", data: createdAuthor });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.createAuhthor=createAuhthor