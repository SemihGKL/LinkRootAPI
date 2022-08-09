const router = require('express').Router();
const linkController = require('../controllers/linkController');

router.get('/:id', linkController.getLinksByUserId);

router.delete('/:id', linkController.deleteLinkById);

router.put('/:id', linkController.addLinkByUserId);

router.patch('/:id', linkController.updateLink);

module.exports = router;