const mockResponse = {
	data: {
		results: [
			{
				name: {
					first: "Nhan",
					last: "Phan",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/4.jpg",
				},
				login: {
					username: "nhanphan1993",
				},
			},
		],
	},
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
