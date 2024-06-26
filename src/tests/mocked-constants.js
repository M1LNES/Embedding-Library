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

export const MOCKED_STACKED_BAR_CHART = {
	widgets: [
		{
			id: 25675,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 8,
				x: 0,
				y: 27,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "Most failing alerts - no limit",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision":{\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "treemap",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "nest",\n\t\t\t\t\t"fields": [\n\t\t\t\t\t\t"dim0"\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "treemap",\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"paddingInner": 1,\n\t\t\t\t\t"size": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"signal": "layout.width"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"signal": "layout.height"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t},\n\t\t{\n\t\t\t"name": "treemap-labels",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "filter",\n\t\t\t\t\t"predicate": "(datum.x1 - datum.x0) >= signal(\'labelThreshold\') && (datum.y1-datum.y0) > 15"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "treemap"\n\t\t}\n\t],\n\t"signals": [\n\t\t{\n\t\t\t"name": "labelThreshold",\n\t\t\t"value": {\n\t\t\t\t"expr": "signal(\'layout.width\') / 20"\n\t\t\t}\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "$index",\n\t\t\t\t"data": "treemap"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "sinebow"\n\t\t\t}\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Tiles",\n\t\t\t"source": {\n\t\t\t\t"data": "treemap"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Enum": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Value": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "x0"\n\t\t\t\t},\n\t\t\t\t"x2": {\n\t\t\t\t\t"field": "x1"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "y0"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"field": "y1"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "$index",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Captions",\n\t\t\t"source": {\n\t\t\t\t"data": "treemap-labels"\n\t\t\t},\n\t\t\t"tooltip": true,\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "x0"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "datum.y0 + (datum.y1 - datum.y0) / 2 - 3"\n\t\t\t\t},\n\t\t\t\t"align": "center",\n\t\t\t\t"width": {\n\t\t\t\t\t"expr": "datum.x1-datum.x0"\n\t\t\t\t},\n\t\t\t\t"overflow": "ellipsis",\n\t\t\t\t"fill": "#fff",\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"anchorY": "end",\n\t\t\t\t"fontWeight": "bold"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "treemap-labels"\n\t\t\t},\n\t\t\t"tooltip": true,\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "x0"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "datum.y0 + (datum.y1 - datum.y0) / 2 + 3"\n\t\t\t\t},\n\t\t\t\t"align": "center",\n\t\t\t\t"width": {\n\t\t\t\t\t"expr": "datum.x1-datum.x0"\n\t\t\t\t},\n\t\t\t\t"overflow": "ellipsis",\n\t\t\t\t"fill": "#fff",\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"format": "value"\n\t\t\t\t},\n\t\t\t\t"anchorY": "start"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T13:45:24.396Z',
			deleted_at: null,
			updated_at: '2023-08-28T08:56:22.111Z',
		},
		{
			id: 25749,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 8,
				x: 8,
				y: 27,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t\t"other": true,\n\t\t\t"group": {\n\t\t\t\t"limit": 5,\n\t\t\t\t"other": {\n\t\t\t\t\t"aggregation": "sum",\n\t\t\t\t},\n\t\t\t\t"sort": {\n\t\t\t\t\t"key": "value",\n\t\t\t\t\t"order": "desc",\n\t\t\t\t},\n\t\t\t\t\n\t\t\t},\n\t\t\t\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "Most failing alerts - TOP 5",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision":{\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t// "transform": [\n\t\t\t// \t{\n\t\t\t// \t\t"type": "aggregate",\n\t\t\t// \t\t"field": "value",\n\t\t\t// \t\t"fn": "sum",\n\t\t\t// \t\t"groupBy": "value"\n\t\t\t// \t}\n\t\t\t// ],\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "treemap",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "nest",\n\t\t\t\t\t"fields": [\n\t\t\t\t\t\t"dim0"\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "treemap",\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"paddingInner": 1,\n\t\t\t\t\t"size": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"signal": "layout.width"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"signal": "layout.height"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t},\n\t\t{\n\t\t\t"name": "treemap-labels",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "filter",\n\t\t\t\t\t"predicate": "(datum.x1 - datum.x0) >= signal(\'labelThreshold\') && (datum.y1-datum.y0) > 15"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "treemap"\n\t\t}\n\t],\n\t"signals": [\n\t\t{\n\t\t\t"name": "labelThreshold",\n\t\t\t"value": {\n\t\t\t\t"expr": "signal(\'layout.width\') / 20"\n\t\t\t}\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "$index",\n\t\t\t\t"data": "treemap"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "sinebow"\n\t\t\t}\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Tiles",\n\t\t\t"source": {\n\t\t\t\t"data": "treemap"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Enum": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Value": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "x0"\n\t\t\t\t},\n\t\t\t\t"x2": {\n\t\t\t\t\t"field": "x1"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "y0"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"field": "y1"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "$index",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Captions",\n\t\t\t"source": {\n\t\t\t\t"data": "treemap-labels"\n\t\t\t},\n\t\t\t"tooltip": true,\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "x0"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "datum.y0 + (datum.y1 - datum.y0) / 2 - 3"\n\t\t\t\t},\n\t\t\t\t"align": "center",\n\t\t\t\t"width": {\n\t\t\t\t\t"expr": "datum.x1-datum.x0"\n\t\t\t\t},\n\t\t\t\t"overflow": "ellipsis",\n\t\t\t\t"fill": "#fff",\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"anchorY": "end",\n\t\t\t\t"fontWeight": "bold"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "treemap-labels"\n\t\t\t},\n\t\t\t"tooltip": true,\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "x0"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "datum.y0 + (datum.y1 - datum.y0) / 2 + 3"\n\t\t\t\t},\n\t\t\t\t"align": "center",\n\t\t\t\t"width": {\n\t\t\t\t\t"expr": "datum.x1-datum.x0"\n\t\t\t\t},\n\t\t\t\t"overflow": "ellipsis",\n\t\t\t\t"fill": "#fff",\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"format": "value"\n\t\t\t\t},\n\t\t\t\t"anchorY": "start"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-28T07:25:29.799Z',
			deleted_at: null,
			updated_at: '2023-08-28T08:55:25.064Z',
		},
		{
			id: 25750,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 8,
				x: 0,
				y: 33,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "Most failing alerts - circual",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "stacked",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "filter",\n\t\t\t\t\t"predicate": "datum.value > 0"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "stack",\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t},\n\t\t{\n\t\t\t"name": "total",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "aggregate",\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"fn": "sum"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t}\n\t],\n\t"signals": [\n\t\t{\n\t\t\t"name": "centerX",\n\t\t\t"value": {\n\t\t\t\t"signal": "container.width",\n\t\t\t\t"mult": 0.5\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "centerY",\n\t\t\t"value": {\n\t\t\t\t"signal": "container.height",\n\t\t\t\t"mult": 0.5\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "size",\n\t\t\t"value": {\n\t\t\t\t"expr": "Math.min(signal(\'layout.width\'), signal(\'layout.height\'))"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "outerRadius",\n\t\t\t"value": {\n\t\t\t\t"signal": "size",\n\t\t\t\t"mult": 0.4\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "innerRadius",\n\t\t\t"value": {\n\t\t\t\t"signal": "size",\n\t\t\t\t"mult": 0.2\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "labelRadius",\n\t\t\t"value": {\n\t\t\t\t"signal": "size",\n\t\t\t\t"mult": 0.3\n\t\t\t}\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "phi",\n\t\t\t"domain": {\n\t\t\t\t"data": "stacked",\n\t\t\t\t"fields": [\n\t\t\t\t\t"value0",\n\t\t\t\t\t"value1"\n\t\t\t\t]\n\t\t\t},\n\t\t\t"range": [\n\t\t\t\t0,\n\t\t\t\t360\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "tableau10"\n\t\t\t}\n\t\t}\n\t],\n\t"legends": [\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"size": 200,\n\t\t\t"name": "Enum",\n\t\t\t"scale": "color",\n\t\t\t"encode:symbol": {\n\t\t\t\t"fill": {\n\t\t\t\t\t"scale": "color"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "arc",\n\t\t\t"name": "Sectors",\n\t\t\t"source": {\n\t\t\t\t"data": "stacked"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Enum": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "centerX"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"signal": "centerY"\n\t\t\t\t},\n\t\t\t\t"startAngle": {\n\t\t\t\t\t"field": "value0",\n\t\t\t\t\t"scale": "phi"\n\t\t\t\t},\n\t\t\t\t"endAngle": {\n\t\t\t\t\t"field": "value1",\n\t\t\t\t\t"scale": "phi"\n\t\t\t\t},\n\t\t\t\t"outerRadius": {\n\t\t\t\t\t"signal": "outerRadius"\n\t\t\t\t},\n\t\t\t\t"innerRadius": {\n\t\t\t\t\t"signal": "innerRadius"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Total value",\n\t\t\t"source": {\n\t\t\t\t"data": "total"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "centerX"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"signal": "centerY"\n\t\t\t\t},\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"format": "value"\n\t\t\t\t},\n\t\t\t\t"anchorX": "middle",\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"align": "center",\n\t\t\t\t"width": {\n\t\t\t\t\t"signal": "innerRadius",\n\t\t\t\t\t"mult": 1.7\n\t\t\t\t},\n\t\t\t\t"overflow": "ellipsis",\n\t\t\t\t"fontSize": {\n\t\t\t\t\t"signal": "innerRadius",\n\t\t\t\t\t"mult": 0.4\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Sector values",\n\t\t\t"source": {\n\t\t\t\t"data": "stacked"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "centerX"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"signal": "centerY"\n\t\t\t\t},\n\t\t\t\t"r": {\n\t\t\t\t\t"signal": "labelRadius"\n\t\t\t\t},\n\t\t\t\t"phi": {\n\t\t\t\t\t"field": "value0",\n\t\t\t\t\t"scale": "phi",\n\t\t\t\t\t"offset": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "phi",\n\t\t\t\t\t\t"offset": -90,\n\t\t\t\t\t\t"mult": 0.5\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"format": "value"\n\t\t\t\t},\n\t\t\t\t"anchorX": "middle",\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fill": "#fff",\n\t\t\t\t"overflow": "ellipsis"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-28T08:34:23.860Z',
			deleted_at: null,
			updated_at: '2023-08-28T08:56:31.635Z',
		},
		{
			id: 25751,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 8,
				x: 8,
				y: 33,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "Histogram of count of failing alerts",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "bins",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "bin",\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "aggregate",\n\t\t\t\t\t"field": "bin0",\n\t\t\t\t\t"groupBy": [\n\t\t\t\t\t\t"bin0",\n\t\t\t\t\t\t"bin1"\n\t\t\t\t\t],\n\t\t\t\t\t"fn": "count",\n\t\t\t\t\t"as": "count"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "x",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"data": "bins",\n\t\t\t\t"fields": [\n\t\t\t\t\t"bin0",\n\t\t\t\t\t"bin1"\n\t\t\t\t]\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "count",\n\t\t\t\t"data": "bins"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "x",\n\t\t\t"name": "Bottom axis"\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Count",\n\t\t\t"name": "Left axis"\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Bins",\n\t\t\t"source": {\n\t\t\t\t"data": "bins"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Count": {\n\t\t\t\t\t"field": "count"\n\t\t\t\t},\n\t\t\t\t"Bin": {\n\t\t\t\t\t"expr": "datum.bin0 + \\"–\\" + datum.bin1"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "bin0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"x2": {\n\t\t\t\t\t"field": "bin1",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "count",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": "#3f51b5"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-28T08:35:20.220Z',
			deleted_at: null,
			updated_at: '2023-08-28T08:56:38.690Z',
		},
		{
			id: 25753,
			board_id: 1684,
			type: 'markdown',
			layout: {
				h: 1,
				w: 10,
				x: 0,
				y: 39,
			},
			requests: null,
			config:
				'{\n\t"content": "# JUST Practice - alerts charts with some interval"\n}',
			created_at: '2023-08-28T09:41:36.826Z',
			deleted_at: null,
			updated_at: '2023-08-28T09:58:57.180Z',
		},
		{
			id: 25755,
			board_id: 1684,
			type: 'markdown',
			layout: {
				h: 2,
				w: 8,
				x: 8,
				y: 40,
			},
			requests: null,
			config:
				'{\n\t"content": " Error - this won\'t work. I was using range and i was filtering alerts in some ID interval - e.g. (0,20). But because alert_id is not number and it is string keyword, range comparision was not working well - e.g. if i set interval (10,30), it also returned IDs like 110, 113 etc. EDIT: it will be possible by using maps etc. in omni studio, i will try it if time remains - DONE somewhere below"\n}',
			created_at: '2023-08-28T11:48:22.866Z',
			deleted_at: null,
			updated_at: '2023-08-29T08:43:02.744Z',
		},
		{
			id: 25752,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 8,
				x: 0,
				y: 40,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"range": {\n\t\t\t\t"field": "alert_id",\n\t\t\t\t"range": {\n\t\t\t\t\t"gt": 10,\n\t\t\t\t\t"lt": 20,\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\n\t\t\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": ["fail"],\n\t\t\t},\n\t\t},\n\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "NOT WORKING CUZ OF ELASTIC",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0,\n\t\t\t"domainMax": 750\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "soul"\n\t\t\t}\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Alert ID",\n\t\t\t"name": "Enum",\n\t\t\t"ticks": -1\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Alert ID": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"expr": "scale(\'x\', datum[\'dim0\']) + 20"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "scale(\'y\', datum[\'value\']) - 10"\n\t\t\t\t},\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"anchorX": "middle"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-28T09:00:36.030Z',
			deleted_at: null,
			updated_at: '2023-08-28T11:54:00.313Z',
		},
		{
			id: 25756,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 16,
				x: 0,
				y: 43,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t\t\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header": {\n\t\t"title": "Filtered alerts with less than 50 fail executions",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "filter",\n\t\t\t\t\t\t"predicate": "datum.value < 50 ? datum.value : 0",\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "map",\n\t\t\t\t\t\t"as": "dim0",\n\t\t\t\t\t\t"expr": "\'ID:\' + datum.dim0",\n\t\t\t\t\t},\n\t\t\t\t],\n\t\t\t\t"source": "$input",\n\t\t\t},\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {},\n\t\t\t},\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "band",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": "width",\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": "height",\n\t\t\t\t"domainMin": 0,\n\t\t\t\t"domainMax": 750,\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "ordinal",\n\t\t\t\t"name": "color",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": {\n\t\t\t\t\t"palette": "soul",\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"scale": "x",\n\t\t\t\t"caption": "Alert ID",\n\t\t\t\t"name": "Enum",\n\t\t\t\t"ticks": -1,\n\t\t\t\t"encode:label": {},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"orientation": "left",\n\t\t\t\t"scale": "y",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"grid": true,\n\t\t\t},\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "rect",\n\t\t\t\t"name": "Columns",\n\t\t\t\t"source": {\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Alert ID": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x",\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y",\n\t\t\t\t\t},\n\t\t\t\t\t"width": {\n\t\t\t\t\t\t"band": 1,\n\t\t\t\t\t\t"scale": "x",\n\t\t\t\t\t},\n\t\t\t\t\t"y2": {\n\t\t\t\t\t\t"value": 0,\n\t\t\t\t\t\t"scale": "y",\n\t\t\t\t\t},\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "color",\n\t\t\t\t\t},\n\t\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"fillOpacity": 1,\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "text",\n\t\t\t\t"name": "Text",\n\t\t\t\t"source": {\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "scale(\'x\', datum[\'dim0\']) + 35",\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "scale(\'y\', datum[\'value\']) - 10",\n\t\t\t\t\t},\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t},\n}',
			created_at: '2023-08-28T11:54:53.298Z',
			deleted_at: null,
			updated_at: '2023-08-28T13:38:44.147Z',
		},
		{
			id: 25758,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 3,
				x: 13,
				y: 49,
			},
			requests: null,
			config:
				'{\n\t"type": "number",\n\t"name": "startInt",\n\t"label": "FROM",\n\t"defaultValue": 0,\n}',
			created_at: '2023-08-28T12:09:33.882Z',
			deleted_at: null,
			updated_at: '2023-08-28T12:16:23.239Z',
		},
		{
			id: 25759,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 3,
				x: 13,
				y: 50,
			},
			requests: null,
			config:
				'{\n\t"type": "number",\n\t"name": "toInt",\n\t"label": "TO",\n\t"defaultValue": 200,\n}',
			created_at: '2023-08-28T12:09:52.537Z',
			deleted_at: null,
			updated_at: '2023-08-28T12:16:34.401Z',
		},
		{
			id: 25757,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 7,
				w: 13,
				x: 0,
				y: 49,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t\t\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"title": "Fail executions in interval (FROM;TO)",\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "filter",\n\t\t\t\t\t"predicate": "datum.value >= ${number:startInt} && datum.value <= ${number:toInt} ? datum.value : 0"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "dim0",\n\t\t\t\t\t"expr": "\'ID:\' + datum.dim0"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0,\n\t\t\t"domainMax": 750\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": ${string:barva}\n\t\t\t}\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Alert ID",\n\t\t\t"name": "Enum",\n\t\t\t"ticks": -1,\n\t\t\t"encode:label": {}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Alert ID": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"expr": "scale(\'x\', datum[\'dim0\']) + 25"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "scale(\'y\', datum[\'value\']) - 10"\n\t\t\t\t},\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"anchorX": "middle"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-28T12:08:56.261Z',
			deleted_at: null,
			updated_at: '2023-08-30T05:53:13.473Z',
		},
		{
			id: 25761,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 3,
				x: 13,
				y: 51,
			},
			requests: null,
			config:
				'{\n\t"name": "barva",\n\t"type": "enum",\n\t"defaultValue": "soul",\n\t"label": "Chart color",\n\t"groupId": "main-bar-compare",\n\t"tags": [\n\t\t"toolbar",\n\t\t"background-transparent",\n\t],\n\t"props": {\n\t\t"encode:value": {\n\t\t\t"title": {\n\t\t\t\t"field": "title",\n\t\t\t},\n\t\t\t"subtitle": {\n\t\t\t\t"field": "subtitle",\n\t\t\t},\n\t\t},\n\t\t"encode:option": {\n\t\t\t"title": {\n\t\t\t\t"field": "title",\n\t\t\t},\n\t\t},\n\t\t"options": [\n\t\t\t{\n\t\t\t\t"value": "soul",\n\t\t\t\t"title": "Soul",\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "reds",\n\t\t\t\t"title": "Red",\n\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "dark2",\n\t\t\t\t"title": "Dark",\n\t\t\t},\n\t\t],\n\t},\n}',
			created_at: '2023-08-28T12:40:24.021Z',
			deleted_at: null,
			updated_at: '2023-08-28T12:49:56.891Z',
		},
		{
			id: 25763,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 4,
				x: 0,
				y: 56,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "cardinality",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "labels",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"title": "Label overview",\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"expr": "\'Label ID: \' + datum.dim0",\n\t\t\t\t\t"as": "dim0"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "vypis",\n\t\t\t\t\t"expr": "\'Assignated: \' + datum.value + \'x\'"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "number"\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"fontSize": 20,\n\t\t\t\t"fill": "#444",\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\\"layout.top\\") + 20 + datum.$index * 40"\n\t\t\t\t},\n\t\t\t\t"anchorY": "end",\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Captions",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"fontSize": 10,\n\t\t\t\t"fill": "#888",\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\\"layout.top\\")  + datum.$index * 40 + 30"\n\t\t\t\t},\n\t\t\t\t"anchorY": "start",\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "vypis"\n\t\t\t\t},\n\t\t\t\t"fontWeight": "bolder"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-28T12:59:01.332Z',
			deleted_at: null,
			updated_at: '2023-08-29T06:43:26.292Z',
		},
		{
			id: 25823,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 12,
				x: 4,
				y: 56,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "labels",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header": {\n\t\t"title": "Executions of alerts assigned to specified label",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "slice",\n\t\t\t\t\t\t"start": 0,\n\t\t\t\t\t\t"end": 5,\n\t\t\t\t\t},\n\t\t\t\t],\n\t\t\t\t"source": "$input",\n\t\t\t},\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {},\n\t\t\t},\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "band",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": "width",\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": "height",\n\t\t\t\t"domainMin": 0,\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "ordinal",\n\t\t\t\t"name": "color",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": {\n\t\t\t\t\t"palette": "set3",\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"scale": "x",\n\t\t\t\t"caption": "Alert ID",\n\t\t\t\t"name": "Enum",\n\t\t\t\t"ticks": -1,\n\t\t\t},\n\t\t\t{\n\t\t\t\t"orientation": "left",\n\t\t\t\t"scale": "y",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"grid": true,\n\t\t\t},\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "rect",\n\t\t\t\t"name": "Columns",\n\t\t\t\t"source": {\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Alert ID": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x",\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y",\n\t\t\t\t\t},\n\t\t\t\t\t"width": {\n\t\t\t\t\t\t"band": 1,\n\t\t\t\t\t\t"scale": "x",\n\t\t\t\t\t},\n\t\t\t\t\t"y2": {\n\t\t\t\t\t\t"value": 0,\n\t\t\t\t\t\t"scale": "y",\n\t\t\t\t\t},\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "color",\n\t\t\t\t\t},\n\t\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"fillOpacity": 1,\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t},\n}',
			created_at: '2023-08-28T13:42:08.214Z',
			deleted_at: null,
			updated_at: '2023-08-28T13:52:35.938Z',
		},
		{
			id: 25824,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 8,
				w: 16,
				x: 0,
				y: 62,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "Using signal - green bars = smaller than the signal value",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"signals": [\n\t\t{\n\t\t\t"name": "T",\n\t\t\t"value": 150,\n\t\t},\n\t\t\t\t{\n\t\t\t"name": "tpos",\n\t\t\t"value": -1\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0,\n\t\t\t"domainMax": 750\n\t\t},\n\t\t// {\n\t\t// \t"type": "ordinal",\n\t\t// \t"name": "color",\n\t\t// \t"domain": {\n\t\t// \t\t"field": "dim0",\n\t\t// \t\t"data": "root"\n\t\t// \t},\n\t\t// \t"range": {\n\t\t// \t\t"palette": "soul"\n\t\t// \t}\n\t\t// }\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t{\n\t\t\t\t\t"signal": "T",\n\t\t\t\t}\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#8bc34a",\n\t\t\t\t"#55f"\n\t\t\t]\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Alert ID",\n\t\t\t"name": "Enum",\n\t\t\t"ticks": -1\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Alert ID": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"expr": "scale(\'x\', datum[\'dim0\']) + 20"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "scale(\'y\', datum[\'value\']) - 10"\n\t\t\t\t},\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"anchorX": "middle"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "rule",\n\t\t\t"encode": {\n\t\t\t\t"length": {\n\t\t\t\t\t"signal": "layout.width"\n\t\t\t\t},\n\t\t\t\t"orientation": "horizontal",\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"scale": "y",\n\t\t\t\t\t"value": 0\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "rule",\n\t\t\t"encode": {\n\t\t\t\t"length": {\n\t\t\t\t\t"signal": "layout.width"\n\t\t\t\t},\n\t\t\t\t"orientation": "horizontal",\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"scale": "y",\n\t\t\t\t\t"signal": "T"\n\t\t\t\t},\n\t\t\t\t"stroke": "#55f"\n\t\t\t}\n\t\t},\n\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"on": [\n\t\t\t\t{\n\t\t\t\t\t"event": "mousemove",\n\t\t\t\t\t"update": {\n\t\t\t\t\t\t"signal": "tpos",\n\t\t\t\t\t\t"value": {\n\t\t\t\t\t\t\t"expr": "event.ay"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"event": "mouseout",\n\t\t\t\t\t"update": {\n\t\t\t\t\t\t"signal": "tpos",\n\t\t\t\t\t\t"value": -1\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"event": "click",\n\t\t\t\t\t"update": {\n\t\t\t\t\t\t"signal": "T",\n\t\t\t\t\t\t"value": {\n\t\t\t\t\t\t\t"expr": "invert(\'y\', event.ay)"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t],\n\t\t\t"interactive": "all",\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"signal": "layout.top"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"signal": "layout.width"\n\t\t\t\t},\n\t\t\t\t"height": {\n\t\t\t\t\t"signal": "layout.height"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "rule",\n\t\t\t"encode": {\n\t\t\t\t"length": {\n\t\t\t\t\t"signal": "layout.width"\n\t\t\t\t},\n\t\t\t\t"orientation": "horizontal",\n\t\t\t\t"x": {\n\t\t\t\t\t"signal": "layout.left"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"signal": "tpos"\n\t\t\t\t},\n\t\t\t\t"stroke": "#55f",\n\t\t\t\t"strokeDasharray": 3\n\t\t\t}\n\t\t},\n\t\t\n\t]\n}\n}',
			created_at: '2023-08-28T14:12:35.520Z',
			deleted_at: null,
			updated_at: '2023-08-29T06:43:38.732Z',
		},
		{
			id: 25878,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 70,
			},
			requests: null,
			config:
				'{\n\t"type": "number",\n\t"name": "alertFROM",\n\t"label": "FROM",\n\t"defaultValue": 20,\n}',
			created_at: '2023-08-29T06:52:19.862Z',
			deleted_at: null,
			updated_at: '2023-08-29T06:53:03.116Z',
		},
		{
			id: 25879,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 71,
			},
			requests: null,
			config:
				'{\n\t"type": "number",\n\t"name": "alertTO",\n\t"label": "TO",\n\t"defaultValue": 40,\n}',
			created_at: '2023-08-29T06:52:38.813Z',
			deleted_at: null,
			updated_at: '2023-08-29T06:53:13.425Z',
		},
		{
			id: 25877,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 8,
				w: 11,
				x: 0,
				y: 70,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t\t\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"title": `1st column alerts with ID <${number:alertFROM}:${number:alertTO}>, 2nd column rest of the alerts`,\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "map",\n\t\t\t\t\t\t"as": "dim0",\n\t\t\t\t\t\t"expr": "datum.dim0 <= ${number:alertTO} && datum.dim0 >= ${number:alertFROM}? \'In the interval\' : \'Outside the interval\'",\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "aggregate",\n\t\t\t\t\t\t"fn": "sum",\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"groupBy": "dim0",\n\t\t\t\t\t},\n\t\t\t\t],\n\t\t\t\t"source": "$input",\n\t\t\t},\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {},\n\t\t\t},\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "band",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": "width",\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"range": "height",\n\t\t\t\t"domainMin": 0,\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "ordinal",\n\t\t\t\t"name": "color",\n\t\t\t\t// "domain": {\n\t\t\t\t// \t"field": "dim0",\n\t\t\t\t// \t"data": "root",\n\t\t\t\t// },\n\t\t\t\t// "range": {\n\t\t\t\t// \t"palette": "soul",\n\t\t\t\t// },\n\t\t\t\t"domain": [\n\t\t\t\t\t"Outside the interval",\n\t\t\t\t\t"In the interval",\n\t\t\t\t],\n\t\t\t\t"range": [\n\t\t\t\t\t"${string:intCol}",\n\t\t\t\t\t"${string:outCol}",\n\t\t\t\t],\n\t\t\t},\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"scale": "x",\n\t\t\t\t"caption": "Intervals",\n\t\t\t\t"name": "Enum",\n\t\t\t\t"ticks": -1,\n\t\t\t},\n\t\t\t{\n\t\t\t\t"orientation": "left",\n\t\t\t\t"scale": "y",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"grid": true,\n\t\t\t},\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "rect",\n\t\t\t\t"name": "Columns",\n\t\t\t\t"source": {\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Alert ID": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x",\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y",\n\t\t\t\t\t},\n\t\t\t\t\t"width": {\n\t\t\t\t\t\t"band": 1,\n\t\t\t\t\t\t"scale": "x",\n\t\t\t\t\t},\n\t\t\t\t\t"y2": {\n\t\t\t\t\t\t"value": 0,\n\t\t\t\t\t\t"scale": "y",\n\t\t\t\t\t},\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "color",\n\t\t\t\t\t},\n\t\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t\t"radius": 8,\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"fillOpacity": 1,\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "text",\n\t\t\t\t"name": "Text",\n\t\t\t\t"source": {\n\t\t\t\t\t"data": "root",\n\t\t\t\t},\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "scale(\'x\', datum[\'dim0\']) + 120",\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "scale(\'y\', datum[\'value\'])",\n\t\t\t\t\t},\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t},\n}',
			created_at: '2023-08-29T06:45:31.007Z',
			deleted_at: null,
			updated_at: '2023-08-29T08:46:06.519Z',
		},
		{
			id: 25899,
			board_id: 1684,
			type: 'markdown',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 73,
			},
			requests: null,
			config: '{\n\t"content": "* Color setter for columns"\n}',
			created_at: '2023-08-29T08:35:44.800Z',
			deleted_at: null,
			updated_at: '2023-08-29T08:35:52.157Z',
		},
		{
			id: 25900,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 74,
			},
			requests: null,
			config:
				'{\n\t"name": "intCol",\n\t"type": "enum",\n\t"defaultValue": "red",\n\t"label": "Interval Column color",\n\t"props": {\n\t\t"options": [\n\t\t\t{\n\t\t\t\t"value": "red",\n\t\t\t\t"title": "red"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "green",\n\t\t\t\t"title": "green"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "orange",\n\t\t\t\t"title": "orange"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "purple",\n\t\t\t\t"title": "purple"\n\t\t\t},\n\t\t]\n\t}\n}',
			created_at: '2023-08-29T08:37:30.271Z',
			deleted_at: null,
			updated_at: '2023-08-29T08:37:45.174Z',
		},
		{
			id: 25901,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 75,
			},
			requests: null,
			config:
				'{\n\t"name": "outCol",\n\t"type": "enum",\n\t"defaultValue": "gray",\n\t"label": "Outside Interval Column color",\n\t"props": {\n\t\t"options": [\n\t\t\t{\n\t\t\t\t"value": "gray",\n\t\t\t\t"title": "gray"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "gold",\n\t\t\t\t"title": "gold"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "aqua",\n\t\t\t\t"title": "aqua"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"value": "black",\n\t\t\t\t"title": "black"\n\t\t\t},\n\t\t]\n\t}\n}',
			created_at: '2023-08-29T08:41:08.497Z',
			deleted_at: null,
			updated_at: '2023-08-29T08:42:04.365Z',
		},
		{
			id: 25617,
			board_id: 1684,
			type: 'markdown',
			layout: {
				h: 1,
				w: 6,
				x: 0,
				y: 0,
			},
			requests: null,
			config: '{\n\t"content": "# Summary of all alerts"\n}',
			created_at: '2023-08-25T10:26:48.989Z',
			deleted_at: null,
			updated_at: '2023-08-25T10:26:52.840Z',
		},
		{
			id: 25618,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 0,
			},
			requests: null,
			config:
				'{\n\t"type": "daterange",\n\t"name": "cas",\n\t"groupId": "main-bar",\n\t"tags": [\n\t\t"toolbar",\n\t\t"background-transparent",\n\t],\n\t"defaultValue": "P30D/now[sD]",\n}',
			created_at: '2023-08-25T10:27:01.071Z',
			deleted_at: null,
			updated_at: '2023-08-25T10:27:12.711Z',
		},
		{
			id: 25620,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 0,
				y: 1,
			},
			requests:
				'{\n    \t"path": "/0/omni-api/eslog",\n\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t// {\n\t\t\t// \t"type": "enum",\n\t\t\t// \t"field": "alert_id",\n\t\t\t// },\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t\t// "output": [\n\t\t\t// "data",\n\t\t\t// "raw",\n\t\t\t// "payload",\n\t\t\t// "query",\n\t\t\t// ],\n\t\t\t// "explain": true,\n\t\t},\n\t}\n}',
			config:
				'{\n\t"header":{\n\t\t\t"title": "Running alerts",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:31:19.658Z',
			deleted_at: null,
			updated_at: '2023-08-25T11:13:10.134Z',
		},
		{
			id: 25621,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 4,
				y: 1,
			},
			requests:
				'{\n    \t"path": "/0/omni-api/eslog",\n\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n            {\n            \t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail"\n\t\t\t\t],\n\t\t\t},\n            }\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t\t// "output": [\n\t\t\t// "data",\n\t\t\t// "raw",\n\t\t\t// "payload",\n\t\t\t// "query",\n\t\t\t// ],\n\t\t\t// "explain": true,\n\t\t},\n\t}\n}',
			config:
				'{\n\t"header":{\n\t\t\t"title": "Failing alerts",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:40:56.163Z',
			deleted_at: null,
			updated_at: '2023-08-25T10:53:40.586Z',
		},
		{
			id: 25624,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 8,
				y: 1,
			},
			requests:
				'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
			config:
				'{\n\t"header":{\n\t"title": "Fully failing",\n\t"subtitle": ${daterange:cas|humanize},\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "(dataset(\'all\')[index].value)-datum.value"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:58:08.132Z',
			deleted_at: null,
			updated_at: '2023-08-25T11:13:44.690Z',
		},
		{
			id: 25625,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 12,
				y: 1,
			},
			requests:
				'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
			config:
				'{\n\t"header":{\n\t"title": "Fully successful",\n\t"subtitle": ${daterange:cas|humanize},\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "(dataset(\'all\')[index].value)-datum.value"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T11:00:44.519Z',
			deleted_at: null,
			updated_at: '2023-08-25T11:01:34.931Z',
		},
		{
			id: 25626,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 8,
				y: 4,
			},
			requests:
				'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
			config:
				'{\n\t"header":{\n\t"title": "Fully failing rate",\n\t"subtitle": ${daterange:cas|humanize},\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "100 - ( datum.value / (dataset(\'all\')[index].value)) * 100"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"expr": "dataset(\'all\')[index].value === null || datum.value === 0 || datum.value === null ? \'black\' : (datum.value < 10 ? \'green\' : \'red\')",\n\t\t\t\t\t},\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T11:06:04.585Z',
			deleted_at: null,
			updated_at: '2023-08-25T12:14:54.349Z',
		},
		{
			id: 25630,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 0,
				y: 4,
			},
			requests:
				'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
			config:
				'{\n\t"header":{\n\t"title": "Successful alerts",\n\t"subtitle": ${daterange:cas|humanize},\n\t"tooltip": "An overview of alerts that were atleast once successful in the specified period",\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "( datum.value / (dataset(\'all\')[index].value)) * 100"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"expr": "dataset(\'onlyok\')[index].value === null || datum.value === 0 || datum.value === null ? \'black\' : (datum.value > 90 ? \'green\' : \'red\')",\n\t\t\t\t\t},\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T11:14:32.620Z',
			deleted_at: null,
			updated_at: '2023-08-29T10:36:38.106Z',
		},
		{
			id: 25627,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 4,
				y: 4,
			},
			requests:
				'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
			config:
				'{\n\t"header":{\n\t"title": "Failing alerts rate",\n\t"subtitle": ${daterange:cas|humanize},\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "( datum.value / (dataset(\'all\')[index].value)) * 100"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0,\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"expr": "dataset(\'onlyok\')[index].value === null || datum.value === 0 || datum.value === null ? \'black\' : (datum.value > 50? \'red\' : \'green\')",\n\t\t\t\t\t},\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T11:10:35.008Z',
			deleted_at: null,
			updated_at: '2023-08-25T12:15:30.174Z',
		},
		{
			id: 25623,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 12,
				y: 4,
			},
			requests:
				'[{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n},\n{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"fail",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}]\t\n',
			config:
				'{\n\t"header":{\n\t"title": "Fully success rate",\n\t"subtitle": ${daterange:cas|humanize},\n},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "all",\n\t\t\t"path": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "onlyok",\n\t\t\t"path": [\n\t\t\t\t1\n\t\t\t],\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "value",\n\t\t\t\t\t"expr": "100 - ( datum.value / (dataset(\'all\')[index].value)) * 100"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "value",\n\t\t\t"type": "expr",\n\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : (new Intl.NumberFormat(\\"en-US\\", {\\"notation\\": \\"compact\\",\\"style\\": \\"percent\\", maximumFractionDigits: 2})).format(value / 100)"\n\t\t},\n\t\t{\n\t\t\t"type": "expr",\n\t\t\t"name": "percentage",\n\t\t\t"expr": "isNaN(value) ? \'N/A\' : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\', maximumFractionDigits: 2, signDisplay: \'exceptZero\', style: \'percent\'})).format(value)"\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "threshold",\n\t\t\t"name": "color",\n\t\t\t"domain": [\n\t\t\t\t0\n\t\t\t],\n\t\t\t"range": [\n\t\t\t\t"#DA1E28",\n\t\t\t\t"#24A148"\n\t\t\t]\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "onlyok"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"expr": "dataset(\'all\')[index].value === null || datum.value === 0 || datum.value === null ? \'black\' : (datum.value > 50 ? \'green\' : \'red\')",\t\t\t\t\t\t\n\t\t\t\t\t},\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:50:28.336Z',
			deleted_at: null,
			updated_at: '2023-08-25T12:12:44.745Z',
		},
		{
			id: 25646,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 7,
				w: 16,
				x: 0,
				y: 13,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "Most failing alerts by its ID in specified period",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"field": "value",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0,\n\t\t\t"domainMax": 750\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "soul"\n\t\t\t}\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"caption": "Alert ID",\n\t\t\t"name": "Enum",\n\t\t\t"ticks": -1\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Doc count",\n\t\t\t"format": "y",\n\t\t\t"name": "Doc count",\n\t\t\t"grid": true\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Alert ID": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Doc count": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"value": 0,\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Text",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"x": {\n\t\t\t\t\t"expr": "scale(\'x\', datum[\'dim0\']) + 20"\n\t\t\t\t},\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "scale(\'y\', datum[\'value\']) - 10"\n\t\t\t\t},\n\t\t\t\t"text": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"anchorX": "middle"\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T12:56:38.608Z',
			deleted_at: null,
			updated_at: '2023-08-28T08:56:10.155Z',
		},
		{
			id: 25647,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 7,
				w: 16,
				x: 0,
				y: 20,
			},
			requests:
				'{\n    "path": "/0/omni-api/eslog",\n    "payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "doc_count",\n\t\t\t"field": "result",\n\t\t},\n\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t\t// "output": [\n\t\t// "data",\n\t\t// "raw",\n\t\t// "payload",\n\t\t// "query",\n\t\t// ],\n\t\t// "explain": true,\n\t},\n}\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "TOP 5 most failing alerts by its ID in specified period",\n\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision":{\n\t\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "slice",\n\t\t\t\t\t"start": 0,\n\t\t\t\t\t"end": 5\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {}\n\t\t\t}\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "band",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"data": "root",\n\t\t\t\t\t\n\t\t\t\t},\n\t\t\t\t"range": "width",\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"data": "root"\n\t\t\t\t},\n\t\t\t\t"range": "height",\n\t\t\t\t"domainMin": 0\n\t\t\t},\n\t\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": {\n\t\t\t\t"palette": "reds"\n\t\t\t}\n\t\t}\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"scale": "x",\n\t\t\t\t"caption": "Alert ID",\n\t\t\t\t"name": "Enum",\n\t\t\t\t"ticks": -1\n\t\t\t},\n\t\t\t{\n\t\t\t\t"orientation": "left",\n\t\t\t\t"scale": "y",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"grid": true\n\t\t\t}\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "rect",\n\t\t\t\t"name": "Columns",\n\t\t\t\t"source": {\n\t\t\t\t\t"data": "root"\n\t\t\t\t},\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Alert ID": {\n\t\t\t\t\t\t"field": "dim0"\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value"\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"width": {\n\t\t\t\t\t\t"band": 1,\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y2": {\n\t\t\t\t\t\t"value": 0,\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"fill": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "color"\n\t\t\t\t\t},\n\t\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}',
			created_at: '2023-08-25T13:15:53.695Z',
			deleted_at: null,
			updated_at: '2023-08-28T08:53:55.345Z',
		},
		{
			id: 25633,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 6,
				w: 16,
				x: 0,
				y: 7,
			},
			requests:
				'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t"filters": [\n\t\t{\n\t\t\t"date_range": {\n\t\t\t\t"field": "created_time",\n\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t},\n\t\t},\n\n\t\t\n\t\t{\n\t\t\t"term": {\n\t\t\t\t"field": "result",\n\t\t\t\t"values": [\n\t\t\t\t\t"ok",\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t},\n\t\t},\n\t],\n\t"target": [\n\t\t{\n\t\t\t"metric": "cardinality",\n\t\t\t"field": "alert_id",\n\t\t},\n\t],\n\t"dimensions": [\n\t\t{\n\t\t\t"type": "date_range",\n\t\t\t"field": "created_time",\n\t\t\t"aggregation": "day",\n\t\t},\n\t\t{\n\t\t\t"type": "term",\n\t\t\t"field": "result",\n\t\t},\n\t],\n\t"options": {\n\t\t"size": 100,\n\t\t"eslog_index": "omni-alert-log",\n\t\t"eslog_datasource": "es2",\n\t},\n},\n}',
			config:
				'{\n\t"header":{\n\t\t\t"title": "Stacked bar chart of failing/non-failing alerts per day"\n\t},\n\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "parse",\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"as": "datetime"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "$input"\n\t\t},\n\t\t{\n\t\t\t"name": "stacked",\n\t\t\t"format": "set",\n\t\t\t"transform": [\n\t\t\t\t{\n\t\t\t\t\t"type": "stack",\n\t\t\t\t\t"field": "value",\n\t\t\t\t\t"groupBy": [\n\t\t\t\t\t\t"dim0"\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"type": "map",\n\t\t\t\t\t"as": "sum",\n\t\t\t\t\t"expr": "(((+datum[\'$index\'] + 1) % 3 === 0)) && ((datum[\'dim1\'] === \'news\') || (datum[\'dim1\'] === \'blogs\') || (datum[\'dim1\'] === \'forums\')) ? datum[\'value1\'] ? new Intl.NumberFormat(\'en-US\', { notation: \\"compact\\" , compactDisplay: \\"short\\" }).format(datum[\'value1\']) : \'\' : \'\'"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"source": "root"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "y",\n\t\t\t"type": "number",\n\t\t\t"options": {\n\t\t\t\t"notation": "compact",\n\t\t\t\t"maximumFractionDigits": 1\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"name": "x",\n\t\t\t"type": "datetime",\n\t\t\t"options": {\n\t\t\t\t"day": "numeric",\n\t\t\t\t"month": "numeric",\n\t\t\t\t"year": "2-digit"\n\t\t\t}\n\t\t}\n\t],\n\t"scales": [\n\t\t{\n\t\t\t"type": "linear",\n\t\t\t"name": "y",\n\t\t\t"domain": {\n\t\t\t\t"data": "stacked",\n\t\t\t\t"fields": [\n\t\t\t\t\t"value1",\n\t\t\t\t\t"value0"\n\t\t\t\t]\n\t\t\t},\n\t\t\t"range": "height",\n\t\t\t"domainMin": 0\n\t\t},\n\t\t{\n\t\t\t"type": "band",\n\t\t\t"name": "x",\n\t\t\t"domain": {\n\t\t\t\t"field": "dim0",\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"range": "width"\n\t\t},\n\t\t{\n\t\t\t"type": "ordinal",\n\t\t\t"name": "color",\n\t\n\t\t\t\t"domain": [\n\t\t\t\t\t"ok",\n\t\t\t\t\t"fail",\n\t\t\t\t],\n\t\t\t\t"range": [\n\t\t\t\t\t"#1877F2",\n\t\t\t\t\t"#D73676",\n\t\t\t\t],\n\t\t}\n\t],\n\t"axes": [\n\t\t{\n\t\t\t"orientation": "bottom",\n\t\t\t"scale": "x",\n\t\t\t"format": "x",\n\t\t\t"size": 60,\n\t\t\t"name": "Date range",\n\t\t\t"ticks": -1,\n\t\t\t"encode:label": {\n\t\t\t\t"angle": -90,\n\t\t\t\t"anchorX": "end"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"orientation": "left",\n\t\t\t"scale": "y",\n\t\t\t"caption": "Executions count",\n\t\t\t"format": "y",\n\t\t\t"size": 60,\n\t\t\t"name": "Value",\n\t\t\t"grid": true,\n\t\t\t"encode:label": {}\n\t\t}\n\t],\n\t"legends": [\n\t\t{\n\t\t\t"orientation": "top",\n\t\t\t"size": 50,\n\t\t\t"name": "Enum",\n\t\t\t"scale": "color",\n\t\t\t"encode:symbol": {\n\t\t\t\t"fill": {\n\t\t\t\t\t"scale": "color"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "rect",\n\t\t\t"name": "Columns",\n\t\t\t"source": {\n\t\t\t\t"data": "stacked"\n\t\t\t},\n\t\t\t"tooltip": {\n\t\t\t\t"Date range": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"Enum": {\n\t\t\t\t\t"field": "dim1"\n\t\t\t\t},\n\t\t\t\t"Value": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t}\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t"y": {\n\t\t\t\t\t"field": "value0",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"y2": {\n\t\t\t\t\t"field": "value1",\n\t\t\t\t\t"scale": "y"\n\t\t\t\t},\n\t\t\t\t"x": {\n\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"width": {\n\t\t\t\t\t"band": 1,\n\t\t\t\t\t"scale": "x"\n\t\t\t\t},\n\t\t\t\t"fill": {\n\t\t\t\t\t"field": "dim1",\n\t\t\t\t\t"scale": "color"\n\t\t\t\t},\n\t\t\t\t"fillOpacity": 0.9,\n\t\t\t\t":hover": {\n\t\t\t\t\t"fillOpacity": 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n},\n}',
			created_at: '2023-08-25T11:21:06.974Z',
			deleted_at: null,
			updated_at: '2024-02-19T12:38:46.739Z',
		},
	],
	data: {
		header: [
			{
				type: 'date_range',
				rows: [
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
					'2024-03-27',
				],
			},
			{
				type: 'term',
				rows: ['ok', 'fail'],
			},
			{
				type: 'target',
				rows: ['cardinality'],
			},
		],
		data: [
			[[32], [2]],
			[[35], [7]],
			[[33], [8]],
			[[32], [9]],
			[[32], [7]],
			[[32], [7]],
			[[32], [5]],
			[[32], [7]],
			[[33], [14]],
			[[33], [7]],
			[[33], [7]],
			[[33], [8]],
			[[34], [4]],
			[[34], [3]],
			[[34], [7]],
			[[36], [6]],
			[[33], [11]],
			[[32], [11]],
			[[33], [7]],
			[[33], [5]],
			[[33], [5]],
			[[33], [5]],
			[[33], [8]],
			[[32], [6]],
			[[32], [9]],
			[[33], [7]],
			[[33], [4]],
			[[33], [4]],
			[[33], [7]],
			[[36], [11]],
			[[33], [6]],
		],
	},
	data2: {
		header: [
			{
				type: 'term',
				rows: [
					'15',
					'12',
					'35',
					'48',
					'17',
					'19',
					'243',
					'47',
					'45',
					'32',
					'16',
					'18',
					'20',
					'24',
					'202',
					'248',
					'50',
					'52',
					'44',
					{
						other: {
							length: 3,
						},
					},
				],
			},
			{
				type: 'target',
				rows: ['doc_count'],
			},
		],
		data: [
			[719],
			[715],
			[364],
			[69],
			[63],
			[34],
			[28],
			[19],
			[17],
			[16],
			[14],
			[9],
			[7],
			[7],
			[4],
			[4],
			[4],
			[4],
			[2],
			[4],
		],
	},
	fields: [
		{
			id: 25758,
			label: 'FROM',
			name: 'startInt',
			type: 'number',
		},
		{
			id: 25759,
			label: 'TO',
			name: 'toInt',
			type: 'number',
		},
		{
			id: 25761,
			label: 'Chart color',
			name: 'barva',
			type: 'enum',
		},
		{
			id: 25878,
			label: 'FROM',
			name: 'alertFROM',
			type: 'number',
		},
		{
			id: 25879,
			label: 'TO',
			name: 'alertTO',
			type: 'number',
		},
		{
			id: 25900,
			label: 'Interval Column color',
			name: 'intCol',
			type: 'enum',
		},
		{
			id: 25901,
			label: 'Outside Interval Column color',
			name: 'outCol',
			type: 'enum',
		},
		{
			id: 25618,
			label: 'cas',
			name: 'cas',
			type: 'daterange',
		},
	],
}

export const MOCKED_NO_DEPENDENCIES = {
	fields: [],
	widgets: [
		{
			id: 31955,
			board_id: 2002,
			type: 'vision',
			layout: {
				h: 6,
				w: 16,
				x: 0,
				y: 0,
			},
			requests:
				'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": "now-7d/d",\n\t\t\t\t\t"to": "now/d",\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t11,\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
			config:
				'{\n\t"header": {"title": "OK alert executions",},\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"source": "$input",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "parse",\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"as": "datetime"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "time",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"range": "width"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"range": "height"\n\t\t\t}\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {}\n\t\t\t}\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"scale": "x",\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"caption": "Date range",\n\t\t\t\t"name": "Date range"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"scale": "y",\n\t\t\t\t"orientation": "left",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"grid": true\n\t\t\t}\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "line",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"stroke": "#3f51b5"\n\t\t\t\t},\n\t\t\t\t"name": "Line"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "point",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"glyph": "circle",\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"fill": "#3f51b5",\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"stroke": "#3f51b5",\n\t\t\t\t\t\t"strokeOpacity": 0.3,\n\t\t\t\t\t\t"strokeWidth": 10\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"name": "Datapoints",\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Date range": {\n\t\t\t\t\t\t"field": "dim0"\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}',
			created_at: '2023-10-16T13:33:06.837Z',
			deleted_at: null,
			updated_at: '2023-10-30T11:24:01.027Z',
		},
		{
			id: 32996,
			board_id: 2002,
			type: 'vision',
			layout: {
				h: 6,
				w: 16,
				x: 0,
				y: 7,
			},
			requests:
				'{\n\t"path": "/0/omni-api/eslog",\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": "now-7d/d",\n\t\t\t\t\t"to": "now/d",\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "alert_id",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t${number:cislo}\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t\t{\n\t\t\t\t"term": {\n\t\t\t\t\t"field": "result",\n\t\t\t\t\t"values": [\n\t\t\t\t\t\t"ok",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t},\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "doc_count",\n\t\t\t\t"field": "result",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t{\n\t\t\t\t"type": "date_range",\n\t\t\t\t"field": "created_time",\n\t\t\t\t"aggregation": "day",\n\t\t\t},\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t},\n\t},\n}',
			config:
				'{\n\t"header":{\n\t\t"title": "OK alert executions",\n\n\t\t"subtitle": "Franta",\n\t\t"tooltip": "The total number of users who are following selected pages over the selected date range",\n\t\t"badges": [\n\t\t\t{\n\t\t\t\t"title": "Profile Level",\n\t\t\t\t"tooltip": "Profile-level metrics take into account every post with any engagement during a selected date range, no matter the post\'s publishing date. The engagement data is aggregated by the day it happened, but not related to a specific post.",\n\t\t\t},\n\t\t],\n\t},\n\n\t"vision": {\n\t\t"data": [\n\t\t\t{\n\t\t\t\t"name": "root",\n\t\t\t\t"source": "$input",\n\t\t\t\t"format": "omni-full",\n\t\t\t\t"transform": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"type": "parse",\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"as": "datetime"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"scales": [\n\t\t\t{\n\t\t\t\t"type": "time",\n\t\t\t\t"name": "x",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "dim0"\n\t\t\t\t},\n\t\t\t\t"range": "width"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "linear",\n\t\t\t\t"name": "y",\n\t\t\t\t"domain": {\n\t\t\t\t\t"field": "value"\n\t\t\t\t},\n\t\t\t\t"range": "height"\n\t\t\t}\n\t\t],\n\t\t"formats": [\n\t\t\t{\n\t\t\t\t"name": "y",\n\t\t\t\t"type": "number",\n\t\t\t\t"options": {}\n\t\t\t}\n\t\t],\n\t\t"axes": [\n\t\t\t{\n\t\t\t\t"scale": "x",\n\t\t\t\t"orientation": "bottom",\n\t\t\t\t"caption": "Date range",\n\t\t\t\t"name": "Date range"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"scale": "y",\n\t\t\t\t"orientation": "left",\n\t\t\t\t"caption": "Doc count",\n\t\t\t\t"name": "Doc count",\n\t\t\t\t"format": "y",\n\t\t\t\t"grid": true\n\t\t\t}\n\t\t],\n\t\t"marks": [\n\t\t\t{\n\t\t\t\t"type": "line",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"stroke": "#3f51b5"\n\t\t\t\t},\n\t\t\t\t"name": "Line"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "point",\n\t\t\t\t"source": "root",\n\t\t\t\t"encode": {\n\t\t\t\t\t"glyph": "circle",\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"field": "dim0",\n\t\t\t\t\t\t"scale": "x"\n\t\t\t\t\t},\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"scale": "y"\n\t\t\t\t\t},\n\t\t\t\t\t"fill": "#3f51b5",\n\t\t\t\t\t":hover": {\n\t\t\t\t\t\t"stroke": "#3f51b5",\n\t\t\t\t\t\t"strokeOpacity": 0.3,\n\t\t\t\t\t\t"strokeWidth": 10\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t"name": "Datapoints",\n\t\t\t\t"tooltip": {\n\t\t\t\t\t"Date range": {\n\t\t\t\t\t\t"field": "dim0"\n\t\t\t\t\t},\n\t\t\t\t\t"Doc count": {\n\t\t\t\t\t\t"field": "value"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}\n}',
			created_at: '2023-10-20T08:28:38.726Z',
			deleted_at: null,
			updated_at: '2023-10-23T08:29:29.785Z',
		},
	],
	data: {
		header: [
			{
				type: 'date_range',
				rows: [
					'2024-03-21',
					'2024-03-22',
					'2024-03-23',
					'2024-03-24',
					'2024-03-25',
					'2024-03-26',
					'2024-03-27',
					'2024-03-28',
				],
			},
			{
				type: 'target',
				rows: ['doc_count'],
			},
		],
		data: [[24], [24], [24], [24], [24], [24], [24], [11]],
	},
}

export const MOCKED_INVALID_FORMAT = {
	widgets: [
		{
			id: 25618,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 0,
			},
			requests: null,
			config:
				'{\n\t"type": "daterange",\n\t"name": "cas",\n\t"groupId": "main-bar",\n\t"tags": [\n\t\t"toolbar",\n\t\t"background-transparent",\n\t],\n\t"defaultValue": "P30D/now[sD]",\n}',
			created_at: '2023-08-25T10:27:01.071Z',
			deleted_at: null,
			updated_at: '2023-08-25T10:27:12.711Z',
		},
		{
			id: 25620,
			board_id: 1684,
			type: 'vision',
			layout: {
				h: 3,
				w: 4,
				x: 0,
				y: 1,
			},
			requests:
				'\n    \t"path": "/0/omni-api/eslog",\n\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t// {\n\t\t\t// \t"type": "enum",\n\t\t\t// \t"field": "alert_id",\n\t\t\t// },\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t\t// "output": [\n\t\t\t// "data",\n\t\t\t// "raw",\n\t\t\t// "payload",\n\t\t\t// "query",\n\t\t\t// ],\n\t\t\t// "explain": true,\n\t\t},\n\t}\n}',
			config:
				'{\n\t"header":{\n\t\t\t"title": "Running alerts",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:31:19.658Z',
			deleted_at: null,
			updated_at: '2023-08-25T11:13:10.134Z',
		},
	],
	widgetsInvalidType: [
		{
			id: 25618,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 0,
			},
			requests: null,
			config:
				'{\n\t"type": "daterange",\n\t"name": "cas",\n\t"groupId": "main-bar",\n\t"tags": [\n\t\t"toolbar",\n\t\t"background-transparent",\n\t],\n\t"defaultValue": "P30D/now[sD]",\n}',
			created_at: '2023-08-25T10:27:01.071Z',
			deleted_at: null,
			updated_at: '2023-08-25T10:27:12.711Z',
		},
		{
			id: 25620,
			board_id: 1684,
			type: 'marvisionk',
			layout: {
				h: 3,
				w: 4,
				x: 0,
				y: 1,
			},
			requests:
				'{\n    \t"path": "/0/omni-api/eslog",\n\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t// {\n\t\t\t// \t"type": "enum",\n\t\t\t// \t"field": "alert_id",\n\t\t\t// },\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t\t// "output": [\n\t\t\t// "data",\n\t\t\t// "raw",\n\t\t\t// "payload",\n\t\t\t// "query",\n\t\t\t// ],\n\t\t\t// "explain": true,\n\t\t},\n\t}\n}',
			config:
				'{\n\t"header":{\n\t\t\t"title": "Running alerts",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:31:19.658Z',
			deleted_at: null,
			updated_at: '2023-08-25T11:13:10.134Z',
		},
	],
	widgetsInvalidConfig: [
		{
			id: 25618,
			board_id: 1684,
			type: 'field',
			layout: {
				h: 1,
				w: 4,
				x: 12,
				y: 0,
			},
			requests: null,
			config:
				'{\n\t"type": "daterange",\n\t"name": "cas",\n\t"groupId": "main-bar",\n\t"tags": [\n\t\t"toolbar",\n\t\t"background-transparent",\n\t],\n\t"defaultValue": "P30D/now[sD]",\n}',
			created_at: '2023-08-25T10:27:01.071Z',
			deleted_at: null,
			updated_at: '2023-08-25T10:27:12.711Z',
		},
		{
			id: 25620,
			board_id: 1684,
			type: 'mark',
			layout: {
				h: 3,
				w: 4,
				x: 0,
				y: 1,
			},
			requests:
				'{\n    \t"path": "/0/omni-api/eslog",\n\n\t"payload": {\n\t\t"filters": [\n\t\t\t{\n\t\t\t\t"date_range": {\n\t\t\t\t\t"field": "created_time",\n\t\t\t\t\t"from": ${daterange:cas|start},\n\t\t\t\t\t"to": ${daterange:cas|end},\n\t\t\t\t},\n\t\t\t},\n\n\t\t],\n\t\t"target": [\n\t\t\t{\n\t\t\t\t"metric": "cardinality",\n\t\t\t\t"field": "alert_id",\n\t\t\t},\n\t\t],\n\t\t"dimensions": [\n\t\t\t// {\n\t\t\t// \t"type": "enum",\n\t\t\t// \t"field": "alert_id",\n\t\t\t// },\n\t\t],\n\t\t"options": {\n\t\t\t"size": 100,\n\t\t\t"eslog_index": "omni-alert-log",\n\t\t\t"eslog_datasource": "es2",\n\t\t\t// "output": [\n\t\t\t// "data",\n\t\t\t// "raw",\n\t\t\t// "payload",\n\t\t\t// "query",\n\t\t\t// ],\n\t\t\t// "explain": true,\n\t\t},\n\t}\n}',
			config:
				'\t\t"title": "Running alerts",\n\t\t\t"subtitle": ${daterange:cas|humanize},\n\t},\n\t"vision": {\n\t"data": [\n\t\t{\n\t\t\t"name": "root",\n\t\t\t"format": "omni-full",\n\t\t\t"source": "$input"\n\t\t}\n\t],\n\t"formats": [\n\t\t{\n\t\t\t"name": "format",\n\t\t\t"type": "number"\n\t\t},\n\t\t\t{\n\t\t\t\t"name": "value",\n\t\t\t\t"type": "expr",\n\t\t\t\t"expr": "(isNaN(value) || value === null) ? \'N/A\' : ( value < 1000000 ? ((new Intl.NumberFormat(\'en-US\', {maximumFractionDigits: Math.max(Math.ceil(3-Math.log10(Math.max(Math.abs(value),1))),0)})).format(value)).replaceAll(\',\', \' \') : (new Intl.NumberFormat(\'en-US\', {notation: \'compact\',maximumFractionDigits: 2})).format(value))",\n\t\t\t},\n\t],\n\t"marks": [\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Values",\n\t\t\t"source": {\n\t\t\t\t"data": "root"\n\t\t\t},\n\t\t\t"encode": {\n\t\t\t\t\t"fontSize": 36,\n\t\t\t\t\t"fill": "#444",\n\t\t\t\t\t"text": {\n\t\t\t\t\t\t"field": "value",\n\t\t\t\t\t\t"format": "value",\n\t\t\t\t\t},\n\t\t\t\t\t"anchorY": "end",\n\t\t\t\t\t"fontWeight": "medium",\n\t\t\t\t\t"anchorX": "middle",\n\t\t\t\t\t"y": {\n\t\t\t\t\t\t"expr": "(signal(\'layout.top\') + signal(\'layout.height\') / 2 )",\n\t\t\t\t\t},\n\t\t\t\t\t"x": {\n\t\t\t\t\t\t"expr": "signal(\'container.width\') / 2",\n\t\t\t\t\t},\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"type": "text",\n\t\t\t"name": "Relative Change Text",\n\t\t\t"encode": {\n\t\t\t\t"text": `${daterange:cas|start|format("DD")|prepend("")} - ${daterange:cas|end|minus("second", 1)|format("DD")}`,\t\t\t\t"x": {\n\t\t\t\t\t"expr": "(signal(\'container.width\') / 2) - (signal(\'container.width\') > 300 ? 40 : 0)"\n\t\t\t\t},\n\t\t\t\t"anchorX": {\n\t\t\t\t\t"expr": "signal(\'container.width\') > 300 ? \'start\' : \'middle\'"\n\t\t\t\t},\n\t\t\t\t"anchorY": "middle",\n\t\t\t\t"fontSize": 11,\n\t\t\t\t"y": {\n\t\t\t\t\t"expr": "signal(\'layout.top\') +  ( signal(\'layout.height\') / 2 ) + (signal(\'container.width\') > 300 ? 30 : 50) "\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t]\n}\n}',
			created_at: '2023-08-25T10:31:19.658Z',
			deleted_at: null,
			updated_at: '2023-08-25T11:13:10.134Z',
		},
	],
}
