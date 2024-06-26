import React, { useMemo } from 'react'
import { prejson } from '../../../dist/embedding'
import {
	fetchWidgetData,
	fetchDataAllRequests,
	fetchBoardFields,
} from '../functions/widget-config'
import WidgetVision from './widget-vision'
import { useQuery } from '@tanstack/react-query'
import { number, string, object, array, func } from 'prop-types'
import { Box, CircularProgress } from '@mui/material'
import { previousSuite } from '../functions/prejson-suite'
import { BOARD_WIDGET_FIELD_TYPE_TO_PREJSON_TYPE } from '../constants/prejson-type'
import {
	OMNI_STUDIO_FETCHING_WIDGET_ERROR,
	PUBLIC_API_DATA_FETCHING_ERROR,
} from '../constants/api-messages'
const PreJSONType = prejson.PreJSONType
const PreJSONContext = prejson.PreJSONContext
/**
 * @param {number} boardID Board ID.
 * @param {number} widgetID Widget ID.
 * @param {object} style JSON object of CSS <Box> styling.
 * @param {string} className Name of the styling class.
 * @param {array} params Array of preJSON objects for expanding.
 * @param {number} width Width of component.
 * @param {number} height Height of component.
 * @param {func} tokenFunc Function that returns object with tokens (these tokens are ussed instead of .env variables).
 *
 * @returns {React.ReactElement} Widget component.
 */
const Widget = (props) => {
	const {
		boardID,
		widgetID,
		params,
		className,
		style,
		width,
		height,
		tokenFunc,
	} = props
	const parsedParams = useMemo(() => {
		if (!Array.isArray(params)) {
			return {}
		}

		const result = Object.fromEntries(
			params.map(({ value, name }) => [name, value])
		)

		return result
	}, [params])

	const { data: fieldsToDeclare, isLoading: areFieldsLoading } = useQuery({
		queryKey: ['fieldsToDeclare', boardID],
		queryFn: async () => await fetchBoardFields(boardID, tokenFunc),
	})

	const context = useMemo(() => {
		const preJsonContext = new PreJSONContext().declare(
			'data',
			PreJSONType.Object,
			null
		)

		if (fieldsToDeclare && !areFieldsLoading) {
			fieldsToDeclare.forEach((field) => {
				const { name, type } = field
				preJsonContext.declare(
					name,
					BOARD_WIDGET_FIELD_TYPE_TO_PREJSON_TYPE[type],
					null
				)
			})
		}
		return preJsonContext.addModifier(previousSuite)
	}, [fieldsToDeclare, areFieldsLoading])

	const { data: widgetData, isLoading: isWidgetDataLoading } = useQuery({
		queryKey: ['widget', boardID, widgetID],
		queryFn: async () => await fetchWidgetData(boardID, widgetID, tokenFunc),
	})

	const requestsNotExpanded = useMemo(() => {
		if (!isWidgetDataLoading && widgetData?.requests) {
			return context.parse(widgetData.requests)
		}
	}, [widgetData, context, isWidgetDataLoading])
	const { expandedRequests, errorExpandedConfig } = useMemo(() => {
		if (widgetData === null) {
			return {
				expandedRequests: null,
				errorExpandedConfig: OMNI_STUDIO_FETCHING_WIDGET_ERROR,
			}
		}
		if (widgetData === 'Not found') {
			return {
				expandedRequests: null,
				errorExpandedConfig: `Widget ${widgetID} not found on board ${boardID}!`,
			}
		}
		if (!isWidgetDataLoading && widgetData && widgetData.requests) {
			if (!requestsNotExpanded.isValid) {
				return {
					expandedRequests: null,
					errorExpandedConfig:
						'Data request expanded config PreJSON is not valid.',
				}
			}

			const undefinedParams = requestsNotExpanded.getUndefinedParameters()
			const areAllKeysInserted = undefinedParams.every(
				(key) => key in parsedParams
			)
			if (!areAllKeysInserted) {
				return {
					expandedRequests: null,
					errorExpandedConfig:
						'Error - you must specify all PreJSON params that widget is depended on!',
				}
			}

			return {
				expandedRequests: requestsNotExpanded.expand(parsedParams).toJSON(),
				errorExpandedConfig: null,
			}
		}
		return { expandedRequests: null, errorExpandedConfig: null }
	}, [
		widgetData,
		parsedParams,
		requestsNotExpanded,
		isWidgetDataLoading,
		boardID,
		widgetID,
	])

	const { data, isLoading } = useQuery({
		queryKey: ['data', boardID, widgetID, expandedRequests],
		queryFn: async () =>
			await fetchDataAllRequests(expandedRequests, tokenFunc),
		enabled: !!widgetData && !!widgetData.requests && !!expandedRequests,
	})

	const { prejson, errorVisionConfig } = useMemo(() => {
		if (
			!isWidgetDataLoading &&
			!isLoading &&
			widgetData &&
			widgetData !== 'Not found' &&
			data
		) {
			context.setParameterValue('data', data)
			if (!context.parse(widgetData.config).isValid) {
				return { prejson: null, errorVisionConfig: 'PreJSON is not valid' }
			}

			return {
				prejson: context.parse(widgetData.config).expand(parsedParams).toJSON(),
				errorVisionConfig: null,
			}
		}

		return {
			prejson: null,
			errorVisionConfig: PUBLIC_API_DATA_FETCHING_ERROR,
		}
	}, [widgetData, parsedParams, data, context, isLoading, isWidgetDataLoading])
	if (isWidgetDataLoading || isLoading) {
		return (
			<Box
				height={height || '100%'}
				width={width}
				style={style}
				justifyContent='center'
				display='flex'
				alignItems='center'
			>
				<CircularProgress />
			</Box>
		)
	} else if (errorVisionConfig !== null || errorExpandedConfig !== null) {
		return (
			<Box
				height={height || '100%'}
				width={width}
				style={style}
				justifyContent='center'
				display='flex'
				alignItems='center'
			>
				<h1>{errorExpandedConfig || errorVisionConfig}</h1>
			</Box>
		)
	} else {
		return (
			<Box
				height={height || '100%'}
				width={width}
				className={className}
				style={style}
				display='flex'
				flexDirection='column'
				overflow='clip'
			>
				{(() => {
					switch (widgetData.type) {
						case 'vision':
							return (
								<WidgetVision
									{...props}
									data={data}
									prejson={prejson}
									dataRequests={requestsNotExpanded}
									expandedDataRequests={expandedRequests}
								/>
							)
						default:
							return <h1>Unknown type of widget</h1>
					}
				})()}
			</Box>
		)
	}
}

Widget.propTypes = {
	boardID: number.isRequired,
	widgetID: number.isRequired,
	params: array,
	height: number,
	width: number,
	className: string,
	style: object,
	tokenFunc: func,
}

export default Widget
