export function Calc(field)
{
    this.field = field;
    this.commandLine = "";
    this.lastOperation = "";
    let childs = field[0].children;
    let rule = (req) => (element, index, array) => element.id === req;
    let htmlFind = (arr, rule) => Array.prototype.find.call(arr, rule);
    this.output = htmlFind(childs, rule("output"));
    this.solver = htmlFind(childs, rule("solver"));
    console.log(this.solver)
    console.log(this.output)

    this.resolve = function(){
        this.commandLine = this.commandLine.replace("×","*");
        this.commandLine = this.commandLine.replace("÷","/");
        if (this.commandLine === "") return;
        try {
            this.commandLine = eval(this.commandLine);
        } catch (error) {
            console.log(
                'err', this.commandLine
            );
        }
        this.refreshCmd();
    }   
    const that = this;

    this.solver.addEventListener('click', function () {that.resolve()});

    if (!(this.solver && this.output)) return {errorMessage: "wrong field, add output and solver classes"};
    
    this.addElem = function (e){
        let currOp = e.target.textContent;
        if (currOp == "C") {this.commandLine=""; this.refreshCmd(); return;};
        let specCommand = ["+","-","×","÷","."];
        if (specCommand.includes(this.lastOperation) && specCommand.includes(currOp)) return;
        this.lastOperation = currOp;
        this.commandLine += currOp;
        this.refreshCmd();
    }
    this.refreshCmd = function(){
        this.output.textContent = this.commandLine;
    }
    
}