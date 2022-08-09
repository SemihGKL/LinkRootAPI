const Link = require('../models/linkModel');
const User = require('../models/UserModel');


function getLinksByUserId(req, res) {
    Link.find({ userId: req.params.id }, (err, links) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(links);
        }
    });
}

function deleteLinkById(req, res) {
    Link.findByIdAndRemove(req.params.id, (err, link) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(link);
        }
    });
}

async function addLinkByUserId(req, res) {
    try {
        await Link.create({
            userId: req.params.id,
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating
        }, async (err, link) => {
            if (err) {
                res.status(500).send(err);
            } else {
                await User.updateOne({ _id: req.params.id }, { $push: { links: link._id } })
                res.status(200).send(link);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
}

function updateLink(req, res) {
    Link.findByIdAndUpdate(req.params.id, req.body, (err, link) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(link);
        }
    });
}
module.exports = {
    getLinksByUserId,
    deleteLinkById,
    addLinkByUserId,
    updateLink
};