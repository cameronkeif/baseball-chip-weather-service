import MlbStadium from '../types/MlbStadium';

const mlbStadiums = new Map<string, MlbStadium>([
  [
    'Angel Stadium',
    { latitude: 33.800308, longitude: -117.882732, hasRoof: false },
  ],
  ['Chase Field', { latitude: 33.4456, longitude: -112.0667, hasRoof: true }],
  ['Truist Park', { latitude: 33.8908, longitude: -84.4678, hasRoof: false }],
  [
    'Oriole Park at Camden Yards',
    { latitude: 39.2841, longitude: -76.6206, hasRoof: false },
  ],
  ['Fenway Park', { latitude: 42.3467, longitude: -71.0972, hasRoof: false }],
  [
    'Guaranteed Rate Field',
    { latitude: 41.8299, longitude: -87.6338, hasRoof: false },
  ],
  [
    'Progressive Field',
    { latitude: 41.4952, longitude: -81.6853, hasRoof: false },
  ],
  [
    'Great American Ball Park',
    { latitude: 39.0979, longitude: -84.5086, hasRoof: false },
  ],
  ['Coors Field', { latitude: 39.7559, longitude: -104.9942, hasRoof: false }],
  ['Comerica Park', { latitude: 42.339, longitude: -83.0486, hasRoof: false }],
  [
    'Minute Maid Park',
    { latitude: 29.7572, longitude: -95.3552, hasRoof: true },
  ],
  [
    'Kauffman Stadium',
    { latitude: 39.0517, longitude: -94.4808, hasRoof: false },
  ],
  [
    'Dodger Stadium',
    { latitude: 34.0738, longitude: -118.239, hasRoof: false },
  ],
  ['loanDepot park', { latitude: 25.7783, longitude: -80.2197, hasRoof: true }],
  [
    'American Family Field',
    { latitude: 43.0279, longitude: -87.9712, hasRoof: true },
  ],
  ['Target Field', { latitude: 44.9817, longitude: -93.2778, hasRoof: false }],
  ['Citi Field', { latitude: 40.7571, longitude: -73.8458, hasRoof: false }],
  [
    'Oakland Coliseum',
    { latitude: 37.7516, longitude: -122.2005, hasRoof: false },
  ],
  [
    'Citizens Bank Park',
    { latitude: 39.9056, longitude: -75.1667, hasRoof: false },
  ],
  ['PNC Park', { latitude: 40.4469, longitude: -80.0057, hasRoof: false }],
  ['Petco Park', { latitude: 32.7076, longitude: -117.157, hasRoof: false }],
  ['Oracle Park', { latitude: 37.7786, longitude: -122.3892, hasRoof: false }],
  ['T-Mobile Park', { latitude: 47.5914, longitude: -122.3327, hasRoof: true }],
  ['Busch Stadium', { latitude: 38.6226, longitude: -90.1928, hasRoof: false }],
  [
    'Tropicana Field',
    { latitude: 27.7683, longitude: -82.6534, hasRoof: true },
  ],
  [
    'Globe Life Field',
    { latitude: 32.7479, longitude: -97.0836, hasRoof: true },
  ],
  ['Rogers Centre', { latitude: 43.6414, longitude: -79.3894, hasRoof: true }],
  ['Nationals Park', { latitude: 38.873, longitude: -77.0074, hasRoof: false }],
  [
    'Yankee Stadium',
    { latitude: 40.8296, longitude: -73.9262, hasRoof: false },
  ],
]);

export default mlbStadiums;
