const router = require('express').Router();

router.route('/').get((req, res) => {
    msg = `Hello ${req.query.name || "World"} from get request`;
    res.json({msg});
})

router.route('/:lang').get((req, res) => { // :lang (lenguaje). Todo lo que recibamos luego de /hello va a estar en lang
    switch(req.params.lang){
        case "es":
            msg = "Hola Mundo!";
            break;
        case "en":
            msg = "Hello World!";
            break;
        case "fr":
            msg = "Bonjour Monde!";
            break;
        default:
            msg = "Hallo Welt!";
    }
    res.json({msg});
})

router.route('/').post((req, res) => {
    msg = `Hello ${req.body.name || "World"} from POST request!`;
    res.json({msg});
})

router.route('/sum').post((req, res) => { // va a salir en /hello/sum
    result = req.body.a + req.body.b;
    res.json({result});
})

module.exports = router;