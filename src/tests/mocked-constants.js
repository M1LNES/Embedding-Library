export const MOCKED_FIELDS = [
	{
		id: 25351,
		label: 'cas',
		name: 'cas',
		type: 'daterange',
	},
	{
		id: 25354,
		label: 'ID of alert',
		name: 'alertid',
		type: 'number',
	},
	{
		id: 25361,
		label: 'Aggregated by',
		name: 'dateAggregation',
		type: 'enum',
	},
]

export const MOCKED_WIDGETS = [
	{
		id: 25428,
		board_id: 1671,
		type: 'markdown',
		layout: {
			h: 1,
			w: 5,
			x: 0,
			y: 40,
		},
		requests: null,
		config: '{\n\t"content": "# Info about alert"\n}',
		created_at: '2023-08-23T09:05:01.000Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:49:14.524Z',
	},
	{
		id: 25430,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 3,
			w: 4,
			x: 4,
			y: 41,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok", \n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"header":{\n\t\t\t"title": "Success executions",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-23T09:10:39.906Z',
		deleted_at: null,
		updated_at: '2023-08-25T08:57:13.550Z',
	},
	{
		id: 25429,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 3,
			w: 4,
			x: 0,
			y: 41,
		},
		requests:
			'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok", "fail"\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
		config:
			'{\n\t"header":{\n\t"title": "Success rate [%]",\n\t"subtitle": ${daterange:cas|humanize},\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "( datum.value / (dataset(\'all\')[index].value)) * 100"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-23T09:07:10.800Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:48:55.811Z',
	},
	{
		id: 25431,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 3,
			w: 4,
			x: 4,
			y: 44,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"header":{\n\t\t\t"title": "Failed executions",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-23T09:13:05.220Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:48:49.712Z',
	},
	{
		id: 25436,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 6,
			w: 8,
			x: 8,
			y: 41,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\t\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "alert_id",\n\t\t\t\t"values": [\n\t\t\t\t\t${number:alertid},\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"ok",\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "enum",\n\t\t\t"field": "result",\n\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t},\n\t},\n}',
		config:
			'{\n\t"header":{\n\t\t\t"title": "OK/FAIL",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "stack",\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "phi",\n\t\t\t"domain": {\n\t\t\t\t"data": "root",\n\t\t\t\t"fields": [\n\t\t\t\t\t"value0",\n\t\t\t\t\t"value1"\n\t\t\t\t]\n\t\t\t},\n\t\t\t"range": [\n\t\t\t\t0,\n\t\t\t\t360\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "enum",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "pastel2"\n\t\t\t},\n\n\t\t\t// "domain": [\n\t\t\t// \t\t"ok",\n\t\t\t// \t\t"fail",\n\n\t\t\t// \t],\n\t\t\t// "range": [\n\t\t\t// \t\t"#1877F2",\n\t\t\t// \t\t"#D73676",\n\t\t\t\t// ],\n\t\t}\n\t],\n\t"legends": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"name": "Legend 2",\n\t\t\t"scale": "color",\n\t\t\t"encode": {},\n\t\t\t"encode:symbol": {\n\t\t\t\t"glyph": "star",\n\t\t\t\t"fill": {\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"size": 8\n\t\t\t}\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "group",\n\t\t\t"name": "Group",\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left",\n\t\t\t\t\t"offset": {\n\t\t\t\t\t\t"signal": "layout.width",\n\t\t\t\t\t\t"mult": 0.5\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"signal": "layout.top",\n\t\t\t\t\t"offset": {\n\t\t\t\t\t\t"signal": "layout.height",\n\t\t\t\t\t\t"mult": 0.5\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t"marks": [\n\t\t\t\t{\n\t\t\t\t\t"type": "arc",\n\t\t\t\t\t"name": "Arc",\n\t\t\t\t\t"source": {\n\t\t\t\t\t\t"data": "root"\n\t\t\t\t\t},\n\t\t\t\t\t"tooltip": true,\n\t\t\t\t\t"encode": {\n\t\t\t\t\t\t"x": 0,\n\t\t\t\t\t\t"y": 0,\n\t\t\t\t\t\t"innerRadius": 0,\n\t\t\t\t\t\t"outerRadius": {\n\t\t\t\t\t\t\t"signal": "layout.height",\n\t\t\t\t\t\t\t"mult": 0.4\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"startAngle": {\n\t\t\t\t\t\t\t"field": "value0",\n\t\t\t\t\t\t\t"scale": "phi"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"endAngle": {\n\t\t\t\t\t\t\t"field": "value1",\n\t\t\t\t\t\t\t"scale": "phi"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"fill": {\n\t\t\t\t\t\t\t"field": "enum",\n\t\t\t\t\t\t\t"scale": "color"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "text",\n\t\t\t\t\t"name": "Text",\n\t\t\t\t\t"source": {\n\t\t\t\t\t\t"data": "root"\n\t\t\t\t\t},\n\t\t\t\t\t"encode": {\n\t\t\t\t\t\t"x": {\n\t\t\t\t\t\t\t"field": "value0",\n\t\t\t\t\t\t\t"scale": "phi",\n\t\t\t\t\t\t\t"expr": "0.3 * signal(\'layout.height\') * Math.cos(math.rad(-90 + value + scale(\'phi\', datum.value) / 2))"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"y": {\n\t\t\t\t\t\t\t"field": "value0",\n\t\t\t\t\t\t\t"scale": "phi",\n\t\t\t\t\t\t\t"expr": "0.3 * signal(\'layout.height\') * Math.sin(math.rad(-90 + value + scale(\'phi\', datum.value) / 2))"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"text": {\n\t\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t\t"format": {\n\t\t\t\t\t\t\t\t"type": "number"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t\t"anchorY": "middle",\n\t\t\t\t\t\t"fill": "#fff",\n\t\t\t\t\t\t"stroke": "#000",\n\t\t\t\t\t\t"strokeWidth": 2,\n\t\t\t\t\t\t"strokeOpacity": 0.5\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-23T11:40:25.798Z',
		deleted_at: null,
		updated_at: '2023-08-28T08:54:48.944Z',
	},
	{
		id: 25388,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 6,
			w: 16,
			x: 0,
			y: 34,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "alert_id",\n\t\t\t\t"values": [\n\t\t\t\t\t${number:alertid},\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"ok",\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "date_range",\n\t\t\t"field": "created_time",\n\t\t\t"aggregation": "day",\n\t\t},\n\t\t{\n\t\t\t"type": "enum",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t},\n},\n}',
		config:
			'{\n\t"title": "Stacked Bar chart showing failing and non-failing executions",\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "parse",\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"as": "datetime"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "stacked",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "stack",\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"groupBy": [\n\t\t\t\t\t\t"dim0"\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "sum",\n\t\t\t\t\t"expr": "(((+datum[\'$index\'] + 1) % 3 === 0)) && ((datum[\'dim1\'] === \'news\') || (datum[\'dim1\'] === \'blogs\') || (datum[\'dim1\'] === \'forums\')) ? datum[\'value1\'] ? new Intl.NumberFormat(\'en-US\', { notation: \\"compact\\" , compactDisplay: \\"short\\" }).format(datum[\'value1\']) : \'\' : \'\'"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {\n\t\t\t\t"notation": "compact",\n\t\t\t\t"maximumFractionDigits": 1\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "x",\n\t\t\t"type": "datetime",\n\t\t\t"options": {\n\t\t\t\t"day": "numeric",\n\t\t\t\t"month": "numeric",\n\t\t\t\t"year": "2-digit"\n\t\t\t}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"data": "stacked",\n\t\t\t\t"fields": [\n\t\t\t\t\t"value1",\n\t\t\t\t\t"value0"\n\t\t\t\t]\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0\n\t\t},\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t// "field": "enum",\n\t\t\t\t"field": "dim1",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "pastel2"\n\t\t\t}\n\t\t\t\t// "domain": [\n\t\t\t\t// \t"ok",\n\t\t\t\t// \t"fail",\n\t\t\t\t// ],\n\t\t\t\t// "range": [\n\t\t\t\t// \t"#1877F2",\n\t\t\t\t// \t"#D73676",\n\t\t\t\t// ],\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"format": "x",\n\t\t\t"size": 60,\n\t\t\t"name": "Date range",\n\t\t\t"ticks": -1,\n\t\t\t"encode:label": {\n\t\t\t\t"angle": -90,\n\t\t\t\t"anchorX": "end"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Executions count",\n\t\t\t"format": "y",\n\t\t\t"size": 60,\n\t\t\t"name": "Value",\n\t\t\t"grid": true,\n\t\t\t"encode:label": {}\n\t\t}\n\t],\n\t"legends": [\n\t\t{\n\t\t\t"orientation": "top",\n\t\t\t"size": 50,\n\t\t\t"name": "Enum",\n\t\t\t"scale": "color",\n\t\t\t"encode:symbol": {\n\t\t\t\t"fill": {\n\t\t\t\t\t"scale": "color"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "stacked"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Date range": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Enum": {\n\t\t\t\t\t"field": "dim1"\n\t\t\t\t},\n\t\t\t\t"Value": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value0",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"field": "value1",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim1",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n},\n}',
		created_at: '2023-08-22T10:55:10.876Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:49:53.858Z',
	},
	{
		id: 25455,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 3,
			w: 4,
			x: 0,
			y: 44,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "alert_id",\n\t\t\t\t"values": [\n\t\t\t\t\t${number:alertid},\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "cardinality",\n\t\t\t"field": "labels",\n\t\t},\n\t],\n\t"dimensions": [],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t},\n}\n}',
		config:
			'{\n\t"header":{\n\t\t"title": "Labels count",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-23T15:00:43.494Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:48:46.028Z',
	},
	{
		id: 25350,
		board_id: 1671,
		type: 'markdown',
		layout: {
			h: 1,
			w: 5,
			x: 0,
			y: 0,
		},
		requests: null,
		config: '{\n\t"content": "# Alert charts by its ID"\n}',
		created_at: '2023-08-22T07:26:14.777Z',
		deleted_at: null,
		updated_at: '2023-08-22T07:59:51.552Z',
	},
	{
		id: 25351,
		board_id: 1671,
		type: 'field',
		layout: {
			h: 1,
			w: 5,
			x: 0,
			y: 1,
		},
		requests: null,
		config:
			'{\n\t"type": "daterange",\n\t"name": "cas",\n\t"groupId": "main-bar",\n\t"tags": [\n\t\t"toolbar",\n\t\t"background-transparent",\n\t],\n\t"defaultValue": "P30D/now[sD]",\n}',
		created_at: '2023-08-22T07:42:38.208Z',
		deleted_at: null,
		updated_at: '2023-08-22T07:49:26.173Z',
	},
	{
		id: 25354,
		board_id: 1671,
		type: 'field',
		layout: {
			h: 1,
			w: 5,
			x: 5,
			y: 1,
		},
		requests: null,
		config:
			'{\n\t"type": "number",\n\t"name": "alertid",\n\t"label": "ID of alert",\n\t"defaultValue": 25,\n}',
		created_at: '2023-08-22T07:56:14.361Z',
		deleted_at: null,
		updated_at: '2023-08-22T09:01:14.381Z',
	},
	{
		id: 25357,
		board_id: 1671,
		type: 'markdown',
		layout: {
			h: 1,
			w: 14,
			x: 0,
			y: 12,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"content": "# Bar Charts representing number of doc_counts each day"\n}',
		created_at: '2023-08-22T08:12:09.133Z',
		deleted_at: null,
		updated_at: '2023-08-22T08:12:29.255Z',
	},
	{
		id: 25358,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 7,
			w: 16,
			x: 0,
			y: 19,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"title": "Failing alert executions",\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "parse",\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"as": "datetime"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t},\n\t\t{\n\t\t\t"name": "x",\n\t\t\t"type": "datetime",\n\t\t\t"options": {\n\t\t\t\t"day": "numeric",\n\t\t\t\t"month": "short"\n\t\t\t}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "purple-red"\n\t\t\t}\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Date range",\n\t\t\t"format": "x",\n\t\t\t"name": "Date range",\n\t\t\t"ticks": -1,\n\t\t\t"encode:label": {\n\t\t\t\t"angle": -90,\n\t\t\t\t"anchorX": "end"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Date range": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-22T08:18:01.554Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:47:06.495Z',
	},
	{
		id: 25359,
		board_id: 1671,
		type: 'markdown',
		layout: {
			h: 1,
			w: 7,
			x: 0,
			y: 26,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config: '{\n\t"content": "# Charts with custom aggregation"\n}',
		created_at: '2023-08-22T08:43:38.075Z',
		deleted_at: null,
		updated_at: '2023-08-22T08:44:23.747Z',
	},
	{
		id: 25361,
		board_id: 1671,
		type: 'field',
		layout: {
			h: 1,
			w: 5,
			x: 7,
			y: 26,
		},
		requests: null,
		config:
			'{\n\t"name": "dateAggregation",\n\t"type": "enum",\n\t"visualization": "button",\n\t"tags": [\n\t\t"toolbar",\n\t],\n\t"label": "Aggregated by",\n\t"defaultValue": ${daterange:cas|bucketUnit},\n\t"mixpanel": {\n        "type": "aggregation",\n        "fieldName": "dateAggregation",\n        "itemName": "Aggregation",\n        "sendValues": true\n    },\n\t"props": {\n\t\t"options": [\n\t\t\t{\n\t\t\t\t"value": "day",\n\t\t\t\t"title": "Day"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "week",\n\t\t\t\t"title": "Week"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "month",\n\t\t\t\t"title": "Month"\n\t\t\t},\n\t\t]\n\t},\n\tisRequiredForExport: true\n}',
		created_at: '2023-08-22T08:53:19.547Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:47:14.286Z',
	},
	{
		id: 25360,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 6,
			w: 8,
			x: 0,
			y: 27,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": ${string:dateAggregation},\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"title": "OK executions",\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "parse",\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"as": "datetime"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "time",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height"\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"name": "Date range",\n\t\t\t"ticks": "${string:dateAggregation}",\n\t\t\t"encode:label": {\n\t\t\t\t"angle": -90,\n\t\t\t\t"anchorX": "end"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "line",\n\t\t\t"name": "Line",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"stroke": "#3f51b5"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "point",\n\t\t\t"name": "Datapoints",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Date range": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"glyph": "circle",\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": "#3f51b5",\n\t\t\t\t":hover": {\n\t\t\t\t\t"stroke": "#3f51b5",\n\t\t\t\t\t"strokeOpacity": 0.3,\n\t\t\t\t\t"strokeWidth": 10\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-22T08:50:13.613Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:49:23.190Z',
	},
	{
		id: 25362,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 6,
			w: 8,
			x: 8,
			y: 27,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": ${string:dateAggregation},\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"title": "Failed executions",\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "parse",\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"as": "datetime"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "time",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height"\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"name": "Date range",\n\t\t\t"ticks": "${string:dateAggregation}",\n\t\t\t"encode:label": {\n\t\t\t\t"angle": -90,\n\t\t\t\t"anchorX": "end"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "line",\n\t\t\t"name": "Line",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"stroke": "#3f51b5"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "point",\n\t\t\t"name": "Datapoints",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Date range": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"glyph": "circle",\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": "#3f51b5",\n\t\t\t\t":hover": {\n\t\t\t\t\t"stroke": "#3f51b5",\n\t\t\t\t\t"strokeOpacity": 0.3,\n\t\t\t\t\t"strokeWidth": 10\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
		created_at: '2023-08-22T09:02:30.517Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:49:30.810Z',
	},
	{
		id: 25387,
		board_id: 1671,
		type: 'markdown',
		layout: {
			h: 1,
			w: 6,
			x: 0,
			y: 33,
		},
		requests: null,
		config: '{\n\t"content": "# Stacked bar chart"\n}',
		created_at: '2023-08-22T10:50:57.256Z',
		deleted_at: null,
		updated_at: '2023-08-24T07:49:46.936Z',
	},
	{
		id: 25356,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 6,
			w: 16,
			x: 0,
			y: 13,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"header":{\n"title": "OK alert executions",\n\t},\n\t"vision": {\n\t\t\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "parse",\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"as": "datetime"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t},\n\t\t{\n\t\t\t"name": "x",\n\t\t\t"type": "datetime",\n\t\t\t"options": {\n\t\t\t\t"day": "numeric",\n\t\t\t\t"month": "short"\n\t\t\t}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "greens"\n\t\t\t}\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Date range",\n\t\t\t"format": "x",\n\t\t\t"name": "Date range",\n\t\t\t"ticks": -1,\n\t\t\t"encode:label": {\n\t\t\t\t"angle": -90,\n\t\t\t\t"anchorX": "end"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Date range": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n\t}\n',
		created_at: '2023-08-22T08:11:04.719Z',
		deleted_at: null,
		updated_at: '2023-11-20T15:40:53.057Z',
	},
	{
		id: 25353,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 5,
			w: 16,
			x: 0,
			y: 2,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\n\t"header":{\n\t"title": "OK alert executions ${data.header.length}",\n\t"subtitle": "pokus",\n\t"tooltip": "The total number of users who are following selected pages over the selected date range",\n\t\t"badges": [\n\t\t\t{\n\t\t\t\t"title": "Profile Level",\n\t\t\t\t"tooltip": "Profile-level metrics take into account every post with any engagement during a selected date range, no matter the post\'s publishing date. The engagement data is aggregated by the day it happened, but not related to a specific post.",\n\t\t\t},\n\t\t\t{\n\t\t\t\t"title": "Pdsasasdadsad",\n\t\t\t\t"tooltip": "mkegjbngkrsubnseghb",\n\t\t\t},\n\t\t],\n\t},\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"source": "$input",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "parse",\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"as": "datetime"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "time",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"range": "width"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"range": "height"\n\t\t\t}\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {}\n\t\t\t}\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"scale": "x",\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"caption": "Date range",\n\t\t\t\t"name": "Date range"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"scale": "y",\n\t\t\t\t"orientation": "left",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"grid": true\n\t\t\t}\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "line",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"stroke": "#3f51b5"\n\t\t\t\t},\n\t\t\t\t"name": "Line"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "point",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"glyph": "circle",\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"fill": "#3f51b5",\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"stroke": "#3f51b5",\n\t\t\t\t\t\t"strokeOpacity": 0.3,\n\t\t\t\t\t\t"strokeWidth": 10\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"name": "Datapoints",\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Date range": {\n\t\t\t\t\t\t"field": "dim0"\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}',
		created_at: '2023-08-22T07:50:08.558Z',
		deleted_at: null,
		updated_at: '2023-10-23T11:26:11.906Z',
	},
	{
		id: 25355,
		board_id: 1671,
		type: 'vision',
		layout: {
			h: 5,
			w: 16,
			x: 0,
			y: 7,
		},
		requests:
			'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:alertid},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
		config:
			'{\n\t"header":{\n\t"title": "Rozbil jsem to?",\n\t"subtitle": "pokus",\n\t\n\t},\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"source": "$input",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "parse",\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"as": "datetime"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "time",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"range": "width"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"range": "height"\n\t\t\t}\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {}\n\t\t\t}\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"scale": "x",\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"caption": "Date range",\n\t\t\t\t"name": "Date range"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"scale": "y",\n\t\t\t\t"orientation": "left",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"grid": true\n\t\t\t}\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "line",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"stroke": "#c62828"\n\t\t\t\t},\n\t\t\t\t"name": "Line"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "point",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"glyph": "circle",\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"fill": "#c62828",\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"stroke": "#c62828",\n\t\t\t\t\t\t"strokeOpacity": 0.3,\n\t\t\t\t\t\t"strokeWidth": 10\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"name": "Datapoints",\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Date range": {\n\t\t\t\t\t\t"field": "dim0"\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}',
		created_at: '2023-08-22T07:59:19.703Z',
		deleted_at: null,
		updated_at: '2023-10-23T12:20:31.424Z',
	},
]

export const MOCKED_EXPANDED_REQUEST = {
	path: '/0/omni-api/eslog',
	payload: {
		filters: [
			{
				date_range: {
					field: 'created_time',
					from: '2024-02-26T00:00:00.000+01:00',
					to: '2024-03-27T00:00:00.000+01:00',
				},
			},
			{
				term: {
					field: 'alert_id',
					values: [17],
				},
			},
			{
				term: {
					field: 'result',
					values: ['ok'],
				},
			},
		],
		target: [
			{
				metric: 'doc_count',
				field: 'result',
			},
		],
		dimensions: [],
		options: {
			size: 100,
			eslog_index: 'omni-alert-log',
			eslog_datasource: 'es2',
		},
	},
}

export const MOCKED_DATA = {
	header: [
		{
			type: 'target',
			rows: [
				{
					metric: 'doc_count',
				},
			],
		},
	],
	data: '[657]',
}

export const MOCKED_MULTIPLE_REQUESTS = [
	{
		filters: [
			{
				date_range: {
					field: 'created_time',
					from: '2024-02-26T00:00:00.000+01:00',
					to: '2024-03-27T00:00:00.000+01:00',
				},
			},
			{
				term: {
					field: 'alert_id',
					values: [17],
				},
			},
			{
				term: {
					field: 'result',
					values: ['ok', 'fail'],
				},
			},
		],
		target: [
			{
				metric: 'doc_count',
				field: 'result',
			},
		],
		dimensions: [],
		options: {
			size: 100,
			eslog_index: 'omni-alert-log',
			eslog_datasource: 'es2',
		},
	},
	{
		filters: [
			{
				date_range: {
					field: 'created_time',
					from: '2024-02-26T00:00:00.000+01:00',
					to: '2024-03-27T00:00:00.000+01:00',
				},
			},
			{
				term: {
					field: 'alert_id',
					values: [17],
				},
			},
			{
				term: {
					field: 'result',
					values: ['ok'],
				},
			},
		],
		target: [
			{
				metric: 'doc_count',
				field: 'result',
			},
		],
		dimensions: [],
		options: {
			size: 100,
			eslog_index: 'omni-alert-log',
			eslog_datasource: 'es2',
		},
	},
]

export const MOCKED_MULTIPLE_REQUESTS_DATA = [
	{
		header: [
			{
				type: 'target',
				rows: ['doc_count'],
			},
		],
		data: [720],
	},
	{
		header: [
			{
				type: 'target',
				rows: ['doc_count'],
			},
		],
		data: [657],
	},
]

export const MOCKED_PARAMS = [
	{
		value: 'P30D/now[sD]',
		name: 'cas',
		type: 'daterange',
	},
	{
		value: 35,
		name: 'alertid',
		type: 'number',
	},
]
