const router = require('express').Router()

let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/h-thai-ml-tables.png'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/coffee-cat.jpg'
}]

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

module.exports = router



