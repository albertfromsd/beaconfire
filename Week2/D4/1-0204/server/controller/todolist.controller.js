const fs = require("fs").promises;
const path = require("path");

module.exports.getTodo = async ( req, res ) => {
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../data/`, `${filename}` + '.json');

    try {
        const data = JSON.parse( await fs.readFile(filepath) );
        res.status(200).json(data);
    } catch (e){
        console.log('e', e);
        res.status(400);
    }
}

module.exports.postTodo = async ( req, res ) => {
    const { title, description, status, priority } = req.body;
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../data/`, `${filename}`);
    
    const timestamp = new Date()
    const data = {
        title,
        description,
        status,
        priority,
        timestamp
    };

    try {
        if( !title || !description || !status || !priority ) {
            throw new Error(400);
        }
        console.log('post: before try/catch');
        try {
            const json = JSON.parse(await fs.readFile( filepath, "utf-8"));
            json.push(data);
            console.log( {json} );
            await fs.writeFile(filepath, JSON.stringify(json, null, 2));
        } catch(e) {
            await fs.writeFile(filepath, JSON.stringify(data, null, 2))
        }
    } catch(e) {
        // if erorr is 400 message, user is missing an arugment
        // else it is a server error
        if( e.message === String('400') ) res.status(400).send('Missing at least 1 parameter')
        else res.status(500).send("Server error");   
    }
}


module.exports.updateTodo = async ( req, res ) => {
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../data/`, `${filename}`);

    try {
        if( !req.body.title ) throw new Error(400);
        const updateKeys = [ 'title', 'description', 'status', 'priority' ];
        const todolist = JSON.parse( await fs.readFile( filepath, "utf-8" ));
        for( const todo of todolist ) {
            if( todo['title'] === req.body.title ) {
                for( const key of updateKeys ) {
                    if( req.body[key] !== undefined ) todo[key] = req.body[key];
                }
            }
        }

        await fs.writeFile( filepath, JSON.stringify(todolist, null, 2));
        res.status(400).json(todolist);
    } catch(e) {
        if( e.message === String('400') ) res.status(400).send('Missing at least 1 parameter')
        else res.status(500).send("Server error");   
    }
    
}

module.exports.deleteTodo = async ( req, res ) => {
    const { title } = req.body;
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../data/`, `${filename}`);
    try {
        if( !title ) throw new Error(400);
        const todolist = JSON.parse( await fs.readFile( filepath, "utf-8" ));
        const newList = todolist.filter( todo => todo.title !== title )

        await fs.writeFile( filepath, JSON.stringify(newList, null, 2));
        res.status(400).json(newList);
    } catch(e) {
        if( e.message === String('400') ) res.status(400).send('Missing title')
        else res.status(500).send("Server error");   
    }
}

// module.exports.getAllPiratesSortedByName = (_, res) => {
//     Pirate.find(
//     ).sort({pirateName: 1})
//     .then(pirate => res.json(pirate))
//     .catch(err => res.json(err));
// };

// module.exports.getPirateById = (req, res) => {
// Pirate.findOne({_id: req.params.id})
// .then(pirate => res.json(pirate
//     // {
//     //     id: pirate._id,
//     //     pirateName: pirate.pirateName,
//     //     imageUrl: pirate.imageUrl,
//     //     treasureChests: pirate.treasureChests,
//     //     catchPhrase: pirate.catchPhrase,
//     //     crewPosition: pirate.crewPosition,
//     //     pegLeg: pirate.pegLeg,
//     //     eyePatch: pirate.eyePatch,
//     //     hookHand: pirate.hookHand
//     // }
// ))
// .catch(err => res.json(err));
// };

// module.exports.createPirate = (req, res) => {
// const { pirateName, imageUrl, treasureChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand } = req.body;
// Pirate.create({
//     pirateName,
//     imageUrl,
//     treasureChests,
//     catchPhrase,
//     crewPosition,
//     pegLeg,
//     eyePatch,
//     hookHand
// })
//     .then(pirate => res.json(pirate))
//     .catch(err => res.status(400).json(err));
// };

// module.exports.editPirate = (req, res) => {
// Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
// .then(updatedPirate => {
//     res.json(updatedPirate);
//     console.log("Find1AndUpdateRES: "+res.reason.message);
// })
// .catch(err => {
//     res.status(400).json(err);
//     console.log("Find1AndUpdateERR: "+res.reason.message);
// })
// },

// module.exports.deletePirate = (req, res) => {
// Pirate.deleteOne({ _id: req.params.id })
// .then(deleteConfirmation => res.json(deleteConfirmation))
// .catch(err => response.json(err))
// };