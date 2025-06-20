//Ambil model database
const usersDB = {
    user: require('../../model/mode_user.json'),
    user_action: function (data) { this.user = data }
}

//import buat r/w ke database, sesuaikan ama tipe database
const fsPromises = require('fs').promises;
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');

//func controller buat registrasi
const RegisterController = async (req, res) => {
    try {
        //ambil username ama pass dari request client
        const { username, password, email } = req.body;
        //Warning untuk cek apakah ada data yang kosong
        if(!username || !password || !email) {
            return res.status(400).json({ message: "Username, password, dan email harus diisi" });
        }
        const foundUser = usersDB.user.find((name) => name.username === username);
        //cek apakah ada user yang sama di db
        if (foundUser) {
            return res.status(409).json({ message: `Username ${username} sudah ada` });
        }
        if( usersDB.user.find((user) => user.email === email)) {
            return res.status(409).json({ message: `Email ${email} sudah terdaftar` });
        }
        //kalo gk ada user yang sama, encrypt pass user + salt
        try {
            const pass = await bcrypt.hash(password, 10);
            const newUser = {
                username: username,
                role: {User: 3009},
                password: pass,
                email: email,
            }
            const roles = Object.values(newUser.role);
            const accessToken = jwt.sign(
                            { username: newUser.username,
                                role: roles
                             }, 
                            process.env.ACCESS_TOKEN_SECRET,
                            {expiresIn: '15m'},
                        );
            
                        const refreshToken = jwt.sign(
                            { username: newUser.username }, 
                            process.env.REFRESH_TOKEN_SECRET,
                            {expiresIn: '1h'},
                        );
            const newUserData = { ...newUser, refreshToken };
            //r/w ke db, pake spread karena stateful datanya, jadi rewrite terus, bisa diubah tergantung tipe db dan state
            usersDB.user_action([...usersDB.user, newUserData]);
            await fsPromises.writeFile(
                path.join(__dirname, '../../model/mode_user.json'), 
                JSON.stringify(usersDB.user)
            );
            console.log(`User: ${username}`);
            res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 60 * 60 * 1000 });
            res.status(200).json({ message: `User ${username} berhasil ditambahkan`, accessToken });
        //Error handling
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Username tidak berhasil ditambahkan" }); 
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { RegisterController };