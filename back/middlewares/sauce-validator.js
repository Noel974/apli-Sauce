// fonction de validation du formulaire des sauces 

module.exports = (req, res, next) => {
    try {
        let ctrlInputs = new RegExp("^[A-Za-zàâäéèêëïîôöùûüç '0-9]{2,}$");
        let name = "";
        let manufacturer = "";
        let description = "";
        let mainPepper = "";
        if (req.body.sauce === undefined) {
            name =  ctrlInputs.test(req.body.name);
            manufacturer = ctrlInputs.test(req.body.manufacturer);
            description = ctrlInputs.test(req.body.description);
            mainPepper = ctrlInputs.test(req.body.mainPepper);
        }else {
            let sauce = JSON.parse(req.body.sauce)
            name =  ctrlInputs.test(sauce.name);
            manufacturer = ctrlInputs.test(sauce.manufacturer);
            description = ctrlInputs.test(sauce.description);
            mainPepper = ctrlInputs.test(sauce.mainPepper);
        }
        if(name && manufacturer && description && mainPepper){
            next();
        } else {
            res.status(402).json({ message: 'Formulaire incorrect' });
        }
    } 
    catch (error) {
        res.status(500).json({error});
    }
}