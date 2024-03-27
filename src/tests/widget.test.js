import assert from 'assert'
import { JSDOM } from 'jsdom'
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import './embedding-fix'
import { Widget } from '../index'
import {
	MOCKED_DATA,
	MOCKED_FIELDS,
	MOCKED_PARAMS,
	MOCKED_WIDGETS,
} from './mocked-constants'
import sinon from 'sinon'
import { expect } from 'chai'

describe('testing <Widget/> component', () => {
	let dom
	let fetchStub

	beforeEach(() => {
		fetchStub = sinon.stub(global, 'fetch')
	})

	before(() => {
		dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
			runScripts: 'dangerously',
		})
		global.window = dom.window
		global.document = dom.window.document
		global.ResizeObserver = class ResizeObserver {
			observe() {}
		}
	})

	describe('Happy day scenarios', () => {
		it('Bar chart', async () => {
			fetchStub.onCall(0).resolves({
				ok: true,
				json: () => Promise.resolve(MOCKED_FIELDS),
			})
			fetchStub.onCall(1).resolves({
				ok: true,
				json: () => Promise.resolve(MOCKED_WIDGETS),
			})
			fetchStub.onCall(2).resolves({
				ok: true,
				json: () => Promise.resolve(MOCKED_DATA),
			})

			const { getByText, container } = render(
				<Widget boardID={1671} widgetID={25430} params={MOCKED_PARAMS} />
			)

			await waitFor(() => {
				const title = getByText('Success executions')
				expect(title).to.exist

				const footer = getByText('© Data by Emplifi')
				expect(footer).to.exist

				const dataVisualized = getByText('657')
				expect(dataVisualized).to.exist
			})
		})
	})

	after(() => {
		delete global.window
		delete global.document
	})
})
