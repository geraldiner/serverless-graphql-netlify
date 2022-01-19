const { RESTDataSource } = require("apollo-datasource-rest");

class AcnhAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://acnhapi.com/v1/";
	}

	async getSongById(id) {
		const res = await this.get(`songs/${id}`);
		let songObj = {
			id: res.id,
			name: res.name["name-USen"],
			musicUri: res.music_uri,
			imageUri: res.image_uri,
		};
		return songObj;
	}

	async getFishById(id) {
		const res = await this.get(`fish/${id}`);
		let fishObj = {
			id: res.id,
			name: res.name["name-USen"],
			shadowSize: res.shadow,
		};
		return fishObj;
	}
}

module.exports = AcnhAPI;
