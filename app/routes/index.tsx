import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/" as never)({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="text-9xl">Hello world!</div>
		</div>
	);
}
