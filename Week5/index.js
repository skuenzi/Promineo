class Singer {
    constructor(name, part) {
        this.name = name;
        this.part = part;
    }

    describe() {
        return `${this.name} sings ${this.part}`
    }
}

class Choir {
    constructor(name) {
        this.name = name;
        this.singers = []
    }

    addSinger(singer) {
        if (singer instanceof Singer) {
            this.singers.push(singer)
        } else {
            throw new Error(`You can only add an instance of Singer, argument is not a singer: ${singer}`)
        }
    }
    describe() {
        return `${this.name} has ${this.singer.length} singers.`
    }
}

class Menu {
    constructor() {
        this.choirs = []
        this.selectedChoir = null
    }

    start() {
        let selection = this.showMainMenuOptions()

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createChoir()
                    break;
                case '2': 
                    this.viewChoir()
                    break;
                case'3':
                    this.deleteChoir()
                    break;
                case '4':
                    this.displayChoirs()
                    break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }

        alert('buh bye now')   

    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create New Choir
            2) View Choir
            3) Delete Choir
            4) Display Choirs
        `)
    }

    showChoirMenuOptions() {
        return prompt(`
        0) Back
        1) Create Singer
        2) View Singer
        3) Delete Singer
        ----------------
        ${choirInfo}
    `)
    }

    displayChoirs() {
        let choirsString = ''

        for (let i = 0; i < this.choirs.length; i++) {
            choirsString += i + ') ' + JSON.stringify(this.choirs[i].name )+ '\n'
        }

        alert(choirsString)
    }
    
    createChoir() {
        let name = prompt('Enter name for new choir:')
        this.choirs.push(new Choir(name))

        console.log('added a new choir')
    }
    

    viewChoir() {
        let index = prompt('Enter the index of the choir you want to view:')

        if (index >= 0 && index < this.choirs.length) {
            this.selectedChoir = this.choirs[index]
            let description = 'Choir Name: ' + this.selectedChoir.name + '\n'        
            
            for (let i = 0; i < this.selectedChoir.singers.length; i++) {
                description += i + ') ' + 
                    this.selectedChoir.singers[i].name + ' - ' + this.selectedChoir.singers[i].part + '\n'
            }

            let selection = this.showChoirMenuOptions()

            switch (selection) {
                case '1':
                    this.createSinger()
                    break;
                case '2':
                    this.deleteSinger()
                    break;
            }
        }
    }
}


let menu = new Menu()
menu.start()