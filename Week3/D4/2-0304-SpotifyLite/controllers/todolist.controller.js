const { TodoItem } = require('../models/TodoItem.model');

module.exports.getTodoList = async ( req, res ) => {
    try {
        const todoList = await TodoItem.find();
        res.status(200).render('home', {todoList, message: null} );
    } catch(e) {
        console.log('e', e);
        res.status(400);
    }
    // try {
        // const todoList = JSON.parse( await fs.readFile(filepath, "utf-8") );
        // res.status(200).render('home', {todoList, message: null} );
    // } catch (e){
        // console.log('e', e);
        // res.status(400);
    // }
}

module.exports.postTodo = async ( req, res ) => {
    const { title, description, status, priority } = req.body;
    
    const data = {
        title,
        description,
        status,
        priority
    };

    try {
        if( !title || !description || !status || !priority ) {
            throw new Error(400);
        }
        
        const newItem = await TodoItem.create({
            title, description, status, priority
        });
        await newItem.save();
        const todoList = await TodoItem.find();
        res.status(201).render('home', {todoList, message: "Succesfully created item!"});
    } catch(e) {
        if( e.message === String('400') ) {
            res.status(400).send('Missing at least 1 parameter');
        } else {
            res.status(500).send("Server error");   
        }
    }
}


module.exports.updateTodo = async ( req, res ) => {
    const { _id, title, description, status, priority, isCompleted } = req.body;
    console.log(req.body)
    
    
    try {
        const item = await TodoItem.findOne({_id}).exec();
        if( !item ) throw new Error(204);

        if( isCompleted !== undefined ) {
            item.status = isCompleted === "true" 
                ? "In Progress"
                : "Completed" 
                console.log({item})
        }  else if( _id === undefined || !title || !description || !status || !priority ) {
            throw new Error(400);
        } else {
            item.title = title;
            item.description = description;
            item.priority = priority;
            item.status = status;
            console.log({item})
        }
        await item.save();
        
        const todoList = await TodoItem.find();
        res.status(201).render('home', {todoList, message: "Succesfully updated item!"});
    } catch(e) {
        if( e.message === String('400') ) {
            res.status(400).send('Missing at least 1 parameter');
        } else if( e.message === String('204') ){
            res.status(204).send('Unable to find an item with that ID');
        } else {
            res.status(500).send("Server error");
        }
    }
    
}

module.exports.deleteTodo = async ( req, res ) => {
    const { _id } = req.body;
    
    try {
        const itemToDelete = await TodoItem.findOne({_id}).exec();
        if( !itemToDelete ) throw new Error(204);
        await itemToDelete.deleteOne({_id});
        
        const todoList = await TodoItem.find();
        res.status(201).render('home', {todoList, message: "Succesfully deleted item!"});
    } catch(e) {
        if( e.message === String('204') ) {
            res.status(204).send('Invalid ID');
        } else {
            res.status(500).send("Server error");   
        }
    }
}
