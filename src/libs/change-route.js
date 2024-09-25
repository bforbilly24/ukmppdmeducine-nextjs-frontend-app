function changeRoute(router, destination) {
	router.push(destination, { scroll: false });
	setTimeout(() => {
		router.push(destination, { scroll: true });
	}, 100);
}

export { changeRoute };