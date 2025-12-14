class Button {
    constructor(text, type, size) {
        this.text = text;
        this.type = type;
        this.size = size;
    }

    render() {
        const button = document.createElement("button");

        button.classList.add("button");
        button.classList.add(this.type); 
        button.classList.add(this.size); 

        button.textContent = this.text;

        document.body.appendChild(button);
    }
}

