const { MongoClient } = require("mongodb");

const connectDB = async () => {
	try {
		// eslint-disable-next-line no-undef
		const conn = await new MongoClient(process.env.MONGODB_URI).connect();
		console.log(`MongoDB connected: ${conn.options.srvHost}`);
		return conn;
	} catch (err) {
		console.error(err);
		// eslint-disable-next-line no-undef
		process.exit(1);
	}
};

module.exports = connectDB;
