
const formsDB = {
    forms_action: function (data) { this.forms = data },
    forms: require('../../model/model_tamu.json')
}

const FormController = async (req, res) => {
    try {
        const { instansi, email, pesan, waktu } = req.body;
        // Validate required fields
        if (!instansi || !email || !pesan || !waktu) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const foundInstansi = formsDB.forms.find(form => form.instansi === instansi);
        if(!foundInstansi){
            const newData = { instansi, email, pesan, waktu };
            formsDB.forms_action([...formsDB.forms, newData]);
        }
        else{
            const newPesanData = foundInstansi.pesan.push(pesan);
            const newTimeData = foundInstansi.waktu.push(waktu);
            // foundInstansi.pesan = newData;
            formsDB.forms_action([...formsDB.forms, newPesanData, newTimeData]);
            // console.log(foundInstansi.pesan.push(pesan));
        }
        console.log(foundInstansi);
        // Return the forms data
        res.status(200).json(formsDB.forms);
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { FormController };