const express = require('express');
const stytch = require('stytch');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const port = process.env.PORT ?? 3333;

const client = new stytch.Client({
    project_id: process.env.PROJECT_ID,
    secret: process.env.SECRET,
});

app.use(cors());
app.use(express.json());

const MAGIC_LINK_TOKEN = 'magic_link';
const PWD_TOKEN = 'pwd';

app.post('/register', async (req, res) => {
    const session_duration_minutes = 60;

    const { email, password, auth_method } = req.body;
    console.log(`attempting to register ${email} via ${auth_method}`);

    try {
        if (auth_method === MAGIC_LINK_TOKEN) {
            console.log('sending magic link creation request');
            await client.magicLinks.email
                .loginOrCreate({
                    email,
                })
                .then((resp) => console.log(resp))
                .catch((err) => console.log(err));

            res.json({
                success: true,
                message: 'successfully signed up user with magic link',
            });
        } else if (auth_method === PWD_TOKEN) {
            const resp = await client.passwords.create({
                email,
                password,
                session_duration_minutes,
            });

            res.json({
                success: true,
                message: 'user registered successfully',
                token: resp.session_token,
            });
        } else {
            throw new Error('invalid auth type');
        }
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err,
        });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const resp = await client.passwords.authenticate({
            email: email,
            password: password,
            session_duration_minutes: 60,
        });

        res.json({
            success: true,
            message: 'user logged in successfully',
            token: resp.session_token,
        });
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err,
        });
    }
});

app.post('/authenticate', async (req, res) => {
    const { session_token } = req.body;

    try {
        await client.sessions.authenticate({
            token: session_token.value,
        });

        res.json({
            success: true,
            message: 'token is valid',
        });
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err,
        });
    }
});

app.post('/logout', async (req, res) => {
    const { session_token } = req.body;

    try {
        await client.sessions.revoke({
            token: session_token.value,
        });

        res.json({
            success: true,
            message: 'logged out successfully',
        });
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err,
        });
    }
});

app.listen(port, () => console.log(`Server started @ ${port}`));
