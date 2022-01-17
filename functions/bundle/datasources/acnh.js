const { RESTDataSource } = require("apollo-datasource-rest");

class AcnhAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://acnhapi.com/v1/";
	}

	async getSong(id) {
		const res = await this.get(`songs/${id}`);
		let songObj = {
			id: res.id,
			songName: res.name["name-USen"],
			musicUri: res.music_uri,
			imageUri: res.image_uri,
		};
		return songObj;
	}
}

module.exports = AcnhAPI;
