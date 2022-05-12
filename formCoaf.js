let coa = '<form id="coaf_form" style="display:none;"> <label for="pessoa politicamente exposta">PESSOA POLITICAMENTE EXPOSTA: <span>(?)</span></label> <select id="ppe"> <option id="" value=""></option> <option id="ppe-s" value="sim">Sim</option> <option id="ppe-n" value="nao">Não</option> </select> <br><label for="parentesco com pessoa politicamente exposta">PARENTESCO COM PESSOA POLITICAMENTE EXPOSTA:</label> <select id="pppe"> <option id="" value=""></option> <option id="pppe-p" value="possuo">Possuo</option> <option id="pppe-np" value="nao possuo">Não Possuo</option> </select> </div><div id="pppe-possuo" style="display: none;"> <label for="grau de parentesco">Grau de Parentesco</label> <select id="gp"> <option id="gp-conj" value="conjuge">Cônjuge</option> <option id="gp-comp" value="companheiro">Companheiro(a)</option> <option id="gp-cpm" value="pai mae">Pai / Mãe</option> <option id="gp-cff" value="filho filha">Filho / Filha</option> <option id="gp-caa" value="avo">Avô / Avó</option> <option id="gp-cnn" value="neto neta">Neto / Neta</option> <option id="gp-cee" value="enteado enteada">Enteado / Enteada</option> </select> </div><br><label for="ocupa posicao publica">Ocupa posição pública:</label> <select id="opp"> <option id="" value=""></option> <option id="opp-s" value="sim">Sim</option> <option id="opp-n" value="nao">Não</option> </select> <div id="opp-sim" style="display: none;"> <label for="qualPosicao">Se sim, qual:</label> <input id="qualPosicao" name="qualPosicao" type="text"> </div><br><label for="e estrangeiro">É estrangeiro:</label> <select id="ee"> <option id="" value=""></option> <option id="ee-s" value="sim">Sim</option> <option id="ee-n" value="nao">Não</option> </select> <div id="ee-sim" style="display: none;"> <label>Insira os dados de seu passaporte:</label> <label for="nacionalidade">Nacionalidade</label> <input id="nacionalidade" type="text" placeholder="Brasileiro(a)" name="nacionalidade"> <label for="filiacao">Filiação</label> <input id="filiacao" type="text" name="filiacao"> <label for="numero de serie" name="numeroSerie" id="numeroSerie">Número de Série</label> <input id="numeroSerie" type="text"> </div></form>'
$('.box-client-info .row-fluid').append('<div id="coaf" style="display: none;"></div>');
$('#coaf').append(coa);


$("#pppe").change(function () {
    let selected = $("#pppe option:selected").val();

    console.log(selected)
    selected == 'possuo' ? $('#pppe-possuo').show() : $('#pppe-possuo').hide();
});

$("#opp").change(function () {
    let selected = $("#opp option:selected").val();

    console.log(selected)
    selected == 'sim' ? $('#opp-sim').show() : $('#opp-sim').hide();
});

$("#ee").change(function () {
    let selected = $("#ee option:selected").val();

    console.log(selected)
    selected == 'sim' ? $('#ee-sim').show() : $('#ee-sim').hide();
});



$('#go-to-shipping').on('click', function (e) {
    let clientObj = {
        politicamenteExposto: $("#ppe option:selected").val(),
        parenteExposto: $("#pppe option:selected").val(),
        grauParentesco: $("#gp option:selected").val(),
        posicaoPublica: $("#opp option:selected").val(),
        qualPosicaoPublica: $("#qualPosicao").val(),
        estrangeiro: $("#ee option:selected").val(),
        nacionalidade: $("#nacionalidade").val(),
        filiacaoPassaporte: $("#filiacao").val(),
        numeroSerie: $("#numeroSerie").val()
    }

    let ofId = vtexjs.checkout._getOrderFormId()
    let orderID = ofId


    const requestOptions = {
        method: 'PUT',
        headers: {
            Accept: 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json'
        },
        body: JSON.parse(clientObj)
    }
    console.log(orderID)

    fetch('/api/checkout/pub/orderForm/' + orderID + '/customData/coaf-data', requestOptions)
        .then(response => console.log(response.json()))
        .catch(err => console.error(err));

    // fetch(`/api/checkout/pub/orderForm/${orderID}/customData/coaf-data`, {
    //     method: 'PUT',
    //     headers: {
    //         Accept: 'application/vnd.vtex.ds.v10+json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: clientObjJson
    // }).then(response => response.json()).then(response => console.log(response))
    //     .catch(err => {
    //         console.log(err)
    //     })
})
