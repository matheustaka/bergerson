// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

!(function (e) {
    var t = {};
    function o(n) {
        if (t[n]) return t[n].exports;
        var r = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    (o.m = e),
        (o.c = t),
        (o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var r in e)
                    o.d(
                        n,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return n;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = ""),
        o((o.s = 6));
})({
    6: function (e, t, o) {
        e.exports = o(7);
    },
    7: function (e, t) {
        $(document).ajaxStop(function () {
            $("body").addClass("evoberj4"),
                $(".product-item:not(.skip)").each(function () {
                    if ($(this).hasClass("unavailable")) return !1;
                    (that_ = $(this)), that_.addClass("skip");
                    that_.next();
                    var e = that_.next().next(),
                        t = e.find(".item-attachment-value").val(),
                        o = that_.find(".product-name > a").text();
                    e.length > 0 &&
                        null != t &&
                        (o.indexOf("Pulseira") >= 0
                            ? $(this)
                                .find(".brand")
                                .before('<div class="aro_service"><span>Medida : <strong>' + t + '</strong> </span> <a href="#" class="mudar">Alterar</a></div></div>')
                            : $(this)
                                .find(".brand")
                                .before('<div class="aro_service"><span>Tamanho do aro : <strong>' + t + '</strong> </span> <a href="#" class="mudar">Alterar</a></div></div>'));
                }),
                $("body").on("click", ".mudar", function () {
                    var e = $(this).parents(".product-item"),
                        t = e.next(),
                        o = e.next().next();
                    $(".item-attachments-head.item-attachments-name-escolha-o-aro").find("td").attr("colspan", "6"), t.show(), o.show();
                }),
                $(".item-attachments-head").each(function () {
                    var e = $(this);
                    $(this).append('<a class="close">+</a>');
                    $(this).find(".close");
                    e.click(function () {
                        $(this).hide(), $(this).next().hide();
                    });
                }),
                $(".payment-submit-wrap").append('<div class="btn-submit"></div>');
        }),
            $(document).ready(function () {
                function e() {
                    setTimeout(function () {
                        items = [];
                        for (var e = 0; vtexjs.checkout.orderForm.items.length > e; e++)
                            items.push({
                                productId: vtexjs.checkout.orderForm.items[e].productId,
                                id: vtexjs.checkout.orderForm.items[e].id,
                                skuName: vtexjs.checkout.orderForm.items[e].skuName,
                                price: vtexjs.checkout.orderForm.items[e].price,
                                quantity: vtexjs.checkout.orderForm.items[e].quantity,
                                productCategories: vtexjs.checkout.orderForm.items[e].productCategories,
                            });
                        var t;
                        $("#client-document").val().indexOf("*") < -1
                            ? ((t = (t = window.location.href).split(".")),
                                $.ajax({
                                    async: !0,
                                    crossDomain: !0,
                                    url: "https://tdzain.net/tdzain.io/bergerson/tracker/",
                                    method: "POST",
                                    data: {
                                        email: $(".client-profile-email .email").text(),
                                        idClient: $("#client-document")
                                            .val()
                                            .replace(/[^a-z0-9 -]/g, "")
                                            .replace("-", ""),
                                        name: $(".client-profile-summary .name").text(),
                                        phone: $("#client-phone").val(),
                                        type: "postProducts",
                                        itens: items,
                                        store: t[1],
                                    },
                                }).done(function (e) {
                                    console.log(e);
                                }))
                            : ((t = (t = window.location.href).split(".")),
                                $.ajax({
                                    async: !0,
                                    crossDomain: !0,
                                    url: "https://tdzain.net/tdzain.io/bergerson/tracker/",
                                    method: "POST",
                                    data: {
                                        email: $(".client-profile-email .email").text(),
                                        idClient: $("#client-document")
                                            .val()
                                            .replace(/[^a-z0-9 -]/g, "")
                                            .replace("-", ""),
                                        type: "getContact",
                                        itens: items,
                                        store: t[1],
                                    },
                                }).done(function (e) {
                                    console.log(e);
                                }));
                    }, 3e3);
                }
                "" != $("#client-document").val() && e(),
                    $(".payment-submit-wrap").append('<div class="btn-submit"></div>'),
                    $("#go-to-shipping").live("click", function () {
                        e();
                    }),
                    $(".btn-submit:not(.icon-loading)").live("click", function () {
                        var e = $(this);
                        e.addClass("icon-loading"), $("#payment-data-submit").addClass("icon-loading"), (items = []);
                        var t = window.location.href;
                        t = t.split(".");
                        for (var o = 0; vtexjs.checkout.orderForm.items.length > o; o++)
                            items.push({
                                productId: vtexjs.checkout.orderForm.items[o].productId,
                                id: vtexjs.checkout.orderForm.items[o].id,
                                skuName: vtexjs.checkout.orderForm.items[o].skuName,
                                price: vtexjs.checkout.orderForm.items[o].price,
                                quantity: vtexjs.checkout.orderForm.items[o].quantity,
                                productCategories: vtexjs.checkout.orderForm.items[o].productCategories,
                            });
                        setTimeout(function () {
                            $("#payment-data-submit").trigger("click");
                        }, 1e3),
                            setTimeout(function () {
                                window.checkout.disablePaymentButton()
                                    ? $.ajax({
                                        async: !0,
                                        crossDomain: !0,
                                        url: "https://tdzain.net/tdzain.io/bergerson/tracker/",
                                        method: "POST",
                                        data: {
                                            email: $(".client-profile-email .email").text(),
                                            idClient: $("#client-document")
                                                .val()
                                                .replace(/[^a-z0-9 -]/g, "")
                                                .replace("-", ""),
                                            name: $(".client-profile-summary .name").text(),
                                            phone: $("#client-phone").val(),
                                            type: "postOrder",
                                            itens: items,
                                            orderFormId: vtexjs.checkout.orderForm.orderFormId,
                                            quantity: vtexjs.checkout.orderForm.items.length,
                                            total: vtexjs.checkout.orderForm.totalizers[0].value,
                                            shipping: vtexjs.checkout.orderForm.totalizers[1].value,
                                            store: t[1],
                                        },
                                    }).done(function (e) {
                                        console.log("Tdzain disparou!", e);
                                    })
                                    : (e.removeClass("icon-loading"), $("#payment-data-submit").removeClass("icon-loading"));
                            }, 2e3);
                    });
            }),
            $(document).ready(function () {
                var e = {
                    init: function () {
                        e.addHtml(), e.addCoafCheckout(), e.addSellersellerCheckout(), e.dropDownCupons();
                    },
                    addSellersellerCheckout: function () {
                        $(document).on("click", "#cart-seller-code-add", function () {
                            // var e = $("#seller").val(),
                            //     t = $(".mini-cart #seller").val();
                            // ((e && e.length) || (console.log("Campo Seller Carrinho Vazio"), t && t.length)) &&
                            var valorCampoSeller = $("#seller").val();
                            if (valorCampoSeller && valorCampoSeller.length) {
                                vtexjs.checkout.getOrderForm()
                                    .then(function (orderForm) {

                                        var textFieldAtual = orderForm.openTextField.value
                                        let observationValues = [textFieldAtual, valorCampoSeller].join(' ')

                                        vtexjs.checkout.sendAttachment("openTextField", { value: observationValues }).done(function (e) {
                                            var t = $("#seller").val()
                                            console.log(t), $(".seller-text").text(t), $(".seller-remove").show(), $(".seller-fields").hide();
                                        });
                                    })
                                    .done(function (orderForm) {
                                    });
                            } else {
                                console.log('Campo Seller Carrinho Vazio')
                            }

                        }),
                            $(document).on("click", ".remove-seller", function () {
                                vtexjs.checkout
                                    .getOrderForm()
                                    .done(function () {
                                        return vtexjs.checkout.sendAttachment("openTextField", { value: null });
                                    })
                                    .done(function (e) {
                                        $(".summary-template-holder .seller-text").val(""),
                                            $(".summary-template-holder .seller-fields").show(),
                                            $(".summary-template-holder .seller-remove").hide(),
                                            $(".summary-template-holder .seller-value").val(""),
                                            $(".mini-cart .seller-text").val(""),
                                            $(".mini-cart .seller-fields").show(),
                                            $(".mini-cart .seller-remove").hide(),
                                            $(".mini-cart .seller-value").val("");
                                    });
                            });
                    },

                    addCoafCheckout: function () {
                        let coa = '<form id="coaf_form"> <label for="pessoa politicamente exposta">PESSOA POLITICAMENTE EXPOSTA: <span class="ppe-info"> <i aria-hidden="true" class="icon-question-sign help-seller"></i> <div class="ppe-details-popup field-help"><span>O agente público que desempenha ou tenha desempenhado, nos últimos 5 anos, no Brasil ou em país, território ou dependência estrangeira, cargo, emprego ou função pública relevante, assim como seus familiares (parentes na linha direta até o segundo grau, o cônjuge, o(a) companheiro(a), o(a) enteado(a) e pessoas de seu relacionamento próximo). Consideram-se pessoas expostas politicamente, todas aquelas descritas na <a href="https://www.gov.br/coaf/pt-br/acesso-a-informacao/Institucional/a-atividade-de-supervisao/regulacao/supervisao/normas-1/resolucao-coaf-no-40-de-22-de-novembro-de-2021" target="_blank">Resolução Coaf n° 40</a>, de 22 de novembro de 2021.</span></div></span> </label> <select id="ppe"> <option id="" value=""></option> <option id="ppe-s" value="sim">Sim</option> <option id="ppe-n" value="nao">Não</option> </select> <br><label for="parentesco com pessoa politicamente exposta">PARENTESCO COM PESSOA POLITICAMENTE EXPOSTA:</label> <select id="pppe"> <option id="" value=""></option> <option id="pppe-p" value="possuo">Possuo</option> <option id="pppe-np" value="nao possuo">Não Possuo</option> </select> </div><div id="pppe-possuo" style="display: none;"> <label for="grau de parentesco">Grau de Parentesco</label> <select id="gp"> <option id="gp-empty" value=""></option> <option id="gp-conj" value="conjuge">Cônjuge</option> <option id="gp-comp" value="companheiro">Companheiro(a)</option> <option id="gp-cpm" value="pai mae">Pai / Mãe</option> <option id="gp-cff" value="filho filha">Filho / Filha</option> <option id="gp-caa" value="avo">Avô / Avó</option> <option id="gp-cnn" value="neto neta">Neto / Neta</option> <option id="gp-cee" value="enteado enteada">Enteado / Enteada</option> </select> </div><br><label for="ocupa posicao publica">Ocupa posição pública:</label> <select id="opp"> <option id="" value=""></option> <option id="opp-s" value="sim">Sim</option> <option id="opp-n" value="nao">Não</option> </select> <div id="opp-sim" style="display: none;"> <label for="qualPosicao">Se sim, qual:</label> <input id="qualPosicao" name="qualPosicao" type="text"> </div><br><label for="e estrangeiro">É estrangeiro:</label> <select id="ee"> <option id="" value=""></option> <option id="ee-s" value="sim">Sim</option> <option id="ee-n" value="nao">Não</option> </select> <div id="ee-sim" style="display: none;"> <label>Insira os dados de seu passaporte:</label> <label for="nacionalidade">Nacionalidade</label> <input id="nacionalidade" type="text" placeholder="Brasileiro(a)" name="nacionalidade"> <label for="filiacao">Filiação</label> <input id="filiacao" type="text" name="filiacao"> <label for="numero de serie" name="numeroSerie" id="numeroSerie">Número de Série</label> <input id="numeroSerie" type="text"> </div></form>'
                        $('.box-client-info .row-fluid').append('<div id="coaf"></div>');
                        $('#coaf').append(coa);
                        $("#pppe").change(function () {
                            let selected = $("#pppe option:selected").val();
                            selected == 'possuo' ? $('#pppe-possuo').show() : $('#pppe-possuo').hide();
                        })

                        $("#opp").change(function () {
                            let selected = $("#opp option:selected").val();
                            selected == 'sim' ? $('#opp-sim').show() : $('#opp-sim').hide();
                        });

                        $("#ee").change(function () {
                            let selected = $("#ee option:selected").val();
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

                            vtexjs.checkout.getOrderForm()
                                .then(function (orderForm) {

                                    let orderF = orderForm

                                    if (orderF.openTextField != null) {

                                        let valorCampo = orderF.openTextField.value
                                        let valoresCoaf = JSON.stringify(clientObj)

                                        let observationValue = ['dadosCoaf:', valoresCoaf, 'codigoVendedor', valorCampo].join(' ')

                                        return vtexjs.checkout.sendAttachment('openTextField', { value: observationValue });
                                    }
                                    else {

                                        let valoresCoaf = JSON.stringify(clientObj)
                                        // console.log('Não existe valor anterior', 'valor do campo:', orderF.openTextField)
                                        return vtexjs.checkout.sendAttachment('openTextField', { value: valoresCoaf })
                                    }

                                    // return vtexjs.checkout.sendAttachment('openTextField');

                                }).done(function (orderForm) {
                                    // console.log("openTextField preenchido com: ", orderForm.openTextField);
                                });
                        });

                    },

                    addHtml: function () {
                        $(
                            '\n              <div class="summary-seller-wrap">\n                  <div class="seller-form">\n                      <fieldset class="seller-fieldset">\n                          <div class="seller-label">\n                              <label for="cart-seller">Código do vendedor</label>\n<div class="info-cod-seller">\n<i aria-hidden="true" class="icon-question-sign help-seller"></i>\n<div class="seller-details-popup field-help">\n<h5 class="help-seller-title">Sobre o código do vendedor</h5>\n<span>• Campo não obrigatório.</span>\n<span>• Qualquer benefício vinculado ao código não é cumulativo.</span>\n</div>\n</div>\n                          </div>\n                          <div class="seller-fields">\n                              <span class="seller-fields__inputs">\n                                  <input type="text" id="seller" class="seller-value seller input-small" placeholder="Código do vendendor" />\n                                  <button id="cart-seller-code-add" class="btn">Adicionar</button>\n                              </span>\n                          </div>\n                          <div class="seller-remove" style="display:none">\n                              <p class="seller-text"></p>\n                              <small class="remove-seller">\n                                  <a>excluir</a>\n                              </small>\n                          </div>\n                      </fieldset>\n                  </div>\n              </div>'
                        ).appendTo(".cart-template.mini-cart.span4 .forms.coupon-column.summary-coupon-wrap.span7.pull-left");
                    },
                    dropDownCupons: function () {
                        var e = ".forms.coupon-column.summary-coupon-wrap.text-center";
                        $(e).wrap('<div class="wrapperDropdopwn dropDownActive" data-wrapper="dropdown"></div>'),
                            $(window).on("load", function () {
                                return $(e).hide();
                            }),
                            $('[data-wrapper="dropdown"]').on("click", function (t) {
                                var o = $(this);
                                t.target === t.currentTarget && ($(e).fadeToggle(), o.toggleClass("dropDownActive"));
                            });
                    },
                };
                e.init();
            });
    },
});
// checkOpenTextField: function () {
                    //     setTimeout(function () {
                    //         if (vtexjs && vtexjs.checkout && vtexjs.checkout.orderForm && vtexjs.checkout.orderForm.openTextField) {
                    //             var e = vtexjs.checkout.orderForm.openTextField.value;
                    //             console.log(e), e && ($(".seller-text").text(e), $(".seller-remove").show(), $(".seller-fields").hide());
                    //         }
                    //     }, 1200);
                    // },