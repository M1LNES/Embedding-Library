import { parseJSON } from '../client/functions/functions'
import { expect, assert } from 'chai'

describe('Parse JSON test', () => {
	it('Valid object n.1', () => {
		const obj = `[{ "range": 10 }, { "range": 1000 }]`
		expect(parseJSON(obj)).to.be.deep.equal([{ range: 10 }, { range: 1000 }])
	})
	it('Valid object n.2', () => {
		const obj = `[{ "Age": 10 }, { "Name": "Lucas" }, { "Nationality" : "Sweden" }]`
		expect(parseJSON(obj)).to.be.deep.equal([
			{ Age: 10 },
			{ Name: 'Lucas' },
			{ Nationality: 'Sweden' },
		])
	})

	it('Invalid object n.1 - not a JSON', () => {
		const obj = `[{ "range": 10 }, { "range: 1000 }]`
		assert.equal(parseJSON(obj), null)
	})

	it('Invalid object n.2 - not a JSON', () => {
		const obj = 'anefbeksfhbshkebsehbgkhgs'
		assert.equal(parseJSON(obj), null)
	})

	it('Invalid object n.3 - not a JSON', () => {
		const obj = `{ "range": 10 }, { "range": 1000 }]`
		assert.equal(parseJSON(obj), null)
	})
})
