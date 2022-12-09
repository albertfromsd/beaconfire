const fs = require("fs").promises;
const path = require("path");

module.exports.getTodoList = async ( req, res ) => {
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../todo/`, `${filename}` + '.json');

    try {
        const todoList = JSON.parse( await fs.readFile(filepath, "utf-8") );
        res.status(200).render('home', {todoList, message: null} );
    } catch (e){
        console.log('e', e);
        res.status(400);
    }
}

module.exports.postTodo = async ( req, res ) => {
    const { title, description, status, priority } = req.body;
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../todo/`, `${filename}` + '.json');
    
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
            
            await fs.writeFile(filepath, JSON.stringify(json, null, 2));
        } catch(e) {
            await fs.writeFile(filepath, JSON.stringify([data], null, 2));
        }
        const todoList = JSON.parse(await fs.readFile( filepath, "utf-8"));
        res.render('home', {todoList, message: "Successfully created todo item!"});
    } catch(e) {
        // if erorr is 400 message, user is missing an arugment
        // else it is a server error
        if( e.message === String('400') ) {
            res.status(400).send('Missing at least 1 parameter');
        } else {
            res.status(500).send("Server error");   
        }
    }
}


module.exports.updateTodo = async ( req, res ) => {
    const { _id, title, description, status, priority, isCompleted } = req.body;
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../todo/`, `${filename}` + '.json');

    try {
        const todoList = JSON.parse( await fs.readFile( filepath, "utf-8" ));
        if( !todoList[_id] ) {
            throw new Error(400);
        } else if( isCompleted !== undefined ) {
            todoList[_id]["status"] = isCompleted === "true" 
                ? "In Progress"
                : "Completed" 
        } else {
            todoList[_id]["title"] = title;
            todoList[_id]["description"] = description;
            todoList[_id]["priority"] = priority;
            todoList[_id]["status"] = status;
            todoList[_id]["timestamp"] = new Date();
        }
        

        await fs.writeFile( filepath, JSON.stringify(todoList, null, 2));

        const newList = JSON.parse(await fs.readFile( filepath, "utf-8"));
        res.status(200).render('home',{todoList: newList, message: "Successfully updated todo item!"});
    } catch(e) {
        if( e.message === String('400') ) {
            res.status(400).send('Missing at least 1 parameter')
        } else {
            res.status(500).send("Server error");   
        }
    }
    
}

module.exports.deleteTodo = async ( req, res ) => {
    const { _id } = req.body;
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../todo/`, `${filename}` + '.json');
    
    try {
        const oldList = JSON.parse( await fs.readFile( filepath, "utf-8" ));        
        if( !oldList[_id] ) throw new Error(400);
    
        oldList.splice(_id, 1);
        await fs.writeFile( filepath, JSON.stringify(oldList, null, 2));        
        
        const todoList = JSON.parse(await fs.readFile(filepath, "utf-8"));
        res.status(200).render('home', {todoList, message: "Successfully deleted item!"});
    } catch(e) {
        if( e.message === String('400') ) {
            res.status(400).send('Invalid ID');
        } else {
            res.status(500).send("Server error");   
        }
    }
}

module.exports.seedTodoList = async ( req, res ) => {
    const { filename } = req.params;
    const filepath = path.join(`${__dirname}/../todo/`, `${filename}` + '.json');
    
    let todoList = [];
    for (let i = 0; i < 10; i++) {
        let priority = i % 3 === 0
            ? "Low"
            : i % 3 === 1
                ? "Normal"
                : "High"
        let status = i % 2 === 0    
            ? "In Progress"
            : "Completed"

        const todoItem = {
            title: `Todo Item #${i}`,
            description: `Description #${i}`,
            status,
            priority
        };
        todoList.push(todoItem);
    }
    try {
        await fs.writeFile(filepath, JSON.stringify(todoList, null, 2));
        
        todoList = JSON.parse( await fs.readFile(filepath, "utf-8"));
        res.render('home', {todoList, message: "Successfully created new todo list!"})
    
    } catch (e) {
        console.error(e);
    }
    console.log("\x1b[46m%s\x1b[0m", "Finished 'seed.todolist.js'");
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