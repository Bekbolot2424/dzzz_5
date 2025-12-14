class Button {
    constructor(text, type, size) {
        this.text = text;
        
        this.size = size;

        this.type = type;
    }

    render() {
        const button = document.createElement("button");

        button.classList.add("button");
        
        button.classList.add(this.size); 
        button.classList.add(this.type); 

        button.textContent = this.text;


        document.body.appendChild(button);
    }
}

