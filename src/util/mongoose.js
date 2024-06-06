

module.exports = {
    mutipleMongooseObject: function(mongoArray) {
        return mongoArray.map(mongo => mongo.toObject())
    },
    mongoToObject: function(mongo) {
        let mongoA = mongo?mongo.toObject() : mongo
        return mongoA;
    }
};

