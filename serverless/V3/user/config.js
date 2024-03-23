require('dotenv').config();
module.exports = {
    profile: process.env.PROFILE,
    table: process.env.TABLE,
    region: process.env.REGION,
    ssoprofile: process.env.SSOPROFILE
}