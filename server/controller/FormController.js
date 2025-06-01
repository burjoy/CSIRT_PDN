const formsDB = {
    forms: require('../../model/model_tamu.json'),
    forms_action: function (data) { this.forms = data }
}

const FormController = async (req, res) => {
    try {
        // Simulate a delay to mimic database access
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Return the forms data
        res.status(200).json(formsDB.forms);
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}