const { DataTypes } = require("sequelize");
const { admin, user } = require("../constants/roles");
module.exports = sequelize => {
	sequelize.define(
		"User",
		{
			state: {
				type: DataTypes.BOOLEAN,
				defaultValue: true
			},
			role: {
				type: DataTypes.ENUM(admin, user),
				defaultValue: user
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validator: {
					isEmail: true
				},
				unique: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};
