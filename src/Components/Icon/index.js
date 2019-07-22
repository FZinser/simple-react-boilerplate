const Icon = ({ name }) => (
	<svg className={`icon-${name}`}> 
		<use xlinkHref={`#${name}`} />
	</svg>
)

export default Icon