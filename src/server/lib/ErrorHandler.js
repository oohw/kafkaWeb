"use strict";

module.exports = (req, res) => {
	return (error) => {
		let err = {
			status: 500,
			error: "An unknown error occured."
		};

		switch(error.kind){
			case "ObjectId":
				err.status = 400;
				err.error = "Invalid ID passed."
				break;
		};

		res.status(err.status)
			.send(err);
	}
};
