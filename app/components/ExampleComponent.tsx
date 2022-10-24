type ComponentProps = {
	message: string
}

export default function ExampleComponent({ message }: ComponentProps) {
	return <h1>{message ? message : 'Default message.'}</h1>
}
