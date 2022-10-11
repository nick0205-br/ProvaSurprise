export default function situacaoFebre(temperatura){
    let resp = "";
    if(temperatura >= 41){
        resp = "Hipertermia";
        return resp;
    }
    else if(temperatura >= 39.6 && temperatura < 41){
        resp = "Febre Alta";
        return resp;
    }
    else if(temperatura >= 37.6 && temperatura < 39.6){
        resp = "Febre";
        return resp;
    }
    else if(temperatura >= 36 && temperatura < 37.6){
        resp = "Normal";
        return resp;
    }
    else if(temperatura < 36){
        resp = "Hipotermia";
        return resp;
    }
}