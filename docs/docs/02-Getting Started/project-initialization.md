---
title: Project Initialization
sidebar_position: 2
slug: /begin/initialization
hide_title: true
---

## Backend initialization

Create new project using Express.js. In express, require `routes` from `empli-embed` and use prefix `/api` while assigning these routes. Make sure they are assigned to `/api` path.

```javascript
const { routes } = require('empli-embed')
const app = express()

// rest of the code

app.use('/api', routes)
```

Now we've successfully assign routes that are being used by `<Widget/>` component for fetching data.

## Frontend initialization

### Importing components

On the client side, import one of the components by

```jsx
import WidgetVision from 'empli-embed'
```

or

```jsx
import { Widget, WidgetVision } from 'empli-embed'
```

### Setting tokens

`<Widget>` component requires valid tokens for embedding - `Omni Studio token` and `Public API token`. There are two options how to require these tokens.

#### Environment variables

First option is to set tokens into .env file or enviroment variables. This is the easier option. All you need to do is generate valid tokenS (e.g. via [Embdding Studio] (https://embedding-studio.vercel.app/)) and add them into .env file.

```.env title=".env"
ACCESS_TOKEN=4eYo9qFmZw2oRXtZnIyOHhUy3TlPLp2JbrsA1MRc7Fx        # Public API token
OMNI_API_TOKEN=ZnU7lNwYd1nCgVJFyO1qYdKJw9IaZVq5EUxYedRp93O      # Omni Studio token
```

#### Widget props

Second option is creating function that will return object with these tokens. E.g. in Embedding Studio, the tokens are taken from localstorage, so the function looks like

```jsx title="Creating object with tokens"
const getTokensFromLocalStorage = () => {
	return {
		OMNI_API_TOKEN: localStorage.getItem('omni-studio-api-access-token'),
		ACCESS_TOKEN: localStorage.getItem('public-api-access-token'),
	}
}
```

and after that, just pass this function into props of `<Widget>` component

```jsx title="Usage"
<Widget
    boardID={...}
    widgetID={...}
    // other props
    tokenFunc={getTokensFromLocalStorage}
/>
```

#### Default option

If `tokenFunc` is not defined, library will automatically load tokens from .env file.

## Executing app

After previous steps, now you should be able to start application and embed widgets from Omni Studio.
