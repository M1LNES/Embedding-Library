import assert from 'assert'
import { JSDOM } from 'jsdom'
import React from 'react'
import { render } from '@testing-library/react'
import WidgetConfig from '../client/components/widget-config'
import WidgetConfigRevealed from '../client/components/widget-config-revealed'

const prejson = { a: 10, f: 20, l0: 'amefnm' }
const dataRequests = { f: '10', e: '11' }
const arrayRequests = [
	[
		{
			a: [{ a: 7, b: 20 }, { k: 10, luk: 0 }, [{ j: 10 }]],
		},
		{ b: 19 },
		{ u: { u: { o: { alfa: 'o' } } } },
		{ a: 10000 },
		{ abc: 'pes' },
	],
	{ dddd: 'ls' },
]

describe('testing <WidgetConfig/> component', () => {
	let dom

	before(() => {
		dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
			runScripts: 'dangerously',
		})
		global.window = dom.window
		global.document = dom.window.document
	})

	it('Showing description', () => {
		const { getByText } = render(
			<WidgetConfig prejson={prejson} dataRequests={dataRequests} />
		)

		const visionConfigText = getByText('Vision config:')
		assert(visionConfigText !== null)

		const requestsText = getByText('Requests:')
		assert(requestsText !== null)
	})

	it('Showing values added via props (Data request = object)', () => {
		const { getByText } = render(
			<WidgetConfig prejson={prejson} dataRequests={dataRequests} />
		)

		const prejsonText = getByText(new RegExp(JSON.stringify(prejson)))
		assert(prejsonText !== null)

		const dataRequestsText = getByText(new RegExp(JSON.stringify(dataRequests)))
		assert(dataRequestsText !== null)
	})

	it('Showing values added via props (Data request = array)', () => {
		const { getByText, queryAllByText } = render(
			<WidgetConfig prejson={prejson} dataRequests={arrayRequests} />
		)

		const prejsonText = getByText(new RegExp(JSON.stringify(prejson)))
		assert(prejsonText !== null)

		const requestElements = queryAllByText((content, element) => {
			return arrayRequests.every((request) =>
				content.includes(JSON.stringify(request))
			)
		})

		assert.strictEqual(requestElements.length, 1)
	})

	it('Does not render invalid props', () => {
		const invalidProp1 = 'bbsehkbekhb84388nfsf;[//'
		const invalidProp2 = 32030000

		const { getByText, queryByText } = render(
			<WidgetConfig
				prejson={prejson}
				invalidProp1={invalidProp1}
				invalidProp2={invalidProp2}
				dataRequests={dataRequests}
			/>
		)

		assert(getByText(new RegExp(JSON.stringify(prejson))) !== null)
		assert(queryByText(invalidProp1) === null)
		assert(queryByText(invalidProp2) === null)
		assert(getByText(new RegExp(JSON.stringify(dataRequests))) !== null)
	})

	after(() => {
		delete global.window
		delete global.document
	})
})

describe('testing <WidgetConfigRevealed/> component', () => {
	let dom

	before(() => {
		dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
			runScripts: 'dangerously',
		})
		global.window = dom.window
		global.document = dom.window.document
	})

	it('Showing description', () => {
		const { getByText } = render(
			<WidgetConfigRevealed prejson={prejson} dataRequests={dataRequests} />
		)

		const visionConfigText = getByText('Vision config revealed:')
		assert(visionConfigText !== null)

		const requestsText = getByText('Requests revealed:')
		assert(requestsText !== null)
	})

	it('Showing values added via props (Data request = object)', () => {
		const { getByText } = render(
			<WidgetConfigRevealed
				prejson={prejson}
				expandedDataRequests={dataRequests}
			/>
		)

		const prejsonText = getByText(new RegExp(JSON.stringify(prejson)))
		assert(prejsonText !== null)

		const dataRequestsText = getByText(new RegExp(JSON.stringify(dataRequests)))
		assert(dataRequestsText !== null)
	})

	it('Showing values added via props (Data request = array)', () => {
		const { getByText, queryAllByText } = render(
			<WidgetConfigRevealed
				prejson={prejson}
				expandedDataRequests={arrayRequests}
			/>
		)

		const prejsonText = getByText(new RegExp(JSON.stringify(prejson)))
		assert(prejsonText !== null)

		const requestElements = queryAllByText((content, element) => {
			return arrayRequests.every((request) =>
				content.includes(JSON.stringify(request))
			)
		})

		assert.strictEqual(requestElements.length, 1)
	})

	it('Does not render invalid props', () => {
		const invalidProp1 = 'bbsehkbekhb84388nfsf;[//'
		const invalidProp2 = 32030000

		const { getByText, queryByText } = render(
			<WidgetConfigRevealed
				prejson={prejson}
				invalidProp1={invalidProp1}
				invalidProp2={invalidProp2}
				expandedDataRequests={dataRequests}
			/>
		)

		assert(getByText(new RegExp(JSON.stringify(prejson))) !== null)
		assert(queryByText(invalidProp1) === null)
		assert(queryByText(invalidProp2) === null)
		assert(getByText(new RegExp(JSON.stringify(dataRequests))) !== null)
	})

	after(() => {
		delete global.window
		delete global.document
	})
})
