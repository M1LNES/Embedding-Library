import { assert } from 'chai'
import { JSDOM } from 'jsdom'
import React from 'react'
import { render } from '@testing-library/react'
import './embedding-fix'
import { WidgetVision } from '../index'

describe('testing <WidgetVision/> component', () => {
	let dom

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

	it('Rendering vision widget - basic - just printed fetched value', () => {
		const { getByText, container } = render(
			<WidgetVision
				data={{
					header: [
						{
							type: 'target',
							rows: ['doc_count'],
						},
					],
					data: [657],
				}}
				prejson={{
					header: {
						title: 'Success executions',
						subtitle: 'P30D/now[sD]',
					},
					vision: {
						data: [
							{
								name: 'root',
								format: 'omni-full',
								source: '$input',
							},
						],
						formats: [
							{
								name: 'format',
								type: 'number',
							},
							{
								name: 'value',
								type: 'expr',
								expr: "(isNaN(value) || value === null) ? 'N/A' : ( value < 1000000 ? ((new Intl.NumberFormat('en-US', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(',', ' ') : (new Intl.NumberFormat('en-US', {notation: 'compact',maximumFractionDigits: 2})).format(value))",
							},
						],
						marks: [
							{
								type: 'text',
								name: 'Values',
								source: {
									data: 'root',
								},
								encode: {
									fontSize: 36,
									fill: '#444',
									text: {
										field: 'value',
										format: 'value',
									},
									anchorY: 'end',
									fontWeight: 'medium',
									anchorX: 'middle',
									y: {
										expr: "(signal('layout.top') + signal('layout.height') / 2 )",
									},
									x: {
										expr: "signal('container.width') / 2",
									},
								},
							},
							{
								type: 'text',
								name: 'Relative Change Text',
								encode: {
									text: '26 Feb 2024 - 26 Mar 2024',
									x: {
										expr: "(signal('container.width') / 2) - (signal('container.width') > 300 ? 40 : 0)",
									},
									anchorX: {
										expr: "signal('container.width') > 300 ? 'start' : 'middle'",
									},
									anchorY: 'middle',
									fontSize: 11,
									y: {
										expr: "signal('layout.top') +  ( signal('layout.height') / 2 ) + (signal('container.width') > 300 ? 30 : 50) ",
									},
								},
							},
						],
					},
				}}
			/>
		)

		const title = getByText('Success executions')
		assert(title !== null)
		const subtitle = getByText('P30D/now[sD]')
		assert(subtitle !== null)
		const date = getByText('26 Feb 2024 - 26 Mar 2024')
		assert(date !== null)
		const footer = getByText('© Data by Emplifi')
		assert(footer !== null)

		// Output the rendered component for inspection
		// console.log(container.innerHTML)
	}),
		it('Rendering vision widget - bar chart', () => {
			const { getByText, container } = render(
				<WidgetVision
					data={{
						header: [
							{
								type: 'date_range',
								rows: [
									'2024-02-25',
									'2024-02-26',
									'2024-02-27',
									'2024-02-28',
									'2024-02-29',
									'2024-03-01',
									'2024-03-02',
									'2024-03-03',
									'2024-03-04',
									'2024-03-05',
									'2024-03-06',
									'2024-03-07',
									'2024-03-08',
									'2024-03-09',
									'2024-03-10',
									'2024-03-11',
									'2024-03-12',
									'2024-03-13',
									'2024-03-14',
									'2024-03-15',
									'2024-03-16',
									'2024-03-17',
									'2024-03-18',
									'2024-03-19',
									'2024-03-20',
									'2024-03-21',
									'2024-03-22',
									'2024-03-23',
									'2024-03-24',
									'2024-03-25',
									'2024-03-26',
								],
							},
							{
								type: 'target',
								rows: ['doc_count'],
							},
						],
						data: [
							[1],
							[24],
							[24],
							[19],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[17],
							[24],
							[24],
							[24],
							[19],
							[0],
							[5],
							[24],
							[24],
							[24],
							[19],
							[0],
							[0],
							[17],
							[24],
							[24],
							[24],
							[19],
						],
					}}
					prejson={{
						header: {
							title: 'OK alert executions',
						},
						vision: {
							data: [
								{
									name: 'root',
									format: 'omni-full',
									transform: [
										{
											type: 'parse',
											field: 'dim0',
											as: 'datetime',
										},
									],
									source: '$input',
								},
							],
							formats: [
								{
									name: 'y',
									type: 'number',
									options: {},
								},
								{
									name: 'x',
									type: 'datetime',
									options: {
										day: 'numeric',
										month: 'short',
									},
								},
							],
							scales: [
								{
									type: 'band',
									name: 'x',
									domain: {
										field: 'dim0',
										data: 'root',
									},
									range: 'width',
								},
								{
									type: 'linear',
									name: 'y',
									domain: {
										field: 'value',
										data: 'root',
									},
									range: 'height',
									domainMin: 0,
								},
								{
									type: 'ordinal',
									name: 'color',
									domain: {
										field: 'dim0',
										data: 'root',
									},
									range: {
										palette: 'greens',
									},
								},
							],
							axes: [
								{
									orientation: 'bottom',
									scale: 'x',
									caption: 'Date range',
									format: 'x',
									name: 'Date range',
									ticks: -1,
									'encode:label': {
										angle: -90,
										anchorX: 'end',
									},
								},
								{
									orientation: 'left',
									scale: 'y',
									caption: 'Doc count',
									format: 'y',
									name: 'Doc count',
									grid: true,
								},
							],
							marks: [
								{
									type: 'rect',
									name: 'Columns',
									source: {
										data: 'root',
									},
									tooltip: {
										'Date range': {
											field: 'dim0',
										},
										'Doc count': {
											field: 'value',
										},
									},
									encode: {
										x: {
											field: 'dim0',
											scale: 'x',
										},
										y: {
											field: 'value',
											scale: 'y',
										},
										width: {
											band: 1,
											scale: 'x',
										},
										y2: {
											value: 0,
											scale: 'y',
										},
										fill: {
											field: 'dim0',
											scale: 'color',
										},
										fillOpacity: 0.9,
										':hover': {
											fillOpacity: 1,
										},
									},
								},
							],
						},
					}}
				/>
			)

			const title = getByText('OK alert executions')
			assert(title !== null)
			const date = getByText('Date range')
			assert(date !== null)
			const doc = getByText('Doc count')
			assert(doc !== null)
			const footer = getByText('© Data by Emplifi')
			assert(footer !== null)

			// Output the rendered component for inspection
			// console.log(container.innerHTML)
		}),
		it('Rendering vision widget - bar chart with badges ', () => {
			const { getByText, container } = render(
				<WidgetVision
					data={{
						header: [
							{
								type: 'date_range',
								rows: [
									'2024-02-25',
									'2024-02-26',
									'2024-02-27',
									'2024-02-28',
									'2024-02-29',
									'2024-03-01',
									'2024-03-02',
									'2024-03-03',
									'2024-03-04',
									'2024-03-05',
									'2024-03-06',
									'2024-03-07',
									'2024-03-08',
									'2024-03-09',
									'2024-03-10',
									'2024-03-11',
									'2024-03-12',
									'2024-03-13',
									'2024-03-14',
									'2024-03-15',
									'2024-03-16',
									'2024-03-17',
									'2024-03-18',
									'2024-03-19',
									'2024-03-20',
									'2024-03-21',
									'2024-03-22',
									'2024-03-23',
									'2024-03-24',
									'2024-03-25',
									'2024-03-26',
								],
							},
							{
								type: 'target',
								rows: ['doc_count'],
							},
						],
						data: [
							[1],
							[24],
							[24],
							[19],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[0],
							[17],
							[24],
							[24],
							[24],
							[19],
							[0],
							[5],
							[24],
							[24],
							[24],
							[19],
							[0],
							[0],
							[17],
							[24],
							[24],
							[24],
							[19],
						],
					}}
					prejson={{
						header: {
							title: 'OK alert executions 2',
							subtitle: 'pokus',
							tooltip:
								'The total number of users who are following selected pages over the selected date range',
							badges: [
								{
									title: 'Profile Level',
									tooltip:
										"Profile-level metrics take into account every post with any engagement during a selected date range, no matter the post's publishing date. The engagement data is aggregated by the day it happened, but not related to a specific post.",
								},
								{
									title: 'Pdsasasdadsad',
									tooltip: 'mkegjbngkrsubnseghb',
								},
							],
						},
						vision: {
							data: [
								{
									name: 'root',
									source: '$input',
									format: 'omni-full',
									transform: [
										{
											type: 'parse',
											field: 'dim0',
											as: 'datetime',
										},
									],
								},
							],
							scales: [
								{
									type: 'time',
									name: 'x',
									domain: {
										field: 'dim0',
									},
									range: 'width',
								},
								{
									type: 'linear',
									name: 'y',
									domain: {
										field: 'value',
									},
									range: 'height',
								},
							],
							formats: [
								{
									name: 'y',
									type: 'number',
									options: {},
								},
							],
							axes: [
								{
									scale: 'x',
									orientation: 'bottom',
									caption: 'Date range',
									name: 'Date range',
								},
								{
									scale: 'y',
									orientation: 'left',
									caption: 'Doc count',
									name: 'Doc count',
									format: 'y',
									grid: true,
								},
							],
							marks: [
								{
									type: 'line',
									source: 'root',
									encode: {
										x: {
											field: 'dim0',
											scale: 'x',
										},
										y: {
											field: 'value',
											scale: 'y',
										},
										stroke: '#3f51b5',
									},
									name: 'Line',
								},
								{
									type: 'point',
									source: 'root',
									encode: {
										glyph: 'circle',
										x: {
											field: 'dim0',
											scale: 'x',
										},
										y: {
											field: 'value',
											scale: 'y',
										},
										fill: '#3f51b5',
										':hover': {
											stroke: '#3f51b5',
											strokeOpacity: 0.3,
											strokeWidth: 10,
										},
									},
									name: 'Datapoints',
									tooltip: {
										'Date range': {
											field: 'dim0',
										},
										'Doc count': {
											field: 'value',
										},
									},
								},
							],
						},
					}}
				/>
			)

			const title = getByText('OK alert executions 2')
			assert(title !== null)
			const subtitle = getByText('pokus')
			assert(subtitle !== null)
			const badge1 = getByText('Profile Level')
			assert(badge1 !== null)
			const badge2 = getByText('Pdsasasdadsad')
			assert(badge2 !== null)
			const footer = getByText('© Data by Emplifi')
			assert(footer !== null)

			const textFromAxis1 = getByText('Mon 11')
			assert(textFromAxis1 !== null)
			const textFromAxis2 = getByText('Thu 21')
			assert(textFromAxis2 !== null)
			const textFromAxis3 = getByText('Mon 25')
			assert(textFromAxis3 !== null)
		})

	after(() => {
		delete global.window
		delete global.document
	})
})
