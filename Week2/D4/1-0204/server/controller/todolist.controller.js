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
        console.log( 'e at base catch', e );
    }
    

}


module.exports.updateTodo = async ( req, res ) => {
    
}

module.exports.deleteTodo = async ( req, res ) => {
    
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