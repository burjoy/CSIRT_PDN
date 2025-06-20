//Import model db
const usersDB = {
    user: require('../../model/mode_user.json'),
    user_action: function (data) { this.user = data }
}

//Import lib buat aut, pakenya tergantung tipe db ny apa ntar
const fsPromises = require('fs').promises;
require('dotenv').config();
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');

//func auth
const authController = async (req, res) => {
    try {
        //Ambil username ama pass dari client
        const { username, password } = req.body;
        const foundUser = usersDB.user.find((name) => name.username === username);
        //Cek user udah terdaftar ato belom di db
        if(!foundUser) {
            return res.status(401).json({ message: `Username ${username} tidak ditemukan` });
        }
        //Kalo ketemu lanjut cek pass & pengiriman token
        try {
            const pass = await bcrypt.compare(password, foundUser.password);
            if(!pass) {
                return res.status(401).json({ message: `Password salah` });
            }
            const roles = Object.values(foundUser.role);
            //Session or token accecss for JWT (pengiriman token)
            const accessToken = jwt.sign(
                { username: foundUser.username,
                    role: roles
                }, 
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '5s'},
            );

            const refreshToken = jwt.sign(
                { username: foundUser.username }, 
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: '10s'},
            );

            const otherUser = usersDB.user.filter((name) => name.username !== username);
            const currentUser = { ...foundUser, refreshToken };
            usersDB.user_action([...otherUser, currentUser]);
            await fsPromises.writeFile
            (
                path.join(__dirname, '../../model/mode_user.json'), 
                JSON.stringify(usersDB.user)
            );

            res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 60 * 60 * 1000 });
            res.status(200).json({ roles, accessToken });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Password tidak berhasil di compare" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { authController };