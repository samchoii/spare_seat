'use strict';

import express from 'express';
import controller from './trip.controller';
import auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated, controller.create);

module.exports = router;
