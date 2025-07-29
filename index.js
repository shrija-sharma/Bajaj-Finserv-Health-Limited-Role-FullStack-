const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        if (!Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                user_id: "your_full_name_ddmmyyyy",
                error: "Input data must be an array."
            });
        }

        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let total_sum = 0;
        let alphabet_string = "";

        data.forEach(item => {
            const itemStr = String(item);
            if (!isNaN(parseFloat(itemStr)) && isFinite(itemStr)) {
                const num = Number(itemStr);
                total_sum += num;
                if (num % 2 === 0) {
                    even_numbers.push(String(num));
                } else {
                    odd_numbers.push(String(num));
                }
            }
            else if (/[a-zA-Z]/.test(itemStr)) {
                alphabets.push(itemStr.toUpperCase());
                for (const char of itemStr) {
                    if (/[a-zA-Z]/.test(char)) {
                        alphabet_string += char;
                    }
                }
            }
            else {
               for (const char of itemStr) {
                    if (!/[a-zA-Z0-9]/.test(char)) {
                         special_characters.push(char);
                    }
               }
            }
        });

        let concat_string = "";
        const reversed_alpha = alphabet_string.split('').reverse().join('');
        for (let i = 0; i < reversed_alpha.length; i++) {
            if (i % 2 !== 0) {
                concat_string += reversed_alpha[i].toLowerCase();
            } else {
                concat_string += reversed_alpha[i].toUpperCase();
            }
        }


        const response = {
            is_success: true,
            user_id: "shrija_sharma_2210992350",
            email: "shrija2350.be22@chitkara.edu.in",
            roll_number: "2210992350",
            odd_numbers: odd_numbers,
            even_numbers: even_numbers,
            alphabets: alphabets,
            special_characters: special_characters,
            sum: String(total_sum),
            concat_string: concat_string
        };

        return res.status(200).json(response); 

    } catch (error) {
        return res.status(500).json({
            is_success: false,
            user_id: "shrija_sharma_2210992350",
            error_message: error.message
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
