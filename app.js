'use strict';
class TextEditor {
    constructor() {
        this.changeUpperCase();
        this.changeLowerCase();
        this.changeBold();
        this.changeItalic();
        this.changeAllLowerCase();
        this.changeAllUpperCase();
    }
    textArea = document.getElementById("textArea");
    indexStart;
    indexEnd;
    text;
    getSelectedText(textArea) {
        this.text = textArea.value;
        this.indexStart = textArea.selectionStart;
        this.indexEnd = textArea.selectionEnd;
        return this.text.substring(this.indexStart, this.indexEnd)
    }
    setValue(value) {
        this.textArea.value = value;
    }
    replaceText(startIndex, endIndex, replacement) {
        if (startIndex === endIndex || startIndex === '' || endIndex === '') {
            alert("Please Select Text First.");
            return false;
        }
        return this.text.substring(0, startIndex) + replacement + this.text.substring(endIndex);
    }
    changeAllUpperCase() {
        document.getElementById("changeAllUpperCase").addEventListener("click", (e) => {
            e.preventDefault();
            this.textArea.value = this.textArea.value.toUpperCase();
        });
    }
    changeAllLowerCase() {
        document.getElementById("changeAllLowerCase").addEventListener("click", (e) => {
            e.preventDefault();
            this.textArea.value = this.textArea.value.toLowerCase();
        });
    }
    changeUpperCase() {
        document.getElementById("changeUpperCase").addEventListener("click", (e) => {
            e.preventDefault();
            let selectedText = this.getSelectedText(this.textArea);
            let value = this.replaceText(this.indexStart, this.indexEnd, selectedText.toUpperCase());
            if (value) {
                this.setValue(value);
            }

        });
    }
    changeLowerCase() {
        document.getElementById("changeLowerCase").addEventListener("click", (e) => {
            e.preventDefault();
            let selectedText = this.getSelectedText(this.textArea);
            let value = this.replaceText(this.indexStart, this.indexEnd, selectedText.toLowerCase());
            if (value) {
                this.setValue(value);
            }
        });
    }
    changeBold() {
        document.getElementById("changeBold").addEventListener("click", (e) => {
            e.preventDefault();
            console.log(this.textArea.style.fontWeight);
            if(this.textArea.style.fontWeight === "bold"){
                this.textArea.style.fontWeight = "unset";
            }else{
                this.textArea.style.fontWeight = "bold";
            }
        });
    }
    changeItalic() {
        document.getElementById("changeItalic").addEventListener("click", (e) => {
            e.preventDefault();
            
            if(this.textArea.style.fontStyle === "italic"){
                this.textArea.style.fontStyle = "unset";
            }else{
                this.textArea.style.fontStyle = "italic";
            }
        });
    }
}
let call = new TextEditor();
