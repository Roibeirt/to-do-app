// todo class
class Todo{
    constructor(title, date, description){
        this.title = title;
        this.date = date;
        this.description = description;
    }
    
    changeTitle(newTitle){
        this.title = newTitle;
        return (this.title);
    }

    changeDate(newDate){
        this.date = newDate;
        return (this.date);
    }

    changeDescription(newDescription){
        this.description = newDescription;
        return (description);
    }
    

}

const storeToDo = (todo) => {

    todos.push(todo);

}

// 

const todos = [];