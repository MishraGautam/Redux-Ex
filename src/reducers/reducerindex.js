import sizereducer from './sizereducer'
import themereducer from './themereducer'
import bordertopleftreducer from './bordertopleftreducer'
import bordertoprightreducer from './bordertoprightreducer'
import borderbottomleftreducer from './borderbottomleftreducer'
import borderbottomrightreducer from './borderbottomrightreducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
	themereducer,
	sizereducer,
	bordertopleftreducer,
	bordertoprightreducer,
	borderbottomleftreducer,
	borderbottomrightreducer
})

export default allReducers;