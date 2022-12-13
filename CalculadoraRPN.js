class Calculadoras{
    constructor(){
        
        this.pantalla="";
        
        this.last="";
        this.posicion=-1;
        this.pilaRPN=new Array();
    }

    digit(num){
        this.last+=num;
        this.pantalla=this.last;
        document.querySelector("textarea:first-of-type").value=this.pantalla;
    }
    

    suma(){
        var opderecha=this.pilaRPN.pop();
        var opizq=this.pilaRPN.pop();
        var sol=opderecha+opizq;
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }
    resetPantalla(){
        this.pantalla="";
        this.last="";
        document.querySelector("textarea:first-of-type").value=this.pantalla;
    }
    show(){
        for(var i=0;i<this.pilaRPN.length;i++){
            var pintar=this.pilaRPN[i];
            document.querySelector("textarea:first-of-type").value+=pintar+"\n";
        }
    }
    resta(){
        var opderecha=this.pilaRPN.pop();
        var opizq=this.pilaRPN.pop();
        var sol=opizq -opderecha;
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    multiply(){
        var opderecha=this.pilaRPN.pop();
        var opizq=this.pilaRPN.pop();
        var sol=opizq*opderecha;
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }
    division(){
        var opderecha=this.pilaRPN.pop();
        var opizq=this.pilaRPN.pop();
        var sol=opizq /opderecha;
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }
    punto(){
        this.last+="."
        this.pantalla=this.last;
        document.querySelector("textarea:first-of-type").value=this.pantalla;
    }
    
    sin(){
        var opderecha=this.pilaRPN.pop();
        
        var sol=Math.sin(opderecha);
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    cos(){
        var opderecha=this.pilaRPN.pop();
        
        var sol=Math.cos(opderecha);
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    tan(){
        var opderecha=this.pilaRPN.pop();
        
        var sol=Math.tan(opderecha);
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    arcSin(){
        var opderecha=this.pilaRPN.pop();
        
        var sol=Math.asin(opderecha);
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    arcCos(){
        var opderecha=this.pilaRPN.pop();
        
        var sol=Math.acos(opderecha);
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    arcTan(){
        var opderecha=this.pilaRPN.pop();
        
        var sol=Math.sqrt(opderecha);
        if(!Number.isNaN(sol)){
            this.pilaRPN.push(sol);
        }
        this.resetPantalla();
        this.show();
    }

    enter(){
        var opderecha=new Number(this.last);
        if(!Number.isNaN(opderecha)){
            this.pilaRPN.push(opderecha);
        }
        this.resetPantalla();
        this.show();
    }

    reset(){
        this.pilaRPN=[];
        this.resetPantalla();
        this.show();
    }

    borrar(){
        if(this.pantalla.length>0){
            var nueva=this.pantalla.substring(0,this.pantalla.length-1);
            this.pantalla=nueva;
        }
        if(this.last.length>0){
            var nueva2=this.last.substring(0,this.last.length-1);
            this.last=nueva2;
        }
        document.querySelector("textarea:first-of-type").value=this.pantalla;

    }

    ce(){
        this.pantalla="";
        this.memoria=0.0;
        document.querySelector("textarea:first-of-type").value=this.pantalla;
    }
    onc(){
        this.pantalla="";
        document.querySelector("textarea:first-of-type").value=this.pantalla;
    }
    teclas(){
        document.addEventListener('keydown',(evento)=>{
            const teclaPulsada=evento.key;
            if(teclaPulsada=='0' || teclaPulsada=='1' || teclaPulsada=='2' ||
            teclaPulsada=='3' || teclaPulsada=='4' ||
            teclaPulsada=='5' ||
            teclaPulsada=='6' ||
            teclaPulsada=='7' ||
            teclaPulsada=='8' ||
            teclaPulsada=='9' ){
                this.digit(teclaPulsada);
            }else if(teclaPulsada=="+"){
                this.suma();
            }else if(teclaPulsada=="-"){
                this.resta();
            }else if(teclaPulsada=="*"){
                this.multiply();
            }else if(teclaPulsada=="/"){
                this.division();
            }else if(teclaPulsada=="."){
                this.punto();
            }else if(teclaPulsada=="Backspace"){
                this.borrar();
            }else if(teclaPulsada=="13"){
                this.enter();
            }else if(teclaPulsada=="c"){
                this.cos();
            }else if(teclaPulsada=="s"){
                this.sin();
            }else if(teclaPulsada=="t"){
                this.tan();
            }else if(teclaPulsada=="C"){
                this.arccos();
            }else if(teclaPulsada=="S"){
                this.arcsin();
            }else if(teclaPulsada=="T"){
                this.arctan();
            }
        });
    }
}



var calculadora=new Calculadoras();

calculadora.teclas();