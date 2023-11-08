import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const Example = () => {
    return (
        <SyntaxHighlighter language="js">{`import wildCardSearch from 'utils/wildCardSearch'

const arr = [
	{
		name: 'Carolyn Perkins',
		email: 'eileen_h@hotmail.com',
	},
	{
		name: 'Terrance Moreno',
		email: 'terrance_moreno@infotech.io',
	},
	{
		name: 'Ruma Ali',
		email: 'syedrumaali266@gmail.com',
	},
	{
		name: 'Luke Cook',
		email: 'cookie_lukie@hotmail.com',
	},
]

const data = wildCardSearch(arr, 'Terran')

// output: [
//  {
// 		name: 'Terrance Moreno',
// 		email: 'terrance_moreno@infotech.io',
// 	},
// ]
`}</SyntaxHighlighter>
    )
}

export default Example
