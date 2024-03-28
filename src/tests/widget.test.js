import { JSDOM } from 'jsdom'
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import './embedding-fix'
import { Widget } from '../index'
import {
	MOCKED_DATA,
	MOCKED_FIELDS,
	MOCKED_INVALID_FORMAT,
	MOCKED_NO_DEPENDENCIES,
	MOCKED_PARAMS,
	MOCKED_STACKED_BAR_CHART,
	MOCKED_WIDGETS,
} from './mocked-constants'
import sinon from 'sinon'
import { expect } from 'chai'
import { OMNI_STUDIO_FETCHING_WIDGET_ERROR } from '../client/constants/api-messages'

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
		}),
			it('Stacked bar chart', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.widgets),
				})
				fetchStub.onCall(2).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.data),
				})

				const { getByText, container } = render(
					<Widget
						boardID={1684}
						widgetID={25633}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText(
						'Stacked bar chart of failing/non-failing alerts per day'
					)
					expect(title).to.exist

					const footer = getByText('© Data by Emplifi')
					expect(footer).to.exist

					const legend = getByText('ok')
					expect(legend).to.exist

					const legend2 = getByText('fail')
					expect(legend2).to.exist

					const xAxis = getByText('3/22/24')
					expect(xAxis).to.exist

					const yLegend = getByText('Executions count')
					expect(yLegend).to.exist
				})
			}),
			it('Circual chart', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.widgets),
				})
				fetchStub.onCall(2).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.data2),
				})

				const { getByText, container } = render(
					<Widget
						boardID={1684}
						widgetID={25750}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText('Most failing alerts - circual')
					expect(title).to.exist

					const subTitle = getByText('P30D/now[sD]')
					expect(subTitle).to.exist

					const footer = getByText('© Data by Emplifi')
					expect(footer).to.exist

					const legend = getByText('243')
					expect(legend).to.exist

					const valueInChart = getByText('715')
					expect(valueInChart).to.exist
				})
			}),
			it('Not depended widget', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_NO_DEPENDENCIES.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_NO_DEPENDENCIES.widgets),
				})
				fetchStub.onCall(2).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_NO_DEPENDENCIES.data),
				})

				const { getByText, container } = render(
					<Widget boardID={2002} widgetID={31955} />
				)

				await waitFor(() => {
					const title = getByText('OK alert executions')
					expect(title).to.exist
				})
			})
	})

	describe('Failing scenarios', () => {
		it('Invalid Omni Studio token', async () => {
			fetchStub.onCall(0).resolves({
				ok: false,
				json: () =>
					Promise.resolve({
						success: false,
						message: 'OmniStudio failed: invalid token',
					}),
			})
			fetchStub.onCall(1).resolves({
				ok: false,
				json: () =>
					Promise.resolve({
						success: false,
						message: 'OmniStudio failed: invalid token',
					}),
			})
			fetchStub.onCall(2).resolves({
				ok: false,
				json: () => Promise.resolve({}),
			})

			const { getByText, container } = render(
				<Widget
					boardID={1684}
					widgetID={25750}
					params={[
						{
							value: 'P30D/now[sD]',
							name: 'cas',
							type: 'daterange',
						},
					]}
				/>
			)

			await waitFor(() => {
				const title = getByText(OMNI_STUDIO_FETCHING_WIDGET_ERROR)
				expect(title).to.exist
			})
		}),
			it('Invalid Public API token', async () => {
				fetchStub.onCall(0).resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message: 'Authorization is not valid.',
						}),
				})
				fetchStub.onCall(1).resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message: 'Authorization is not valid.',
						}),
				})
				fetchStub.onCall(2).resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message: 'Authorization is not valid.',
						}),
				})

				const { getByText, container } = render(
					<Widget
						boardID={1684}
						widgetID={25750}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText(OMNI_STUDIO_FETCHING_WIDGET_ERROR)
					expect(title).to.exist
				})
			}),
			it('Widget not found on board', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.widgets),
				})
				fetchStub.onCall(2).resolves({
					ok: true,
					json: () => Promise.resolve([]),
				})

				const { getByText, container } = render(
					<Widget
						boardID={1684}
						widgetID={2112112}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText('Widget 2112112 not found on board 1684!')
					expect(title).to.exist
				})
			}),
			it('Invalid board ID - string', async () => {
				fetchStub.onCall(0).resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message:
								'OmniStudio failed: invalid input syntax for type integer: "kenfjknffe"',
						}),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () =>
						Promise.resolve({
							success: false,
							message:
								'OmniStudio failed: invalid input syntax for type integer: "kenfjknffe"',
						}),
				})
				fetchStub.onCall(2).resolves({
					ok: false,
					json: () => Promise.resolve([]),
				})

				const { getByText, container } = render(
					<Widget
						boardID={'kenfjknffe'}
						widgetID={2112112}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText(OMNI_STUDIO_FETCHING_WIDGET_ERROR)
					expect(title).to.exist
				})
			}),
			it('Invalid widget ID - string', async () => {
				fetchStub.onCall(0).resolves({
					ok: false,
					json: () => Promise.resolve(MOCKED_FIELDS),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_WIDGETS),
				})
				fetchStub.onCall(2).resolves([])

				const { getByText, container } = render(
					<Widget
						boardID={1671}
						widgetID={'skjemnfefe'}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText('Widget skjemnfefe not found on board 1671!')
					expect(title).to.exist
				})
			}),
			it('Missing some preJSONs params', async () => {
				fetchStub.onCall(0).resolves({
					ok: false,
					json: () => Promise.resolve(MOCKED_FIELDS),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_WIDGETS),
				})
				fetchStub.onCall(2).resolves([])

				const { getByText, container } = render(
					<Widget
						boardID={1671}
						widgetID={25430}
						params={[
							{
								value: 'P30D/now[sD]',
								name: 'cas',
								type: 'daterange',
							},
						]}
					/>
				)

				await waitFor(() => {
					const title = getByText(
						'Error - you must specify all PreJSON params that widget is depended on!'
					)
					expect(title).to.exist
				})
			}),
			it('Invalid expanded preJSON', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_INVALID_FORMAT.widgets),
				})

				const { getByText, container } = render(
					<Widget boardID={1684} widgetID={25620} params={[`{ a: 10000 }`]} />
				)

				await waitFor(() => {
					const title = getByText(
						'Data request expanded config PreJSON is not valid.'
					)
					expect(title).to.exist
				})
			}),
			it('Invalid type of widget', async () => {
				// this test is prototype into future - when more widgets
				// (e.g. label, markdown, ...) could be added
				// now it just fetch "not existing" data
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_INVALID_FORMAT.widgetsInvalidType),
				})
				fetchStub.onCall(2).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.data),
				})

				const { getByText, container } = render(
					<Widget boardID={1684} widgetID={25620} params={[{ day: '10' }]} />
				)

				await waitFor(() => {
					const title = getByText('Unknown type of widget')
					expect(title).to.exist
				})
			}),
			it('Config not valid', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.fields),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () =>
						Promise.resolve(MOCKED_INVALID_FORMAT.widgetsInvalidConfig),
				})
				fetchStub.onCall(2).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_STACKED_BAR_CHART.data),
				})

				const { getByText, container } = render(
					<Widget boardID={1684} widgetID={25620} params={[{ day: '10' }]} />
				)

				await waitFor(() => {
					const title = getByText('PreJSON is not valid')
					expect(title).to.exist
				})
			})
	})

	afterEach(() => {
		fetchStub.restore()
	})

	after(() => {
		delete global.window
		delete global.document
	})
})
