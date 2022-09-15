const express = require('express');
const router = express.Router();

const Encuesta1 = require('../models/Encuesta1');

router.get('/encuestas', async (req, res) => {

    let e1p11 = 0, e1p12 = 0, e1p13 = 0, e1p14 = 0, e1p15 = 0, 
    e1p21 = 0, e1p22 = 0, e1p23 = 0, e1p24 = 0, e1p25 = 0, 
    e1p31 = 0, e1p32 = 0, e1p33 = 0, e1p34 = 0, e1p35 = 0, 
    e1p41 = 0, e1p42 = 0, e1p43 = 0, e1p44 = 0, e1p45 = 0, 
    e1p51 = 0, e1p52 = 0, e1p53 = 0, e1p54 = 0, e1p55 = 0, 
    e1p61 = 0, e1p62 = 0, e1p63 = 0, e1p64 = 0, e1p65 = 0, 
    e1p71 = 0, e1p72 = 0, e1p73 = 0, e1p74 = 0, e1p75 = 0, 
    e1p81 = 0, e1p82 = 0, e1p83 = 0, e1p84 = 0, e1p85 = 0;


    const encuesta1 = await Encuesta1.find();
    const encu1 = encuesta1.length;
    
    for(i = 0; i < encu1; i++) {
        if(encuesta1[i].q1 == '1') { e1p11 = e1p11 + 1 };
        if(encuesta1[i].q1 == '2') { e1p12 = e1p12 + 1 };
        if(encuesta1[i].q1 == '3') { e1p13 = e1p13 + 1 };
        if(encuesta1[i].q1 == '4') { e1p14 = e1p14 + 1 };
        if(encuesta1[i].q1 == '5') { e1p15 = e1p15 + 1 };

        if(encuesta1[i].q2 == '1') { e1p21 = e1p21 + 1 };
        if(encuesta1[i].q2 == '2') { e1p22 = e1p22 + 1 };
        if(encuesta1[i].q2 == '3') { e1p23 = e1p23 + 1 };
        if(encuesta1[i].q2 == '4') { e1p24 = e1p24 + 1 };
        if(encuesta1[i].q2 == '5') { e1p25 = e1p25 + 1 };

        if(encuesta1[i].q3 == '1') { e1p31 = e1p31 + 1 };
        if(encuesta1[i].q3 == '2') { e1p32 = e1p32 + 1 };
        if(encuesta1[i].q3 == '3') { e1p33 = e1p33 + 1 };
        if(encuesta1[i].q3 == '4') { e1p34 = e1p34 + 1 };
        if(encuesta1[i].q3 == '5') { e1p35 = e1p35 + 1 };

        if(encuesta1[i].q4 == '1') { e1p41 = e1p41 + 1 };
        if(encuesta1[i].q4 == '2') { e1p42 = e1p42 + 1 };
        if(encuesta1[i].q4 == '3') { e1p43 = e1p43 + 1 };
        if(encuesta1[i].q4 == '4') { e1p44 = e1p44 + 1 };
        if(encuesta1[i].q4 == '5') { e1p45 = e1p45 + 1 };

        if(encuesta1[i].q5 == '1') { e1p51 = e1p51 + 1 };
        if(encuesta1[i].q5 == '2') { e1p52 = e1p52 + 1 };
        if(encuesta1[i].q5 == '3') { e1p53 = e1p53 + 1 };
        if(encuesta1[i].q5 == '4') { e1p54 = e1p54 + 1 };
        if(encuesta1[i].q5 == '5') { e1p55 = e1p55 + 1 };

        if(encuesta1[i].q6 == '1') { e1p61 = e1p61 + 1 };
        if(encuesta1[i].q6 == '2') { e1p62 = e1p62 + 1 };
        if(encuesta1[i].q6 == '3') { e1p63 = e1p63 + 1 };
        if(encuesta1[i].q6 == '4') { e1p64 = e1p64 + 1 };
        if(encuesta1[i].q6 == '5') { e1p65 = e1p65 + 1 };

        if(encuesta1[i].q7 == '1') { e1p71 = e1p71 + 1 };
        if(encuesta1[i].q7 == '2') { e1p72 = e1p72 + 1 };
        if(encuesta1[i].q7 == '3') { e1p73 = e1p73 + 1 };
        if(encuesta1[i].q7 == '4') { e1p74 = e1p74 + 1 };
        if(encuesta1[i].q7 == '5') { e1p75 = e1p75 + 1 };

        if(encuesta1[i].q8 == '1') { e1p81 = e1p81 + 1 };
        if(encuesta1[i].q8 == '2') { e1p82 = e1p82 + 1 };
        if(encuesta1[i].q8 == '3') { e1p83 = e1p83 + 1 };
        if(encuesta1[i].q8 == '4') { e1p84 = e1p84 + 1 };
        if(encuesta1[i].q8 == '5') { e1p85 = e1p85 + 1 };
    };

    // (e1p1n = total preguntas sin respuesta) = (encu1 = numero de encuestas) - (e1p11 + e1p12... = respuestas)
    const e1p1n = encu1 - (e1p11 + e1p12 + e1p13 + e1p14 + e1p15); 
    const e1p2n = encu1 - (e1p21 + e1p22 + e1p23 + e1p24 + e1p25);
    const e1p3n = encu1 - (e1p31 + e1p32 + e1p33 + e1p34 + e1p35);
    const e1p4n = encu1 - (e1p41 + e1p42 + e1p43 + e1p44 + e1p45);
    const e1p5n = encu1 - (e1p51 + e1p52 + e1p53 + e1p54 + e1p55);
    const e1p6n = encu1 - (e1p61 + e1p62 + e1p63 + e1p64 + e1p65);
    const e1p7n = encu1 - (e1p71 + e1p72 + e1p73 + e1p74 + e1p75);
    const e1p8n = encu1 - (e1p81 + e1p82 + e1p83 + e1p84 + e1p85);

    // (calculo de porcentages)

    const e1p1p = Math.round((e1p1n * 100) / encu1);
    const e1p11p = Math.round((e1p11 * 100) / encu1);
    const e1p12p = Math.round((e1p12 * 100) / encu1);
    const e1p13p = Math.round((e1p13 * 100) / encu1);
    const e1p14p = Math.round((e1p14 * 100) / encu1);
    const e1p15p = Math.round((e1p15 * 100) / encu1);

    const e1p2p = Math.round((e1p2n * 100) / encu1);
    const e1p21p = Math.round((e1p21 * 100) / encu1);
    const e1p22p = Math.round((e1p22 * 100) / encu1);
    const e1p23p = Math.round((e1p23 * 100) / encu1);
    const e1p24p = Math.round((e1p24 * 100) / encu1);
    const e1p25p = Math.round((e1p25 * 100) / encu1);

    const e1p3p = Math.round((e1p3n * 100) / encu1);
    const e1p31p = Math.round((e1p31 * 100) / encu1);
    const e1p32p = Math.round((e1p32 * 100) / encu1);
    const e1p33p = Math.round((e1p33 * 100) / encu1);
    const e1p34p = Math.round((e1p34 * 100) / encu1);
    const e1p35p = Math.round((e1p35 * 100) / encu1);

    const e1p4p = Math.round((e1p4n * 100) / encu1);
    const e1p41p = Math.round((e1p41 * 100) / encu1);
    const e1p42p = Math.round((e1p42 * 100) / encu1);
    const e1p43p = Math.round((e1p43 * 100) / encu1);
    const e1p44p = Math.round((e1p44 * 100) / encu1);
    const e1p45p = Math.round((e1p45 * 100) / encu1);

    const e1p5p = Math.round((e1p5n * 100) / encu1);
    const e1p51p = Math.round((e1p51 * 100) / encu1);
    const e1p52p = Math.round((e1p52 * 100) / encu1);
    const e1p53p = Math.round((e1p53 * 100) / encu1);
    const e1p54p = Math.round((e1p54 * 100) / encu1);
    const e1p55p = Math.round((e1p55 * 100) / encu1);

    const e1p6p = Math.round((e1p6n * 100) / encu1);
    const e1p61p = Math.round((e1p61 * 100) / encu1);
    const e1p62p = Math.round((e1p62 * 100) / encu1);
    const e1p63p = Math.round((e1p63 * 100) / encu1);
    const e1p64p = Math.round((e1p64 * 100) / encu1);
    const e1p65p = Math.round((e1p65 * 100) / encu1);

    const e1p7p = Math.round((e1p7n * 100) / encu1);
    const e1p71p = Math.round((e1p71 * 100) / encu1);
    const e1p72p = Math.round((e1p72 * 100) / encu1);
    const e1p73p = Math.round((e1p73 * 100) / encu1);
    const e1p74p = Math.round((e1p74 * 100) / encu1);
    const e1p75p = Math.round((e1p75 * 100) / encu1);

    const e1p8p = Math.round((e1p8n * 100) / encu1);
    const e1p81p = Math.round((e1p81 * 100) / encu1);
    const e1p82p = Math.round((e1p82 * 100) / encu1);
    const e1p83p = Math.round((e1p83 * 100) / encu1);
    const e1p84p = Math.round((e1p84 * 100) / encu1);
    const e1p85p = Math.round((e1p85 * 100) / encu1);

    res.render('encuestas', { encu1, e1p11, e1p12, e1p13, e1p14, e1p15, 
        e1p21, e1p22, e1p23, e1p24, e1p25, 
        e1p31, e1p32, e1p33, e1p34, e1p35, 
        e1p41, e1p42, e1p43, e1p44, e1p45, 
        e1p51, e1p52, e1p53, e1p54, e1p55, 
        e1p61, e1p62, e1p63, e1p64, e1p65, 
        e1p71, e1p72, e1p73, e1p74, e1p75, 
        e1p81, e1p82, e1p83, e1p84, e1p85, 
        e1p1n, e1p2n, e1p3n, e1p4n, e1p5n, e1p6n, e1p7n, e1p8n,
        e1p1p, e1p11p, e1p12p, e1p13p, e1p14p, e1p15p, 
        e1p2p, e1p21p, e1p22p, e1p23p, e1p24p, e1p25p, 
        e1p3p, e1p31p, e1p32p, e1p33p, e1p34p, e1p35p, 
        e1p4p, e1p41p, e1p42p, e1p43p, e1p44p, e1p45p,
        e1p5p, e1p51p, e1p52p, e1p53p, e1p54p, e1p55p, 
        e1p6p, e1p61p, e1p62p, e1p63p, e1p64p, e1p65p,
        e1p7p, e1p71p, e1p72p, e1p73p, e1p74p, e1p75p,
        e1p8p, e1p81p, e1p82p, e1p83p, e1p84p, e1p85p,
        title: 'Encuestas' });
});


module.exports = router;
