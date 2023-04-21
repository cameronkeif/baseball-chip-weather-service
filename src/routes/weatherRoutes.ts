import express from 'express';
import controller from '../controllers/weatherController';

const router = express.Router();

router.get('/weather', controller.getWeather);

export = router;
