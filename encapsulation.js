class Database {
    #token = 'abc123';
    constructor() {
       this.#token = 'abc4567'; 
    }

    saveData(data) {
        this.#initDBConnection();
        this.#authorize();
        this.#updateQuery();
        console.log(this.#token);
    }

    #initDBConnection() {} //# make method private
    #authorize(){}
    #updateQuery(){}
}

const db = new Database();
db.saveData()